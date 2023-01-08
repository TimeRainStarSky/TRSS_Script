const Arch_Linux = { text: "Arch Linux", icon: "page", link: "Arch_Linux.md" }
const MSYS2      = { text: "MSYS2",      icon: "page", link: "MSYS2.md"      }
const ArchWSL    = { text: "ArchWSL",    icon: "page", link: "ArchWSL.md"    }
const Docker     = { text: "Docker",     icon: "page", link: "Docker.md"     }
const TMOE       = { text: "TMOE",       icon: "page", link: "TMOE.md"       }
const MTArch     = { text: "MT管理器",   icon: "page", link: "MTArch.md"     }

export const list = [
  "",
  {
    text: "安装教程",
    icon: "config",
    link: "Install/",
    prefix: "Install/",
    collapsible: true,
    children: [
      {
        text: "Windows",
        icon: "windows",
        link: "Windows.md",
        collapsible: true,
        children: [MSYS2, ArchWSL, Docker]
      },
      {
        text: "Mac",
        icon: "discover",
        link: "Mac.md",
        collapsible: true,
        children: [Docker]
      },
      {
        text: "Linux",
        icon: "linux",
        link: "Linux.md",
        collapsible: true,
        children: [Docker, TMOE]
      },
      {
        text: "Android",
        icon: "android",
        link: "Android.md",
        collapsible: true,
        children: [MTArch, TMOE]
      },
      Arch_Linux
    ]
  },
  {
    text: "使用教程",
    icon: "guide",
    link: "Guide/",
    prefix: "Guide/",
    collapsible: true,
    children: "structure"
  }
]