import Project from "@/components/Projects/Sections/Project";

const lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nobis corporis ut in, praesentium iusto laborum dolor cum? Quia, officia nam. Quos asperiores voluptatum maiores molestias cum suscipit ex exercitationem beatae iste molestiae doloremque omnis animi, temporibus ratione distinctio saepe debitis reiciendis nesciunt sunt ipsam sapiente! Reprehenderit sit harum cumque.";

export const Akroken: Project = {
  title: "Åkroken",
  website: "https://apps.apple.com/se/app/%C3%A5kroken/id6450889812",
  stack: ["Unity", "Artist"],
  thumbnail: "/akroken/main.webp",
  sections: [
    {
      header: "Allmänt",
    },
    {
      description: lorem,
    },
    {
      header: "Artiklar",
    },
    {
      link: "https://learningwell.se/sebastian",
      text: "LearningWell",
    },
    {
      link: "https://sn.se/bli-prenumerant/artikel/rk1vxnej/sn-bd-0kr-dp_week",
      text: "SN",
    },
    {
      header: "Unity",
    },
    {
      description: lorem,
    },
  ],
};
