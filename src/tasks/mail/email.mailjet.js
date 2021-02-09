const { task } = require("gulp");
const { spawnSync } = require("child_process");

task("Mailjet Send Payment Approved", async function () {
  const sendPaymentApproved = await spawnSync(
    "node",
    ["src/utils/mailjet/payment_approved.js"],
    { stdio: "inherit" }
  );
  return sendPaymentApproved;
});

task("Mailjet Send Payment Denied", async function () {
  const sendPaymentDenied = await spawnSync(
    "node",
    ["src/utils/mailjet/payment_denied.js"],
    { stdio: "inherit" }
  );
  return sendPaymentDenied;
});

task("Mailjet Send Advertisement Approved", async function () {
  const sendAdvertisementApproved = await spawnSync(
    "node",
    ["src/utils/mailjet/advertisement_approved.js"],
    { stdio: "inherit" }
  );
  return sendAdvertisementApproved;
});

task("Mailjet Send Advertisement Denied", async function () {
  const sendAdvertisementDenied = await spawnSync(
    "node",
    ["src/utils/mailjet/advertisement_denied.js"],
    { stdio: "inherit" }
  );
  return sendAdvertisementDenied;
});
