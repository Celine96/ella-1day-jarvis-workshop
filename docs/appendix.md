# 부록

워크숍 후 자가 학습 / 트러블슈팅 / 채널 확장 / 보안 점검 가이드.

---

## A. MCP 트러블슈팅

### 인증 만료
Google·Slack·Notion 토큰은 일정 기간 미사용 시 자동 만료됩니다. routine이 작동하지 않으면 가장 먼저 의심:
클로드 코드 터미널에서 다음 슬래시 커맨드를 입력하세요.

```
/2-2-mcp-test
```

테스트가 실패하면 해당 MCP를 재인증.

### 권한 거절
OAuth 동의 시 일부 권한을 누락한 경우:

| 증상 | 누락 가능성 |
|---|---|
| "메일을 보낼 권한이 없습니다" | Gmail 쓰기 권한 미추가 |
| "캘린더에 접근할 수 없습니다" | Calendar 읽기 권한 미추가 |
| "임시보관함 저장 실패" | Gmail 쓰기 권한 미추가 |

해결: 해당 MCP 재인증, 권한 범위 다시 확인.

### 한도 초과 (429)
Google API 일일 한도 초과 시 발생. 일반 사용에선 거의 없음. 다음 날까지 대기.

### routine이 실행됐는데 메일이 안 옴
1. Gmail 스팸 확인 — 본인이 본인에게 보내는 메일이라 스팸 분류될 수 있음 → "스팸 아님" 표시 + 화이트리스트
2. 발송 로그 확인:
   ```
   /3-4-test-routine-now
   ```
   콘솔 출력에서 어디서 멈췄는지 확인

---

## B. 권한 회수 가이드

