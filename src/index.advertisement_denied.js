const moment = require("moment");
const mandrill = require("mandrill-api");
const mandrill_client = new mandrill.Mandrill("_8uJw57XFBbrRsBVjMCAPg");

const messageOption = {
  // => 광고 승인 반려 이메일 템플릿 사용중
  template_name: "danbi-send-advertisement-denied",

  /**
   * 인자로 필요한 데이터
   * user_name,
   * ad_name,
   * ad_type
   * ad_info_step1
   * ad_info_step2
   * ad_info_step3
   * ad_info_step4
   */
  template_content: [
    {
      name: "user_name",
      content: "ChangeHun Lee",
    },
    {
      name: "ad_name",
      content: "파스쿠치 강남점 광고",
    },
    {
      name: "ad_type",
      content: "동영상 광고",
    },
    {
      name: "ad_info_step1",
      content: "한줄 라인 테스트 중입니다.",
    },
    {
      name: "ad_info_step2",
      content:
        "두줄 라인 테스트 중입니다. 두줄 라인 테스트 중입니다. 두줄 라인 테스트 중입니다. 두줄 라인 테스트 중입니다.",
    },
    {
      name: "ad_info_step3",
      content:
        "세줄 라인 테스트 중입니다. 세줄 라인 테스트 중입니다. 세줄 라인 테스트 중입니다. 세줄 라인 테스트 중입니다. 세줄 라인 테스트 중입니다. 세줄 라인 테스트 중입니다.",
    },
    {
      name: "ad_info_step4",
      content:
        "네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다. 네줄 라인 테스트 중입니다.",
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
