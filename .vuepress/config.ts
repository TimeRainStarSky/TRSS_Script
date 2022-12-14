import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/TRSS_Script/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "TRSS Script",
      description: "TRSS 脚本 使用文档"
    }
  },
  theme,
  shouldPrefetch: false
});