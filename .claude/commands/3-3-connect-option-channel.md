---
description: 본인 옵션 채널 1개 연결 — Slack / Notion / LinkedIn 분기
---

학습자의 1-3 인터뷰 답변(§3 옵션 채널 후보)을 보고 옵션 채널을 추천하고 연결을 안내합니다.

## 추천 로직

| 학습자 특성 | 추천 채널 |
|---|---|
| 팀 운영·실무 중심 (Slack DM 많음) | Slack |
| 문서·OKR·메모 중심 | Notion |
| B2B 사업개발·네트워킹 중심 | LinkedIn |
| 모두 해당 | TOP 1만 선택 (가장 자주 쓰는 것) |

## 분기별 연결 가이드

### Slack
1. Slack MCP 추가 → 본인 워크스페이스 OAuth
2. 권한: `channels:read`, `groups:read`, `im:read`, `chat:write`
3. 검증: DM 미답 1건 가져와서 출력

### Notion
1. Notion MCP 추가 → 본인 워크스페이스 OAuth
2. 권한: 읽기 + (옵션) 페이지 생성
3. 검증: 본인 OKR 페이지 1건 가져와서 출력

### LinkedIn
공식 MCP 부재 → 수동 + 초안 패턴 안내:
- LinkedIn에서 메시지 텍스트 추출 방법 안내
- 자비스에게 텍스트 입력 → 분류 + 답장 초안 패턴

## 안내 마무리

"연결 완료되면 `/3-3-build-option-command`로 보조 커맨드를 만듭시다."
