const { task } = require("gulp");
const { spawnSync } = require("child_process");

task("Mandrill Send Payment Approved", async function () {
  const sendPaymentApproved = await spawnSync(
    "node",
    ["src/utils/mandrill/payment_approved.js"],
    { stdio: "inherit" }
  );
  return sendPaymentApproved;
});

task("Mandrill Send Payment Denied", async function () {
  const sendPaymentDenied = await spawnSync(
    "node",
    ["src/utils/mandrill/payment_denied.js"],
    { stdio: "inherit" }
  );
  return sendPaymentDenied;
});

task("Mandrill Send Advertisement Approved", async function () {
  const sendAdvertisementApproved = await spawnSync(
    "node",
    ["src/utils/mandrill/advertisement_approved.js"],
    { stdio: "inherit" }
  );
  return sendAdvertisementApproved;
});

task("Mandrill Send Advertisement Denied", async function () {
  const sendAdvertisementDenied = await spawnSync(
    "node",
    ["src/utils/mandrill/advertisement_denied.js"],
    { stdio: "inherit" }
  );
  return sendAdvertisementDenied;
});
