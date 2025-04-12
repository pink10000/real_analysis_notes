import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "MATH 140 Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "140",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#dd1399",
          tertiary: "#5a6ded",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#f2b6de",
          tertiary: "#89bdf4",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ 
        enableInHtmlEmbed: false,
        parseTags: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ 
        // for some reason the macros only work when this is katex and not mathjax
        renderEngine: "katex", 
        customMacros: {
          // Sets
          "\\R": "\\mathbb{R}",
          "\\N": "\\mathbb{N}",
          "\\Z": "\\mathbb{Z}",
          "\\C": "\\mathbb{C}",
          "\\Q": "\\mathbb{Q}",
          "\\RQ": "\\R\\backslash\\Q", // Note: Assumes \R is defined above or standard
          "\\cA": "\\mathcal{A}",
        
          // // Statistics
          "\\var": "\\text{Var}",
          "\\Binom": "\\text{Binom}",
          "\\bias": "\\text{Bias}",
          "\\pois": "\\text{Pois}",
          "\\Exp": "\\text{Exp}",
          "\\P": "\\mathbb{P}", // From \renewcommand{\P}
          "\\Cov": "\\text{Cov}",
        
          // Linear Algebra
          "\\trace": "\\text{trace}",
        
          // Abstract Algebra
          "\\ker": "\\text{Ker }", // From \renewcommand{\ker} - includes space
          "\\kerphi": "\\text{Ker }\\varphi", // Expanded based on \ker above
          "\\id": "\\text{Id}",
          "\\GL": "\\text{GL}",
          "\\SL": "\\text{SL}",
        
          // Analysis
          "\\Re": "\\text{Re}", // From \renewcommand{\Re}
          "\\Im": "\\text{Im}", // From \renewcommand{\Im}
          "\\diam": "\\text{diam}",
          "\\vepsi": "\\varepsilon",
          "\\ovl": "\\overline{#1}",
          "\\unl": "\\underline{#1}",
        
          // Calculus
          "\\del": "\\partial",
        
          // Misc
          "\\notexists": "\\nexists",
        },
      
      }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({
        sort: (a, b) => {
            const orderA = a.frontmatter?.tags?.find(tag => tag.startsWith("order:"))?.split(":")[1] as number | undefined ?? Infinity;
            const orderB = b.frontmatter?.tags?.find(tag => tag.startsWith("order:"))?.split(":")[1] as number | undefined ?? Infinity;
            
            if (orderA !== orderB) {
              return orderA - orderB; // Ascending numerical sort
            }
 
            // Fallback sort: if order is the same or missing, sort by file path
            const titleA = a.filePath ?? ""; // Use filePath as fallback key
            const titleB = b.filePath ?? "";
            return titleA.localeCompare(titleB, undefined, { numeric: true, sensitivity: 'base' });
          }
      }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