### Gmail · Google Calendar
1. Google 계정 → [보안](https://myaccount.google.com/security)
2. **"Google에 액세스할 수 있는 서드파티 앱"** → 클로드 코드 → **액세스 권한 삭제**

### Slack
1. Slack 워크스페이스 → 설정 → **앱 관리**
2. 클로드 코드 검색 → **제거**

### Notion
1. Notion 설정 → **내 연결**
2. 클로드 코드 → **연결 해제**

회수 후 자비스는 즉시 해당 데이터에 접근할 수 없게 됩니다. routine은 자동으로 멈춥니다.

---

## C. 옵션 채널 레시피

워크숍에서 1개만 연결했지만, 같은 패턴으로 다른 채널을 추가할 수 있습니다.

### C-1. Slack 추가 연결 {#slack-recipe}

**용도**: DM·멘션을 사분면으로 분류, morning-brief에 통합

::: details 절차
1. Slack MCP 추가 → 본인 워크스페이스로 OAuth 동의
2. 권한 범위: `channels:read`, `groups:read`, `im:read`, `chat:write`
3. `.claude/commands/`에 `slack-triage.md` 파일 생성:
   ```markdown
   ---
   description: Slack DM·멘션을 아이젠하워 매트릭스로 분류
   ---
   - mcp__slack 으로 채널·DM 미답 메시지 조회 (24h)
   - 페르소나 §4 규칙 적용해 4사분면 분류
   - Q1 답장 초안은 임시보관함 저장 (또는 직접 답장)
   ```
4. 페르소나 §1에 "Slack DM·멘션은 morning-brief에 통합" 한 줄 추가
:::

### C-2. Notion 추가 연결 {#notion-recipe}

**용도**: OKR·할 일 페이지를 morning-brief에 통합

::: details 절차
1. Notion MCP 추가 → 본인 워크스페이스로 OAuth 동의
2. 권한 범위: 읽기 + (옵션) 페이지 생성
3. `.claude/commands/`에 `notion-okr-check.md`:
   ```markdown
   ---
   description: Notion OKR/할 일 페이지를 읽어 morning-brief에 통합
   ---
   - mcp__notion으로 OKR 페이지 검색
   - 미완료 항목을 사분면으로 분류
   ```
4. `/morning-brief`에서 자동 호출되도록 페르소나 §1 한 줄 추가
:::

### C-3. LinkedIn 추가 연결 {#linkedin-recipe}

**용도**: B2B 사업개발 메시지를 페르소나 톤으로 답변

::: details 절차
LinkedIn은 공식 MCP가 없어 **수동 + 초안** 패턴입니다.

1. LinkedIn 메시지 텍스트를 주기적으로 추출 (브라우저 확장 또는 수동)
2. `.claude/commands/linkedin-triage.md`:
   ```markdown
   ---
   description: LinkedIn 메시지 텍스트 입력 → 사분면 분류 + 답장 초안
   ---
   - 입력: LinkedIn 메시지 텍스트
   - 페르소나 톤으로 사분면 분류 + Q1·Q2 답장 초안
   - 초안은 콘솔 출력 (LinkedIn은 발송 자동화 미지원)
   ```
3. 답장은 LinkedIn에 직접 붙여넣기
:::

---

## D. 자비스 보안 체크리스트

자비스 보안 7원칙은 [1-2 챕터 §5](/part1/1-2-install#5-자비스의-보안-원칙-7가지)에서 다뤘습니다. 워크숍 종료 후 1주일 안에 다음 항목들을 한 번 점검하세요.

### D.1 운영 점검 (매주 1회 권장)

::: tip 보안 점검 항목 — 매주
- [ ] 페르소나 파일에 비밀번호·계좌·계약 금액 등 민감 정보 없음
- [ ] Gmail 권한 범위 = 읽기 + 보내기 (불필요한 "수정"·"삭제" 권한 없음)
- [ ] routine이 외부 수신자에게 자동 발송하지 않음 (자기발송만)
- [ ] 임시보관함 메일 자동 발송 안 됨 (수동 클릭만 발송)
- [ ] `.claude/agents/자비스.md`가 GitHub 공개 레포에 올라가지 않음
- [ ] OAuth 토큰·API 키가 `.env` 또는 GitHub Secrets에만 저장되어 있고 코드에 평문 노출 안 됨
- [ ] 자비스가 보낸 routine 메일이 본인 메일로만 도착 (외부 수신자 없음)
:::

### D.2 환경 점검 (월 1회 권장)

::: tip 환경 점검
- [ ] Google 계정 보안 페이지에서 클로드 코드 액세스가 의도한 권한 범위인지 확인
- [ ] 사용 안 하는 옵션 채널(Slack/Notion 등)이 연결된 채로 있는지 확인 — 안 쓰면 회수
- [ ] routine 실행 로그에 비정상 발송 시도 없는지 확인
- [ ] 페르소나 파일의 회사 컨텍스트가 최신인지 (퇴사·이직·M&A 등 반영)
:::

### D.3 즉시 대응 시나리오

| 상황 | 즉시 조치 |
|---|---|
| 자비스가 외부 수신자에게 메일 발송 시도 발견 | 1. Gmail 쓰기 권한 즉시 회수 (Google 보안 페이지) 2. routine 등록 해제 3. 페르소나 §7 점검 |
| 페르소나에 실수로 민감 정보 입력 | 1. 페르소나 파일에서 즉시 삭제 2. GitHub 레포 푸시했다면 `git filter-branch` 또는 새 레포로 마이그레이션 3. 노출 자격증명(비번/토큰) 즉시 변경 |
| 노트북 분실·도난 | Google 계정 보안 페이지에서 모든 클로드 코드 권한 일괄 회수 |
| 회사에서 외부 LLM 사용 금지 정책 발효 | routine 등록 해제 + Google 권한 회수 + 페르소나 파일 삭제 |

---

## E. 자주 묻는 질문

### Q. 자비스가 매일 보내는 메일을 끄고 싶어요
"daily routine 정지해주세요"라고 자비스에게 말씀하시면 됩니다.

### Q. 출장 중에 자비스가 평소처럼 보내면 어색해요
"이번 주 routine 정지" 또는 "다음 주 월요일까지 정지" 자비스에게 명령.

### Q. 자비스 톤을 바꾸고 싶어요
대화로: "오늘부터 더 친근한 톤으로 보고해주세요" → 페르소나 §3 자동 업데이트.

### Q. 자비스가 잘못 분류해요
"이 메일은 항상 Q3로 분류해주세요" → 페르소나 §4 자동 업데이트. 한 달 쓰시면 분류 정확도 매우 올라갑니다.

### Q. 다른 도구(Outlook, Apple Calendar)도 연결할 수 있나요?
공식 MCP가 있는 도구만 직결 가능. Outlook은 현재 베타. Apple은 미지원. 그 외엔 텍스트 입력 패턴(LinkedIn처럼).

---

## 호스트

- **Celine96** / yololife.sy@gmail.com
- 다른 워크숍: [v1 콘텐츠 제작](https://celine96.github.io/edwin-workshop/) · [v2 마케팅 대시보드](https://celine96.github.io/1day-workshop-V2/)
