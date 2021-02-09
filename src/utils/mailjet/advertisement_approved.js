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
      TemplateID: 2386751,
      TemplateLanguage: true,
      Subject: "[Danbi Korea] 광고 승인 안내",
      Variables: {
        user_name: "ChangHun Lee",
        ad_name: "파스쿠치 대전점 광고",
        ad_type: "동영상 광고",
        ad_registeration_date: "2021년 02월 15일",
        execution_period: "2021년 02월 15일 ~ 2021년 02월 16일",
        optional_title: "재생당 비용",
        cost_per_click: "70 원",
        daily_budget: "100,000원",
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
