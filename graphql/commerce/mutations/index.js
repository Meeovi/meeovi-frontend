const fs = require('fs');
const path = require('path');

module.exports.addItemToOrder = fs.readFileSync(path.join(__dirname, 'addItemToOrder.gql'), 'utf8');
module.exports.removeOrderLine = fs.readFileSync(path.join(__dirname, 'removeOrderLine.gql'), 'utf8');
module.exports.removeAllOrderLines = fs.readFileSync(path.join(__dirname, 'removeAllOrderLines.gql'), 'utf8');
module.exports.adjustOrderLine = fs.readFileSync(path.join(__dirname, 'adjustOrderLine.gql'), 'utf8');
module.exports.applyCouponCode = fs.readFileSync(path.join(__dirname, 'applyCouponCode.gql'), 'utf8');
module.exports.removeCouponCode = fs.readFileSync(path.join(__dirname, 'removeCouponCode.gql'), 'utf8');
module.exports.transitionOrderToState = fs.readFileSync(path.join(__dirname, 'transitionOrderToState.gql'), 'utf8');
module.exports.setOrderShippingAddress = fs.readFileSync(path.join(__dirname, 'setOrderShippingAddress.gql'), 'utf8');
module.exports.setOrderBillingAddress = fs.readFileSync(path.join(__dirname, 'setOrderBillingAddress.gql'), 'utf8');
module.exports.unsetOrderShippingAddress = fs.readFileSync(path.join(__dirname, 'unsetOrderShippingAddress.gql'), 'utf8');
module.exports.unsetOrderBillingAddress = fs.readFileSync(path.join(__dirname, 'unsetOrderBillingAddress.gql'), 'utf8');
module.exports.setOrderCustomFields = fs.readFileSync(path.join(__dirname, 'setOrderCustomFields.gql'), 'utf8');
module.exports.setOrderShippingMethod = fs.readFileSync(path.join(__dirname, 'setOrderShippingMethod.gql'), 'utf8');
module.exports.addPaymentToOrder = fs.readFileSync(path.join(__dirname, 'addPaymentToOrder.gql'), 'utf8');
module.exports.setCustomerForOrder = fs.readFileSync(path.join(__dirname, 'setCustomerForOrder.gql'), 'utf8');
module.exports.login = fs.readFileSync(path.join(__dirname, 'login.gql'), 'utf8');
module.exports.authenticate = fs.readFileSync(path.join(__dirname, 'authenticate.gql'), 'utf8');
module.exports.logout = fs.readFileSync(path.join(__dirname, 'logout.gql'), 'utf8');
module.exports.registerCustomerAccount = fs.readFileSync(path.join(__dirname, 'registerCustomerAccount.gql'), 'utf8');
module.exports.refreshCustomerVerification = fs.readFileSync(path.join(__dirname, 'refreshCustomerVerification.gql'), 'utf8');
module.exports.updateCustomer = fs.readFileSync(path.join(__dirname, 'updateCustomer.gql'), 'utf8');
module.exports.createCustomerAddress = fs.readFileSync(path.join(__dirname, 'createCustomerAddress.gql'), 'utf8');
module.exports.updateCustomerAddress = fs.readFileSync(path.join(__dirname, 'updateCustomerAddress.gql'), 'utf8');
module.exports.deleteCustomerAddress = fs.readFileSync(path.join(__dirname, 'deleteCustomerAddress.gql'), 'utf8');
module.exports.verifyCustomerAccount = fs.readFileSync(path.join(__dirname, 'verifyCustomerAccount.gql'), 'utf8');
module.exports.updateCustomerPassword = fs.readFileSync(path.join(__dirname, 'updateCustomerPassword.gql'), 'utf8');
module.exports.requestUpdateCustomerEmailAddress = fs.readFileSync(path.join(__dirname, 'requestUpdateCustomerEmailAddress.gql'), 'utf8');
module.exports.updateCustomerEmailAddress = fs.readFileSync(path.join(__dirname, 'updateCustomerEmailAddress.gql'), 'utf8');
module.exports.requestPasswordReset = fs.readFileSync(path.join(__dirname, 'requestPasswordReset.gql'), 'utf8');
module.exports.resetPassword = fs.readFileSync(path.join(__dirname, 'resetPassword.gql'), 'utf8');
