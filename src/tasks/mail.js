const { task } = require("gulp");
const { spawnSync } = require("child_process");

task("Send Payment Approved", async function () {
  const sendPaymentApproved = await spawnSync(
    "node",
    ["src/index.payment_approved.js"],
    { stdio: "inherit" }
  );
  return sendPaymentApproved;
});

task("Send Payment Denied", async function () {
  const sendPaymentDenied = await spawnSync(
    "node",
    ["src/index.payment_denied.js"],
    { stdio: "inherit" }
  );
  return sendPaymentDenied;
});

task("Send Advertisement Approved", async function () {
  const sendAdvertisementApproved = await spawnSync(
    "node",
    ["src/index.advertisement_approved.js"],
    { stdio: "inherit" }
  );
  return sendAdvertisementApproved;
});

task("Send Advertisement Denied", async function () {
  const sendAdvertisementDenied = await spawnSync(
    "node",
    ["src/index.advertisement_denied.js"],
    { stdio: "inherit" }
  );
  return sendAdvertisementDenied;
});
