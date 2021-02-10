/**
 *
 * This call sends a message to the given recipient with vars and custom vars.
 *
 */
const mailjet = require("node-mailjet");

require("dotenv").config();

const mailjet_client = mailjet.connect(
  process.env.PUBLIC_API_KEY || "",
  process.env.PRIVATE_API_KEY || ""
);

const request = mailjet_client.post("send", { version: "v3.1" }).request({
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
      TemplateID: 2381289,
      TemplateLanguage: true,
      Subject: "[Danbi Korea] 결제 승인 안내",
      Variables: {
        ad_execution_date: "2021년 02월 09일",
        ad_name: "파스쿠치 부산점 광고",
        ad_type: "이미지 광고",
        date: "2021년 02월 11일",
        payment_card_info: "단비 카드(DB) 1111-2222-3333-4444",
        amount_of_payment: "68,478",
        click_count: "125",
        optional_title: "클릭 수",
        execution_amount: "67,800",
        vat: "678",
        total_payment_amount: "68,478",
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
