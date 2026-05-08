import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: "ELLA'S 1DAY WORKSHOP",
  description: "나만의 JARVIS — 일정관리 비서를 4시간 만에 만드는 워크숍",
  base: '/ella-1day-jarvis-workshop/',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: 'Part 1', link: '/part1/1-1-intro' },
      { text: 'Part 2', link: '/part2/2-1-persona-complete' },
      { text: 'Part 3', link: '/part3/3-1-write-permission' },
      { text: '부록', link: '/appendix' },
    ],
    sidebar: [
      {
        text: '시작',
        items: [
          { text: '워크북 소개', link: '/' },
          { text: '0. 프롤로그 : 자비스, 들어보셨죠?', link: '/prologue' },
        ]
      },
      {
        text: 'Part 1 — 자비스 정체성 (55분)',
        items: [
          { text: '1-1 자비스란 무엇인가', link: '/part1/1-1-intro' },
          { text: '1-2 MCP — 자비스가 외부 도구에 연결되는 방법', link: '/part1/1-2-install' },
          { text: '1-3 자비스 만들기 — 작명과 인터뷰', link: '/part1/1-3-naming' },
          { text: '1-4 페르소나 초안 자동 작성', link: '/part1/1-4-persona-draft' },
        ]
      },
      {
        text: 'Part 2 — 자비스 깨우기 (90분)',
        items: [
          { text: '2-1 페르소나 점검·보강', link: '/part2/2-1-persona-complete' },
          { text: '2-2 MCP 연결 — Gmail · Calendar 읽기 권한', link: '/part2/2-2-mcp-setup' },
          { text: '2-3 자비스의 첫 결과 — /morning-brief', link: '/part2/2-3-morning-brief' },
          { text: '2-4 /meeting-prep + /weekly-review', link: '/part2/2-4-prep-and-review' },
        ]
      },
      {
        text: 'Part 3 — 자비스 일상화 (110분)',
        items: [
          { text: '3-1 쓰기 권한 + /inbox-triage', link: '/part3/3-1-write-permission' },
          { text: '3-2 회의록 + /meeting-recap', link: '/part3/3-2-meeting-recap' },
          { text: '3-3 옵션 채널 1개', link: '/part3/3-3-option-channel' },
          { text: '3-4 자동 routine 등록', link: '/part3/3-4-automation' },
          { text: '3-5 권한 회수 + 다음 단계', link: '/part3/3-5-handoff' },
        ]
      },
      {
        text: '부록',
        items: [
          { text: 'MCP 트러블슈팅 · 권한 회수 · 옵션 채널 레시피', link: '/appendix' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Celine96/ella-1day-jarvis-workshop' }
    ],
    outline: {
      level: [2, 3],
      label: '목차'
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '이전',
      next: '다음'
    }
  }
})
