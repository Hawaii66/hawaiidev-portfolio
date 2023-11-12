import Project from "@/components/Projects/Sections/Project";

export const Portfolio: Project = {
  title: "Portfolio",
  website: "https://hawaiidev-portfolio.vercel.app/",
  github: "https://github.com/Hawaii66/hawaiidev-portfolio",
  thumbnail: "/portfolio/main.png",
  stack: ["NextJS", "TailwindCSS"],
  sections: [
    {
      header: "General",
    },
    {
      description:
        "My portfolio developed and written in 2 days. This portfolio shows some of the things I have workend on and some general info about me.",
    },
    {
      header: "About",
    },
    {
      imageSide: "right",
      url: "/portfolio/about.png",
      description:
        "Inspired by Apples summaries I made a collage of some general information about me. Hover over each cell and click it for more information. Some cells are more fun and some more informational. Ironic how you sacrifice sleep to chase your dreams - Anis Don Demina",
    },
    {
      header: "Projects",
    },
    {
      imageSide: "left",
      url: "/portfolio/projects.png",
      description:
        "A grid of some of my projects. Hover over a project to see a small hover offect, some projects are clickable and will bring you to one of these sites for more background and technical information. Each project has a Github link and a small description. The stacks shown shows a select few technologies used in developing that particular thing, the icons are dynamicaly inserted.",
    },
    {
      header: "Knowledge",
    },
    {
      imageSide: "right",
      url: "/portfolio/knowledge.png",
      description:
        "This is my knowledge graph, a select few technologies and frameworks I have worked with in the near past. Click on a bubble in the graph to see it being highligted in the list to the right. Each area has multiple other technologies and things I also know such as HTML, CSS, Javascript. Both the graph and list is generated from a list of main categories and technologies that dynamicaly generates the graphs edges and nodes.",
    },
  ],
};
