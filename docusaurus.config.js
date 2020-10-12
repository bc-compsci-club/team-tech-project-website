module.exports = {
  title: "Team Tech Project | Brooklyn College Computer Science Club",
  tagline: "Team Tech Project documentation.",
  url: "https://ttp.bccompsci.club",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "bc-compsci-club", // Usually your GitHub org/user name.
  projectName: "ttp.bccompsci.club", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Team Tech Project",
      logo: {
        alt: "CS Club Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs/",
          label: "Event Guide",
          position: "left",
        },
        {
          to: "gallery",
          label: "Gallery",
          activeBasePath: "gallery",
          position: "left",
        },
        {
          href: "https://bccompsci.club/events/5/team-tech-project-october",
          label: "October Meetup Registration",
          position: "right",
        },
        {
          href: "https://bccompsci.club",
          label: "CS Club Website",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Brooklyn College Computer Science Club. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
