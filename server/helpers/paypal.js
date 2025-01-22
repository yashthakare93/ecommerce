const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "live",
  client_id: "your-client-id",
  client_secret: "your-client-secret",
});

module.exports = paypal;
