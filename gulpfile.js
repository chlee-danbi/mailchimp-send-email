const { series } = require("gulp");
require("./src/tasks");

// => 제작된 모든 이메일 템플릿 전송
exports.sendAllEmailTemplate = series(
  "Send Payment Approved",
  "Send Payment Denied",
  "Send Advertisement Approved",
  "Send Advertisement Denied"
);

// => 제작된 모든 결제 이메일 템플릿 전송
exports.sendPaymentEmailTemplate = series(
  "Send Payment Approved",
  "Send Payment Denied"
);

// => 제작된 모든 결제 이메일 템플릿 전송
exports.sendAdvertisementEmailTemplate = series(
  "Send Advertisement Approved",
  "Send Advertisement Denied"
);
