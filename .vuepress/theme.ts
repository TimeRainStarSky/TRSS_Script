import { hopeTheme, navbar, sidebar } from "vuepress-theme-hope";
import { list } from "./list.js";

export default hopeTheme({
  hostname: "https://TRSS.me",

  author: {
    name: "时雨🌌星空",
    url: "https://github.com/TimeRainStarSky"
  },

  iconAssets: "iconfont",
  favicon: "苏半夏Q.png",
  logo: "苏半夏Q.png",
  logoDark: "苏半夏QD.png",
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
      favicon: "/苏半夏Q.png",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/苏半夏Q.png",
        statusBarColor: "black"
      },
      msTile: {
        image: "/苏半夏Q.png",
        color: "#ffffff"
      },
      manifest: {
        icons: [
          {
            src: "/苏半夏Q.png",
            sizes: "162x162",
            purpose: "maskable",
            type: "image/png"
          },
          {
            src: "/苏半夏QD.png",
            sizes: "162x162",
            purpose: "monochrome",
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
                src: "/苏半夏Q.png",
                sizes: "162x162",
                purpose: "maskable",
                type: "image/png"
              },
              {
                src: "/苏半夏QD.png",
                sizes: "162x162",
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
                src: "/苏半夏Q.png",
                sizes: "162x162",
                purpose: "maskable",
                type: "image/png"
              },
              {
                src: "/苏半夏QD.png",
                sizes: "162x162",
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