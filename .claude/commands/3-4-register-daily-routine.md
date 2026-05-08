---
description: daily-morning-brief routine 클라우드 등록
---

`.claude/routines/daily-morning-brief.md`를 클라우드 routine으로 등록합니다.

## 절차

1. routine 파일 frontmatter에서 `schedule:` 값 확인
   - 기본: `0 8 * * 1-5` (평일 08:00 KST)
2. 학습자에게 시간 변경 의향 물어봄
3. 변경 요청 있으면 frontmatter 업데이트:
   ```yaml
   schedule: "[학습자 지정 cron]"
   ```
4. 클라우드 routine 등록 (CronCreate 또는 동등 도구):
   ```
   schedule: [학습자 cron]
   trigger: /morning-brief
   send_to: Gmail self
   subject: [{{JARVIS_NAME}}] 오늘 — 아이젠하워 매트릭스 정리
   ```
5. 등록 결과 출력

## 출력 형식

```
✓ daily-morning-brief 등록 완료
  - Routine ID: [ID]
  - 다음 실행: YYYY-MM-DD HH:MM KST (내일/오늘)
  - cron: [표현식]
  - 발송 채널: Gmail 자기발송 → 요한님@gmail.com
```

## 자주 나오는 시간 변경

| 의도 | cron |
|---|---|
| 평일 07:30 | `30 7 * * 1-5` |
| 평일 09:00 | `0 9 * * 1-5` |
| 매일 08:00 | `0 8 * * *` |

## 다음 단계 안내

daily-morning-brief 등록이 끝나면 다음 안내를 출력합니다:

> "매일 routine 등록 완료. 이제 주간 routine도 등록할게요. `/3-4-register-weekly-routine`을 입력해주세요."
