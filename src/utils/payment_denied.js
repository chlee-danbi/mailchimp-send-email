const moment = require("moment");
const mandrill = require("mandrill-api");

require("dotenv").config();

const API_KEY = process.env.MANDRILL_API_KEY;
const mandrill_client = new mandrill.Mandrill(API_KEY);

exports;
const messageOption = {
  // => 결제 오류 이메일 템플릿 사용중
  template_name: "danbi-send-payment-denied",

  /**
   * 인자로 필요한 데이터
   * ad_name,
   * ad_payment,
   * ad_date,
   * ad_execution_day
   * ad_error_code
   */
  template_content: [
    {
      name: "ad_name",
      content: "파스쿠치 대전점 광고",
    },
    {
      name: "ad_payment",
      content: "단비 카드 1111-2222-3333-4444",
    },
    {
      name: "ad_execution_day",
      content: "2021년-01월-31일",
    },
    {
      name: "ad_date",
      content: "2021년-02월-01일",
    },
    {
      name: "ad_error_code",
      content: "ABC-123",
    },
  ],
  message: {
    from_email: "help@danbicorp.com", // => 발신자 이메일
    from_name: "Danbi Korea", // => 발신자 이름
    to: [{ email: "ch.lee@danbicorp.com", name: "danbi-help", type: "to" }], // => 수신자 정보
    subject: `[AD.Fi] ${moment().format(
      // => 이메일 수신자가 이메일을 열때 표시되는 제목
      "YYYY-MM-DD"
      // )}일자 '${AD_name}' 결제 오류 안내`,
    )}일자 '파스쿠치 강남역 광고' 결제 오류 안내`,
    text: `이메일 클라이언트가 HTML을 지원하지 않습니다. 영수증을 보시려면 HTML 컨텐츠를 볼 수 있는 이메일 클라이언트를 사용해주세요.`,
  },
};

mandrill_client.messages.sendTemplate(
  messageOption,
  (success) => console.log(success),
  (failure) => console.log(failure)
);
