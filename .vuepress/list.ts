const Arch_Linux = { text: "Arch Linux", icon: "page", link: "Arch_Linux.md" }
const MSYS2      = { text: "MSYS2",      icon: "page", link: "MSYS2.md"      }
const ArchWSL    = { text: "ArchWSL",    icon: "page", link: "ArchWSL.md"    }
const Docker     = { text: "Docker",     icon: "page", link: "Docker.md"     }
const TMOE       = { text: "TMOE",       icon: "page", link: "TMOE.md"       }
const MT_Plus    = { text: "MT管理器",   icon: "page", link: "MT_Plus.md"    }

export const list = [
  "",
  {
    text: "安装教程",
    icon: "config",
    link: "Install/",
    prefix: "Install/",
    children: [
      {
        text: "Windows",
        icon: "discover",
        link: "Windows.md",
        children: [MSYS2, ArchWSL, Docker]
      },
      {
        text: "Mac",
        icon: "discover",
        link: "Mac.md",
        children: [Docker]
      },
      {
        text: "Linux",
        icon: "discover",
        link: "Linux.md",
        children: [Docker, TMOE]
      },
      {
        text: "Android",
        icon: "discover",
        link: "Android.md",
        children: [MT_Plus, TMOE]
      },
      Arch_Linux
    ]
  },
  {
    text: "使用教程",
    icon: "creative",
    link: "Guide/",
    prefix: "Guide/",
    children: "structure"
  }
]