import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Going Love First",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "goinglovefirst.com",
    ignorePatterns: ["private", "templates", ".obsidian", "drafts"],
    defaultDateType: "published",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Source Sans Pro",
        body: "Inter",
        code: "Source Code Pro",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e2e8f0",
          gray: "#94a3b8",
          darkgray: "#475569",
          dark: "#1e293b",
          secondary: "#fa1982",
          tertiary: "#bf0a5e",
          highlight: "rgba(25, 130, 250, 0.15)",
          textHighlight: "#fa198289",
        },
        darkMode: {
          light: "#0f172a",
          lightgray: "#344254",
          gray: "#65758a",
          darkgray: "#b6c2d1",
          dark: "#dce2ea",
          secondary: "#ff73b2",
          tertiary: "#fa1982",
          highlight: "rgba(25, 130, 250, 0.15)",
          textHighlight: "#fa198289",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
