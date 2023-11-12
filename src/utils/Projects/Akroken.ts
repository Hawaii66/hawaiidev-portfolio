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
      header: "General",
    },
    {
      imageSide: "left",
      url: "/akroken/virtual.jpg",
      description:
        "One of the projects I worked on while on internship at LearningWell a local software company. The project was ordered by the museum and was meant to use modern technology to show how a part of town has developed through the centuries. My task was to take a 3rd party 3D artists 3D models and integrate them in Unity and also write all the code for the AR experience. Yes! the app works in AR and is meant to be view at Åkroken where you walk around and the virtual world in your phone follows you to let you explore the place.",
    },
    {
      header: "Articles",
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
      imageSide: "left",
      url: "/akroken/unity.png",
      description:
        "Unity is a 3D motor that can develop games and apps for all platforms (web, phones, computers, xbox). The motor also integrates with AR which allowed me to turn the virtual world when the phone rotates and moves around.",
    },
    {
      header: "Åkroken",
    },
    {
      imageSide: "right",
      description:
        "Åkroken is a area in Nyköping know for being one of Nyköpings oldest places. While building the houses in the background a archeological excavation was done which uncovered multiple houses from year 1000 and forward. The app is meant to show the historical timeline. By scaning the red signs with your camera (using image recognition) the player is shown a virtual 3D world of that century",
      url: "/akroken/showcase.jpg",
    },
    {
      header: "Articles",
    },
    {
      imageSide: "left",
      url: "/akroken/work.jpg",
      description:
        "While working on the app I was interviewed 2 times by LearningWell which was then published in 2 blog posts, one for each summer I worked there. The local news papper also picked up my story 2 times and wrote too articles, one each from LearningWell and SN is linked above.",
    },
    {
      header: "Images",
    },
    {
      url: "/akroken/akroken.jpg",
    },
    {
      url: "/akroken/info.webp",
    },
    {
      url: "/akroken/intervju.webp",
    },
  ],
};
