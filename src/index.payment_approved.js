const moment = require("moment");
const mandrill = require("mandrill-api");
const mandrill_client = new mandrill.Mandrill("_8uJw57XFBbrRsBVjMCAPg");

const messageOption = {
  // => 결제 승인 이메일 템플릿 사용중
  template_name: "danbi-send-payment-approved",

  /**
   * 인자로 필요한 데이터
   * ad_name
   * ad_type
   * date
   * payment_card_info
   * click_count
   * optional_title
   * execution_amount
   * vat
   * total_payment_amount
   */
  template_content: [
    {
      name: "ad_name",
      content: "파스쿠치 부산점 광고",
    },
    {
      name: "ad_type",
      content: "이미지 광고",
    },
    {
      name: "date",
      content: "2021년-02월-01일",
    },
    {
      name: "payment_card_info",
      content: "단비카드(DB) 1111-2222-3333-4444",
    },
    {
      name: "amount_of_payment",
      content: "68,478",
    },
    {
      name: "click_count",
      content: "125",
    },
    { name: "optional_title", content: "클릭 수" },
    { name: "execution_amount", content: "67,800" },
    { name: "vat", content: "678" },
    { name: "total_payment_amount", content: "68,480" },
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
