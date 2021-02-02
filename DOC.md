## References

### Main

- [MailChimp API Docs](https://mailchimp.com/developer/transactional/api/exports/)
- [MailChimp Email Client CSS Support](https://templates.mailchimp.com/resources/email-client-css-support/)
- [Mandrill API Docs ( node.js version )](https://mandrillapp.com/api/docs/messages.JSON.html#method=send)
- [Mandrill SetUp Guide](https://documentation.onesignal.com/v6.0/docs/mandrill-setup)
- [Mandrill Easy Tutorial With node.js](https://medium.com/@harryhayes/how-to-send-server-email-with-node-js-859e34c10ae4)

### e.t.c.

+ [Github Repo : MailChimp Mandrill Boiler Plate ( feat. chlee-danbi )](https://github.com/chlee-danbi/mailchimp-send-email)
+ [Error : recipient-domain-mismatch | free trial 에서 다른 도메인으로 이메일 전송이 안되는 이유](https://wordpress.org/support/topic/getting-recipient-domain-mismatch-errors-email-send-rejected/)
+ [Error : invalid-sender | 이메일 전송 테스트 "reject_reason":"invalid-sender"](https://stackoverflow.com/questions/20604551/mandrill-reject-reason-invalid-sender)
+ [Error : queued | 이메일 전송 테스트 "status": "queued" ](https://stackoverflow.com/questions/32172638/mandrill-status-queued#:~:text=A%20queued%20response%20in%20the,response%20from%20a%20recipient%20server.&text=There%20are%20a%20number%20of,in%20a%20single%20API%20call.)

+ [MailGun API Docs](https://documentation.mailgun.com/en/latest/api_reference.html#api-reference)


## 템플릿 종류 
> 완성된 템플릿들의 종류 및 간단한 설명
> 템플릿 이름에 `anchor link` 가 걸려 있습니다. 

| template name                                                          | description                | state |
| :--------------------------------------------------------------------- | :------------------------- | :---: |
| [`danbi-send-payment-approved`](#payment-approved)                     | 결제 완료 이메일 전송      |   ✅   |
| [`danbi-send-payment-denied`](#payment-denied)                         | 결제 오류 이메일 전송      |   ✅   |
| [`danbi-send-advertisement-permission-approved`](#permission-approved) | 광고 승인 이메일 전송      |   ✅   |
| [`danbi-send-advertisement-permission-denied`](#permission-denied)     | 광고 승인 반려 이메일 전송 |   ✅   |


<!-- danbi-send-advertisement-payment-approved -->
<!-- danbi-send-advertisement-payment-denied -->

<!--### 알아두면 좋을것 -->

<!--#### MailChimp -->
<!-- - 이메일 전송시에는 `MailChimp` 의 addon 인 `mandrill` 을 사용합니다.  -->
<!-- - API 키는 `MailChimp` 와 `Mandrill` 둘다에서 발급 받을 수 있습니다.     -->
<!-- 하지만, 이메일 전송시 사용되는 `mandrill-api` 모듈을 사용하기 위해서는 `Mandrill` 에서 API KEY 를 발급받아야 합니다.  -->
<!-- - `Mandrill` 은 free trial 로 이메일 500개를 전송할 수 있습니다.   -->
<!-- 하지만, 이메일 전송시 사전에 `Mandrill` 에 등록한 도메인만 가능합니다. ( free trial 제한 )-->
<!-- - > 현재 등록된 도메인은 `danbicorp.com` 입니다.-->

<!-- 1. outlook 은 다른 이메일 템플릿과 다르게 까다로운게 많다.-->
<!-- 2. `live-server` 에서는 완성되어 보여도 이메일 전송 테스트를 해보면 css가 깨져서 온다.-->
<!-- `mailchimp` 의 `mandrill` 에서 지원하지 않는것도 있지만, outlook 에서 지원하지 않는것도 존재한다.-->
<!--   + `display:flex` 는 적용되는데 `justify-content` 는 적용되지 않는다.-->
<!--   + `position:relative` 를 사용하여 `content` 를 고정시킬려고 시도해보았지만, 적용되지 않았다.-->



## 결제 승인 템플릿 <a href="#payment-approved-email-template" id="payment-approved">#</a>

### mc:edit | Arguments

| variable               | description | test input                        |
| :--------------------- | :---------- | :-------------------------------- |
| `ad_name`              | 광고명      | 파스쿠치 부산점 광고              |
| `ad_type`              | 광고 타입   | 이미지 광고                       |
| `date`                 | 날짜        | 2021년-02월-01일                  |
| `payment_card_info`    | 결제 수단   | 단비 카드(DB) 1111-2222-3333-4444 |
| `amount_of_payment`    | 결제 금액   | 68,478                            |
| `click_count`          | 클릭수      | 125                               |
| `execution_amount`     | 클릭수      | 67,800                            |
| `vat`                  | 부가세      | 678                               |
| `total_payment_amount` | 총 결제금액 | 68,478                            |

### Send Email Test Result
<img width="798" alt="스크린샷 2021-02-02 오후 11 21 41" src="https://user-images.githubusercontent.com/76930839/106613497-99dbd280-65ad-11eb-94a0-69232499c084.png">


### Code Example
> `danbi-send-payment-approved` : 결제 승인 이메일 템플릿 전송 코드 예시

```javascript
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
    { name: "execution_amount", content: "67,800" },
    { name: "vat", content: "678" },
    { name: "total_payment_amount", content: "68,478" },
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
```

## 결제 오류 템플릿 <a href="#payment-denied-email-template" id="payment-denied">#</a>

### mc:edit | Arguments

| variable        | description | test input                    |
| :-------------- | :---------- | :---------------------------- |
| `ad_name`       | 광고명      | 파스쿠치 대전점 광고          |
| `ad_payment`    | 결제 수단   | 단비 카드 1111-2222-3333-4444 |
| `ad_date`       | 결제 일자   | 2021년-02월-01일              |
| `ad_error_code` | 에러 코드   | ABC-123                       |

### Send Email Test Result

<img width="796" alt="스크린샷 2021-02-02 오후 11 29 51" src="https://user-images.githubusercontent.com/76930839/106614376-9d238e00-65ae-11eb-9e8f-1cf8e126f2d2.png">

### Code Example
> `danbi-send-payment-denied` : 결제 오류 이메일 템플릿 전송 코드 예시

```javascript
const moment = require("moment");
const mandrill = require("mandrill-api");
const mandrill_client = new mandrill.Mandrill("_8uJw57XFBbrRsBVjMCAPg");

const messageOption = {
  // => 결제 오류 이메일 템플릿 사용중
  template_name: "danbi-send-reject-receipt",

  /**
   * 인자로 필요한 데이터
   * ad_name,
   * ad_payment,
   * ad_date,
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

```

## 광고 승인 템플릿 <a href="#permission-approved-email-template" id="permission-approved">#</a>

### mc:edit | Arguments

| variable                | description | test input                          |
| :---------------------- | :---------- | :---------------------------------- |
| `user_name`             | 유저명      | ChangHun Lee                        |
| `ad_name`               | 광고명      | 파스쿠치 대전점 광고                |
| `ad_type`               | 광고 종류   | 동영상 광고                         |
| `ad_registeration_date` | 광고 등록일 | 2021년-02월-01일                    |
| `execution_period`      | 집행 기간   | 2021년-02월-01일 ~ 2021년-02월-14일 |
| `cost_per_click`        | 클릭당 비용 | 70 원                               |
| `daily_budget`          | 1일 예산    | 100,000 원                          |

### Send Email Test Result 

<img width="748" alt="스크린샷 2021-02-03 오전 12 01 37" src="https://user-images.githubusercontent.com/76930839/106618669-0efdd680-65b3-11eb-8bca-ade6807b0ad1.png">

### Code Example
> `danbi-send-advertisement-permission-approved` : 광고 승인 이메일 템플릿 전송 코드 예시

```javascript
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
```


##  광고 승인 반려 템플릿 <a href="#permission-denied-email-template" id="permission-denied">#</a>

### mc:edit | Arguments

| variable        | description | test input           |
| :-------------- | :---------- | :------------------- |
| `user_name`     | 유저명      | ChangHun Lee         |
| `ad_name`       | 광고명      | 파스쿠치 강남점 광고 |
| `ad_type`       | 광고 종류   | 동영상 광고          |
| `ad_info_step1` | 반려 정보   | 테스트               |
| `ad_info_step2` | 반려 정보   | 테스트               |
| `ad_info_step3` | 반려 정보   | 테스트               |
| `ad_info_step4` | 반려 정보   | 테스트               |

### Send Email Test Result 

![스크린샷 2021-02-02 오후 1 35 39 1](https://user-images.githubusercontent.com/76930839/106553210-41c8b000-655c-11eb-8d4b-08bcbbb6bd15.png)

### Code Example
> `danbi-send-advertisement-permission-denied` : 광고 승인 반려 이메일 템플릿 전송 코드 예시
```javascript
const moment = require("moment");
const mandrill = require("mandrill-api");
const mandrill_client = new mandrill.Mandrill("_8uJw57XFBbrRsBVjMCAPg");

const messageOption = {
  // => 광고 승인 반려 이메일 템플릿 사용중
  template_name: "danbi-send-advertisement-permission-denied",

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
      content: "테스트",
    },
    {
      name: "ad_info_step2",
      content: "테스트",
    },
    {
      name: "ad_info_step3",
      content: "테스트",
    },
    {
      name: "ad_info_step4",
      content: "테스트",
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
```


