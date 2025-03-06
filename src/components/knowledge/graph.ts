type Island = {
  name: string;
  branches: Branch[];
  color: string;
};
type Branch =
  | string
  | {
      name: string;
      branches: Branch[];
    };

export function getGraph() {
  const islands: Island[] = [
    {
      name: "Web",
      color: "red",
      branches: [
        {
          name: "React",
          branches: [
            "terst",
            "123123",
            { branches: ["123", "faf"], name: "asdas" },
          ],
        },
        "Astro",
        "Solid",
      ],
    },
    {
      name: "Mobile",
      color: "blue",
      branches: ["IOS", "React Native", "Expo"],
    },
  ];

  const center = {
    id: "Sebastian",
    color: "#888",
  };

  const nodes = [center];
  const links: { source: string; target: string; color: string }[] = [];

  islands.forEach((island) => {
    nodes.push({
      id: island.name,
      color: island.color,
    });

    links.push({
      source: center.id,
      target: island.name,
      color: island.color,
    });

    const addBranches = (branches: Branch[], parent: string) => {
      branches.forEach((branch) => {
        if (typeof branch === "string") {
          nodes.push({
            id: branch,
            color: island.color,
          });

          links.push({
            source: parent,
            target: branch,
            color: island.color,
          });
        } else {
          nodes.push({
            id: branch.name,
            color: island.color,
          });

          links.push({
            source: parent,
            target: branch.name,
            color: island.color,
          });

          addBranches(branch.branches, branch.name);
        }
      });
    };

    addBranches(island.branches, island.name);
  });

  return {
    nodes,
    links,
  };
}
