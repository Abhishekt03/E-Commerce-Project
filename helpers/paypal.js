const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZv0cNI2bpSvcMhyEjISk2pJXVIMPI0vcVdmK9DKoRIL3qElJscMDfRegejiiBuQhyX6n7lEibmc0R4E",
  client_secret: "EAGG228GOVHpMnWpzCA0qxYxgSapndV3hWZOCTQq5OiUZ7I2KhyA4PsOpsA8q7aSFgIFmbGJpH8o5brn",
});

module.exports = paypal;
