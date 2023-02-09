import { hopeTheme, navbar, sidebar } from "vuepress-theme-hope";
import { list } from "./list.js";

export default hopeTheme({
  hostname: "https://TRSS.me",

  author: {
    name: "时雨🌌星空",
    url: "https://github.com/TimeRainStarSky"
  },

  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "TimeRainStarSky/TRSS_Script",
  docsDir: "docs",
  docsBranch: "",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],
  fullscreen: true,

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f"
  },

  locales: {
    "/": {
      navbar: navbar([
        "/",
        { text: "🌌 TRSS", link: "https://TRSS.me" },
        { text: "▲ Vercel", link: "https://TRSS-Script.Vercel.app" },
        { text: "GitHub", icon: "github", link: "https://TimeRainStarSky.GitHub.io/TRSS_Script" },
        { text: "Gitee", icon: "gitee", link: "https://Gitee.com/TimeRainStarSky/TRSS_Script" }
      ]),
      sidebar: sidebar({"/": list}),
      footer: "TRSS 脚本 使用文档",
      displayFooter: true,
      metaLocales: {
        editLink: "编辑此页"
      }
    }
  },

  plugins: {
    comment: {
      provider: "Waline",
      serverURL: "https://Waline.TRSS.me",
      login: "force",
      reaction: true,
      pageview: true
    },

    copyCode: {
      showInMobile: true
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png"
          }
        ],
        shortcuts: [
          {
            name: "安装教程",
            short_name: "安装教程",
            url: "Install/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png"
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png"
              }
            ]
          },
          {
            name: "使用教程",
            short_name: "使用教程",
            url: "Guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png"
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png"
              }
            ]
          }
        ]
      }
    }
  }
})