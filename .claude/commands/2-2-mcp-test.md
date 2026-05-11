---
description: Gmail · Calendar MCP 연결 통합 테스트
---

다음 MCP 호출을 차례로 시도해 결과를 표 형태로 출력합니다.

## 점검 항목

1. **Gmail 읽기**: `mcp__claude_ai_Gmail__search_threads`로 받은편지함 미답 메일 수 조회
2. **Gmail 쓰기** (S3 이후만): `mcp__claude_ai_Gmail__create_draft`로 권한 검증용 임시 draft 생성·즉시 삭제 (자비스 본체 운영은 임시보관함을 쓰지 않음 — routine 자기발송용 권한 확인)
3. **Calendar 읽기**: `mcp__claude_ai_Google_Calendar__list_events`로 오늘 일정 조회

## 출력 형식

```
MCP 연결 점검 결과:

✓ Gmail 연결 — 받은편지함 N통, 미답 N통 확인
✓ Calendar 연결 — 오늘 일정 N건, 다음 7일 일정 N건
[S3 이후] ✓ Gmail 쓰기 권한 활성

샘플 출력:
- 가장 최근 미답 메일: [발신자] [제목]
- 다음 회의: [HH:MM] [제목]
```

## 실패 시

각 항목별로 어떤 권한이 빠졌는지 명시하고 보충 안내:
- "Gmail 읽기 실패 — `mail.readonly` 권한 누락. Google 계정 보안 페이지에서 재인증."

## 다음 단계 안내

연결 검증이 통과하면 다음 안내를 출력합니다:

> "본인 데이터 연결 완료. 이제 첫 운영 커맨드를 만들고 본인 데이터에서 첫 결과를 받아볼 차례예요. `/2-3-build-morning-brief-step1`을 입력해주세요."

(쓰기 권한 검증의 경우 — Part 3-1에서 호출되었을 때는: "Gmail 쓰기 권한 활성. `/3-1-build-inbox-triage`로 넘어가시면 됩니다.")
