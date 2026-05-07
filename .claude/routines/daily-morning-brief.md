---
schedule: "0 8 * * 1-5"
description: 매일 평일 08:00 — 오늘의 아이젠하워 정리를 Gmail로 자기발송
---

# Routine: daily-morning-brief

## Trigger

- **Cron**: `0 8 * * 1-5` (월~금 08:00 KST)
- 시간 변경: cron 식만 수정
- 주말 포함하려면: `0 8 * * *`

## 실행 흐름

1. 페르소나 `.claude/agents/{{JARVIS_NAME}}.md` 로드
2. `/morning-brief` 운영 커맨드 실행 (출력 캡처)
3. Gmail 자기발송:
   - 수신자: 요한님 본인 메일 주소
   - 제목: `[{{JARVIS_NAME}}] 오늘 — 아이젠하워 매트릭스 정리`
   - 본문: `/morning-brief` 출력 결과
   - 발송: `mcp__claude_ai_Gmail__create_draft` 후 자동 발송 (routine 한정)

## 안전장치

- 메일 발송 실패 시 콘솔 에러 출력 + 재시도 1회
- 일정·메일 0건일 때: "오늘 외부 일정 없음. 좋은 하루 보내세요." 본문으로 발송
- 페르소나 미존재 시 routine 중단

## 권한

- Gmail 쓰기 권한 (S3-1에서 추가)
- Calendar 읽기 권한 (S2-2에서 추가)

## 학습자 커스터마이징

- **시간 변경**: `0 8 * * 1-5` → 원하는 시간
- **주말 포함**: `0 8 * * *`
- **휴가 모드 일시정지**: `/3-5-handoff` 참조
