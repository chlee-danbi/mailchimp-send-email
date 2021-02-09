/**
 *
 * This call sends a message to the given recipient with vars and custom vars.
 *
 */
const mail = require("node-mailjet");

require("dotenv").config();

const mailjet = mail.connect(PUBLIC_API_KEY || "", PRIVATE_API_KEY || "");

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
      TemplateID: 2387388,
      TemplateLanguage: true,
      Subject: "[Danbi Korea] 비밀번호 재설정 안내",
      Variables: {
        reset_password_link: "ad-fi-admin.danbicorp.com",
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
