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
      TemplateID: 2386790,
      TemplateLanguage: true,
      Subject: "[Danbi Korea] 광고 반려 안내",
      Variables: {
        user_name: "ChangHun Lee",
        ad_name: "파스쿠치 강남점 광고",
        ad_type: "동영상 광고",
        ad_info_step1: "한줄 라인 테스트 중입니다.",
        ad_info_step2:
          "두줄 라인 테스트 중입니다. 두줄 라인 테스트 중입니다. 두줄 라인 테스트 중입니다. 두줄 라인 테스트 중입니다.",
        ad_info_step3:
          "세줄 라인 테스트 중입니다. 세줄 라인 테스트 중입니다. \n세줄 라인 테스트 중입니다.\\n 세줄 라인 테스트 중입니다. 세줄 라인 테스트 중입니다. 세줄 라인 테스트 중입니다.",
        ad_info_step4:
          "네줄 라인 테스트 중입니다.\n 네줄 라인 테스트 중입니다.\\n 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다.",
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
