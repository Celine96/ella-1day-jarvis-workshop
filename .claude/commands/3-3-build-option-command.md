---
description: 옵션 채널용 보조 커맨드 작성 (Slack / Notion / LinkedIn)
---

학습자가 선택한 채널에 맞는 보조 커맨드를 `.claude/commands/`에 생성합니다.

## 분기별 커맨드 생성

### Slack 선택자
파일: `.claude/commands/slack-triage.md`
```markdown
---
description: Slack DM·멘션을 아이젠하워 매트릭스로 분류
---
- mcp__slack으로 채널·DM 미답 메시지 조회 (24h)
- 페르소나 §4 규칙 적용해 4사분면 분류
- Q1 답장 초안은 임시보관함 저장 또는 직접 답장
- 출력 형식은 /inbox-triage와 동일 (사분면 헤더 + 불릿)
```

### Notion 선택자
파일: `.claude/commands/notion-okr-check.md`
```markdown
---
description: Notion OKR/할 일 페이지를 읽어 morning-brief에 통합
---
- mcp__notion으로 OKR 페이지 검색
- 미완료 항목 추출
- 페르소나 §4 규칙 적용해 사분면 분류
- /morning-brief에서 자동 호출 (페르소나 §1에 명시되어 있으면)
```

### LinkedIn 선택자
파일: `.claude/commands/linkedin-triage.md`
```markdown
---
description: LinkedIn 메시지 텍스트 입력 → 분류 + 답장 초안
---
- 입력: LinkedIn 메시지 텍스트 (학습자 붙여넣기)
- 페르소나 톤으로 사분면 분류 + Q1·Q2 답장 초안
- 초안은 콘솔 출력 (LinkedIn은 발송 자동화 미지원)
- 학습자가 LinkedIn에 직접 붙여넣기
```

## 페르소나 통합 (선택)

학습자가 morning-brief에 옵션 채널을 통합하고 싶어하면 페르소나 §1에 한 줄 추가:
```
연결된 옵션 채널: [Slack / Notion / LinkedIn], 매일 morning-brief에 통합
```

## 다음 단계 안내

보조 커맨드 생성 + 페르소나 통합 결정이 끝나면 다음 안내를 출력합니다 (부록 §C 자가 확장 컨텍스트):

> "옵션 채널 보조 커맨드 생성 완료. 페르소나 §1에 '옵션 채널을 /morning-brief에 통합' 한 줄을 추가하시면, 매일 아침 브리핑에 이 채널 Q3 항목까지 자비스가 정리해드립니다. 다음 호출부터 적용돼요."
