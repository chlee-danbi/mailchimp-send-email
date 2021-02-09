const { series } = require("gulp");
require("./src/tasks");

// => [Mandrill] 제작된 모든 이메일 템플릿 전송
exports.sendAllEmailTemplateMandrill = series(
  "Mandrill Send Payment Approved",
  "Mandrill Send Payment Denied",
  "Mandrill Send Advertisement Approved",
  "Mandrill Send Advertisement Denied"
);

// => [Mandrill] 제작된 모든 결제 이메일 템플릿 전송
exports.sendPaymentEmailTemplateMandrill = series(
  "Mandrill Send Payment Approved",
  "Mandrill Send Payment Denied"
);

// => [Mandrill] 제작된 모든 결제 이메일 템플릿 전송
exports.sendAdvertisementEmailTemplateMandrill = series(
  "Mandrill Send Advertisement Approved",
  "Mandrill Send Advertisement Denied"
);


// => [Mailjet] 제작된 모든 이메일 템플릿 전송
exports.sendAllEmailTemplateMailjet = series(
  "Mailjet Send Payment Approved",
  "Mailjet Send Payment Denied",
  "Mailjet Send Advertisement Approved",
  "Mailjet Send Advertisement Denied"
);

// => [Mailjet] 제작된 모든 결제 이메일 템플릿 전송
exports.sendPaymentEmailTemplateMailjet = series(
  "Mailjet Send Payment Approved",
  "Mailjet Send Payment Denied"
);

// => [Mailjet] 제작된 모든 결제 이메일 템플릿 전송
exports.sendAdvertisementEmailTemplateMailjet = series(
  "Mailjet Send Advertisement Approved",
  "Mailjet Send Advertisement Denied"
);