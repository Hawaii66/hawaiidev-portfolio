import Project from "@/components/Projects/Sections/Project";

export const Akroken: Project = {
  title: "Åkroken",
  website: "https://apps.apple.com/se/app/%C3%A5kroken/id6450889812",
  stack: ["Unity", "Artist"],
  thumbnail: "/akroken/main.webp",
  sections: [
    {
      header: "Largest problems solved",
    },
    {
      description:
        "The paramount challenge encountered in this project was the alignment of the virtual world with the real world, a crucial task given the necessity for precise correspondence between the virtual river and its real-world counterpart. Complicating matters was the inherent uncertainty associated with the initial rotation of the mobile device relative to the physical environment, a precision requirement that presented a formidable obstacle. To surmount this challenge, I devised a novel methodology involving the measurement of angles between the phone and reference signs at known locations. These signs, whose orientations were accurately established, served as anchor points. This, coupled with additional information such as sign dimensions and perspective considerations, enabled the derivation of a significantly more accurate rotation estimate. Importantly, this process was not a one-time calculation but was seamlessly integrated to function in real-time across every frame.",
    },
    {
      description:
        "The second most formidable challenge pertained to performance optimization, particularly in rendering expansive 3D scenes on older mobile devices while maintaining proper lighting effects. This posed a dual challenge, requiring collaboration between the developer, myself, and the diagnostic analyzer, as well as the 3D artist responsible for optimizing each model's vertices and meticulously baking lighting effects. Overcoming these challenges demanded a comprehensive and collaborative effort to ensure smooth execution and optimal performance across diverse device specifications.",
    },
    {
      description:
        "The third challenge involved reconciling the flat nature of the real-world walking surface with the three-dimensional aspects of the virtual environment, especially regarding height and terrain. To address this, I implemented a solution using reference signs to determine the real-world height of the phone. This information allowed dynamic adjustments to the virtual camera's Y coordinate, ensuring it maintained a consistent relative distance to the ground and preventing any instances of the camera intersecting with the virtual ground during user movement.",
    },
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
        "While working on the app I was interviewed 2 times by LearningWell which was then published in 2 blog posts, one for each summer I worked there. The local news papper also picked up my story 2 times and wrote two articles, one each from LearningWell and SN is linked above.",
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
