import Project from "@/components/Projects/Sections/Project";

export const Reelly: Project = {
  title: "Reelly",
  website: "https://reelly.app",
  stack: [
    "React Native",
    "Expo",
    "Posthog",
    "Generative AI",
    "NextJS",
    "Supabase",
    "Python",
    "Wikipedia",
  ],
  thumbnail: "/reelly/main.png",
  sections: [
    {
      description:
        "Reelly has quickly gained traction, reaching 400 users with 30 daily active users (DAU), a number that continues to grow daily. Our organic growth is driven by engaging content and strategic Reddit sharing, where users discover and share our bite-sized learning experience.",
    },
    {
      header: "Largest problems solved",
    },
    {
      description:
        "Developing Reelly required overcoming several major challenges, with the foremost being the creation of a seamless, personalized content feed. To ensure engaging and relevant learning experiences, I built a custom AI-powered recommendation engine that adapts to user interactions, continuously refining the article selection process for each individual. This system, inspired by TikTok's recommendation model, leverages machine learning to curate bite-sized learning experiences that keep users engaged.",
    },
    {
      description:
        "Another significant challenge was designing a highly optimized mobile application capable of delivering smooth animations and quick transitions between content. Using React Native with Expo, I implemented efficient rendering techniques and caching mechanisms to ensure minimal load times and a seamless user experience across a wide range of mobile devices. This was crucial in maintaining engagement and usability, especially for users consuming content on the go.",
    },
    {
      description:
        "Ensuring accurate and meaningful AI-generated content was another major hurdle. By integrating GPT-4 alongside Wikipedia and other trusted sources, I developed a content pipeline that extracts, summarizes, and refines educational content while maintaining factual accuracy. This required careful tuning of the AI models to strike a balance between readability and depth, ensuring that every swipe delivers valuable knowledge without overwhelming the user.",
    },
    {
      header: "General",
    },
    {
      imageSide: "left",
      url: "/reelly/1.png",
      description:
        "Reelly is an AI-driven learning app designed to make knowledge consumption effortless and engaging. As the lead developer and technical co-founder, I built the entire mobile application from scratch, focusing on delivering a highly interactive and user-friendly experience. The app curates short-form articles tailored to user interests and integrates seamlessly with quizzes and deep-dive options to enhance learning.",
    },
    {
      header: "Images",
    },
    {
      url: "/reelly/2.png",
    },
    {
      url: "/reelly/2.png",
    },
  ],
};
