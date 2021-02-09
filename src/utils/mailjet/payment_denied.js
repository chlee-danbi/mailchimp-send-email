/**
 *
 * This call sends a message to the given recipient with vars and custom vars.
 *
 */
const mail = require("node-mailjet");

require("dotenv").config();

const PUBLIC_API_KEY = process.env.MAILJET_API_KEY;
const PRIVATE_API_KEY = process.env.MAILJET_SECRET_KEY;

const mailjet = mail.connect(
  "7929463af6e5c92b7b185511b052b461",
  "afc742d5ff121f3227ee6245d188976a"
);

const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: "ch.lee@danbicorp.com",
        Name: "Danbi Korea",
      },
      To: [
        {
          Email: "ch.lee@danbicorp.com",
          Name: "고객님",
        },
      ],
      TemplateID: 2386696,
      TemplateLanguage: true,
      Subject: "[Danbi Korea] 결제 실패 안내",
      Variables: {
        ad_name: "파스쿠치 대전점 광고",
        ad_payment: "단비 카드 1111-2222-3333-4444",
        ad_execution_date: "2021년 3월 12일",
        ad_date: "2021년 3월 13일",
        ad_error_code: "ABC-123",
      },
    },
  ],
});
request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log(err.statusCode);
  });
