---
description: weekly-review routine 클라우드 등록
---

`.claude/routines/weekly-review.md`를 클라우드 routine으로 등록합니다.

## 절차

1. routine 파일 frontmatter에서 `schedule:` 값 확인
   - 기본: `0 20 * * 0` (일요일 20:00 KST)
2. 학습자에게 시간 변경 의향 물어봄
   - 일요일 저녁이 가족 시간이면 → 월요일 아침 추천
3. 변경 요청 있으면 frontmatter 업데이트
4. 클라우드 routine 등록:
   ```
   schedule: [학습자 cron]
   trigger: /weekly-review
   send_to: Gmail self
   subject: [{{JARVIS_NAME}}] 다음 주 — 아이젠하워 매트릭스 정리
   ```
5. 등록 결과 출력

## 출력 형식

```
✓ weekly-review 등록 완료
  - Routine ID: [ID]
  - 다음 실행: YYYY-MM-DD HH:MM KST
  - cron: [표현식]
```

## 자주 나오는 시간 변경

| 의도 | cron |
|---|---|
| 일요일 20:00 (기본) | `0 20 * * 0` |
| 월요일 07:00 (다음 주 미리보기) | `0 7 * * 1` |
| 일요일 22:00 (늦은 검토) | `0 22 * * 0` |
