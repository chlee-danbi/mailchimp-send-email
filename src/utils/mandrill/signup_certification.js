const mandrill = require("mandrill-api");

require("dotenv").config();

const API_KEY = process.env.MANDRILL_API_KEY;
const mandrill_client = new mandrill.Mandrill(API_KEY);

const messageOption = {
  // => 이메일 인증 템플릿 사용중
  template_name: "danbi-send-signup-certification",

  /**
   * 인자로 필요한 데이터
   * certification_code
   */
  template_content: [
    {
      name: "certification_code",
      content: "DANBI123",
    },
  ],
  message: {
    from_email: "help@danbicorp.com", // => 발신자 이메일
    from_name: "Danbi Korea", // => 발신자 이름
    to: [{ email: "ch.lee@danbicorp.com", name: "danbi-help", type: "to" }], // => 수신자 정보
    subject: "[단비 코리아] 이메일 인증",
    text: `이메일 클라이언트가 HTML을 지원하지 않습니다. 영수증을 보시려면 HTML 컨텐츠를 볼 수 있는 이메일 클라이언트를 사용해주세요.`,
  },
};

mandrill_client.messages.sendTemplate(
  messageOption,
  (success) => console.log(success),
  (failure) => console.log(failure)
);
