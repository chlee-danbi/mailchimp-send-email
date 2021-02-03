### 라이브러리 설치

```bash
npm install
```
### 모든 결제 메일 발송
```bash
send:payment:all
```
### 결제 승인 메일 발송
> `index.payment_approved.js` 에서 수신인 수정이 필요합니다.

```bash
yarn send:payment:approved
```

### 결제 오류 메일 발송
> `index.payment_denied.js` 에서 수신인 수정이 필요합니다.

```bash
yarn send:payment:denied
```

### 모든 광고 메일 발송
```bash
yarn send:advertisement:all
```

### 광고 승인 메일 발송
> `index.advertisement_approved.js` 에서 수신인 수정이 필요합니다.

```bash
yarn send:advertisement:approved
```
### 광고 승인 반려 메일 발송
> `index.advertisement_denied.js` 에서 수신인 수정이 필요합니다.

```bash
yarn send:advertisementdenied
```




