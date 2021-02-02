const moment = require("moment");
const mandrill = require("mandrill-api");
const mandrill_client = new mandrill.Mandrill("_8uJw57XFBbrRsBVjMCAPg");

const messageOption = {
  // => 광고 승인 이메일 템플릿 사용중
  template_name: "danbi-send-advertisement-permission-approved",

  /**
   * 인자로 필요한 데이터
   * user_name
   * ad_name
   * ad_type
   * ad_registeration_date
   * execution_period
   * cost_per_click
   * daily_budget
   */
  template_content: [
    {
      name: "user_name",
      content: "ChangHun Lee",
    },
    {
      name: "ad_name",
      content: "파스쿠치 대전점 광고",
    },
    {
      name: "ad_type",
      content: "동영상 광고",
    },
    {
      name: "ad_registeration_date",
      content: "2021년-02월-01일",
    },
    {
      name: "execution_period",
      content: "2021년-02월-01일 ~ 2021년-02월-14일",
    },
    { name: "cost_per_click", content: "70 원" },
    { name: "daily_budget", content: "100,000 원" },
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
