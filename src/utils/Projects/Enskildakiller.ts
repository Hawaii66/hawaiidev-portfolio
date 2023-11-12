import Project from "@/components/Projects/Sections/Project";

export const EnskildaKiller: Project = {
  stack: ["NextJS", "Typescript", "Supabase", "TailwindCSS", "Clerk"],
  thumbnail: "/enskildakiller/main.png",
  title: "Enskilda Killer",
  github: "https://github.com/Hawaii66/enskilda-killer",
  website: "https://enskildakiller.se",
  sections: [
    {
      header: "General",
    },
    {
      description:
        "My school has a game each autumn called Killer everyone at school gets assigned another person on school as their target which they have to kill. This websites shows each persons target, who and when they killed each person and which circle they currently are assigned to. You can also read up on the rules and concepts of the game. The statistics are updated automaticly once a kill is confirmed by both murderer and target",
    },
    {
      header: "Admin",
    },
    {
      imageSide: "left",
      description:
        "The admin page can only be viewed by a select few people. From here they can se and edit each user and also manually murder people, move players, kill players. The rules and concepts can also be edited from here. If two users disagree they can issue a litigation which will appear here for admins to resolve, and a notice on teams is sent out. Via the settings they can manage the game state and general settings.",
      url: "/enskildakiller/admin.png",
    },
    {
      header: "Profil",
    },
    {
      imageSide: "right",
      description:
        "This is the page all users visist. Here they can see their personal information (name,class,...) but most importantly who they are suppose to murder. They also have the possibility to see their previous kills and issue litigations. By pressing the buttons I died or I have murdered and their target/murderer doing the same the kill is automaticly detected and processed and their new target appears.",
      url: "/enskildakiller/profile.png",
    },
    {
      header: "Statistik",
    },
    {
      imageSide: "left",
      description:
        "Each graph is generated by ONE SQL statment which taught me a lot about joins, order by, and group by. The statistics is the seccond most viewed page after the profile. Here you can follow the game live via a bunch of graphs. This means the page loads fast but still contains a huge amount of information. The statistics is live updated which means once the kill is processed the statistics updates automatically and your kill feels even better",
      url: "/enskildakiller/stats.png",
    },
  ],
};
