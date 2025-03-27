import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const router = express.Router();

// Load JWT secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET;

// Age verification endpoint
router.post('/verify-age', async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth } = req.body;

    // Calculate age
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      return res.status(403).json({
        verified: false,
        message: 'Must be 18 or older to access this content'
      });
    }

    // Create verification token
    const token = jwt.sign({
      verified: true,
      firstName,
      lastName,
      dateOfBirth,
      verifiedAt: new Date()
    }, JWT_SECRET, { expiresIn: '24h' });

    // Store verification in database (optional)
    await storeVerification({
      firstName,
      lastName,
      dateOfBirth,
      ipAddress: req.ip,
      timestamp: new Date()
    });

    res.json({
      verified: true,
      token
    });

  } catch (error) {
    console.error('Age verification error:', error);
    res.status(500).json({
      message: 'Internal server error during verification'
    });
  }
});

// Token validation endpoint
router.post('/validate-token', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.json({ valid: false });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Check if token is expired
    if (decoded.exp < Date.now() / 1000) {
      return res.json({ valid: false });
    }

    res.json({ valid: true });

  } catch (error) {
    res.json({ valid: false });
  }
});

// Optional: Database storage function
async function storeVerification(data) {
  // Implement your database storage logic here
  // This could be useful for compliance and audit purposes
}

module.exports = router;
