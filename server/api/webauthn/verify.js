const getDirectusToken = async () => {
    // Fetch token from secure backend or validate current token
    const token = localStorage.getItem('directusToken');
    if (!token) {
      // Attempt to refresh the token
      const refreshedToken = await refreshDirectusToken();
      localStorage.setItem('directusToken', refreshedToken);
      return refreshedToken;
    }
    return token;
  };
  