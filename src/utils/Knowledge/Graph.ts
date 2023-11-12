import { CategoryProps } from "@/components/Knowledge/Category";

export const categories: CategoryProps[] = [
  {
    title: "Webb",
    techs: [
      "Typescript",
      "NextJS",
      "shadcn/ui",
      "TailwindCSS",
      "NodeJS",
      "Express",
      "SocketIO",
    ],
    color: "#39A7FF",
  },
  {
    title: "Mobile",
    techs: ["React Native", "Expo", "EAS", "RevenueCat"],
    color: "#C70039",
  },
  {
    title: "Deployment",
    techs: ["Vercel", "AWS", "DigitalOcean", "Heroku"],
    color: "#AE445A",
  },
  {
    title: "Games",
    techs: ["Unity", "C#", "Unity AR", "UGS"],
    color: "#B15EFF",
  },
  {
    title: "Authentication",
    techs: ["JWT", "Clerk", "Auth0"],
    color: "#FFA33C",
  },
  {
    title: "Databases",
    techs: ["Supabase", "PostgreSQL", "Redis", "MongoDB"],
    color: "#F875AA",
  },
  {
    title: "Logs",
    techs: ["Axiom", "Winston"],
    color: "#A7D397",
  },
];

type Graph = {
  nodes: { id: string; group: number; color: string }[];
  links: { source: string; target: string; color: string }[];
};

export const getGraph = () => {
  const name = "Sebastian Ahlman";

  const categorieNodes = categories
    .map((i, idx) => [
      {
        id: `!${i.title}`,
        group: idx + 1,
        color: i.color,
      },
      ...i.techs.map((tech) => ({
        id: tech,
        group: idx + 1,
        color: i.color,
      })),
    ])
    .flat();

  const nodes: Graph["nodes"] = [
    {
      id: name,
      color: "#FFF",
      group: 0,
    },
    ...categorieNodes,
  ];

  const categorieLinks = categories
    .map((cat) => [
      cat.techs.map((tech) => ({
        color: cat.color,
        source: tech,
        target: `!${cat.title}`,
      })),
    ])
    .flat()
    .flat();

  const links: Graph["links"] = [
    ...categories.map((i) => ({
      color: i.color,
      source: name,
      target: `!${i.title}`,
    })),
    ...categorieLinks,
  ];

  return {
    nodes,
    links,
  };
};
