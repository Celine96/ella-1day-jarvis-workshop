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
        text: 'Part 1 — 자비스 정체성',
        items: [
          { text: '1-1. 자비스란 무엇인가', link: '/part1/1-1-intro' },
          { text: '1-2. 자비스의 작업실과 안전 약속', link: '/part1/1-2-install' },
          { text: '1-3. 자비스 작명 + 첫 만남', link: '/part1/1-3-naming' },
          { text: '1-4. 자비스의 매뉴얼 만들기', link: '/part1/1-4-persona-draft' },
        ]
      },
      {
        text: 'Part 2 — 자비스 깨우기',
        items: [
          { text: '2-1. 자비스의 매뉴얼 마무리', link: '/part2/2-1-persona-complete' },
          { text: '2-2. 자비스에 내 데이터 열어주기', link: '/part2/2-2-mcp-setup' },
          { text: '2-3. 자비스의 첫 출근', link: '/part2/2-3-morning-brief' },
          { text: '2-4. 자비스가 회의·한 주를 정리', link: '/part2/2-4-prep-and-review' },
        ]
      },
      {
        text: 'Part 3 — 자비스에 위임',
        items: [
          { text: '3-1. 메일·회의 자비스에 위임', link: '/part3/3-1-write-permission' },
          { text: '3-2. 매일 자동 위임', link: '/part3/3-4-automation' },
          { text: '3-3. 안심하고 위임', link: '/part3/3-5-handoff' },
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
