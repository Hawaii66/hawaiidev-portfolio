const WithIcon = (
  tech: string,
  icon: string,
  extension: string = "original"
) => {
  return (
    <span className="pr-2">
      <i className={`devicon-${icon}-${extension} mr-1`} />
      {tech}
    </span>
  );
};

const TechWithIcon = (tech: string) => {
  switch (tech) {
    case "NextJS":
      return WithIcon(tech, "nextjs");
    case "TailwindCSS":
      return WithIcon(tech, "tailwindcss", "plain");
    case "Unity":
      return WithIcon(tech, "unity");
    case "Rust":
      return WithIcon(tech, "rust", "plain");
    case "Arduino":
      return WithIcon(tech, "arduino", "plain");
    case "RaspberryPI":
      return WithIcon(tech, "raspberrypi", "line");
    case "Supabase":
      return WithIcon(tech, "postgresql", "plain");
    default:
      return <span className="pr-2">{tech}</span>;
  }
};

export const StackToIcons = (stack: string[]) => {
  return stack.map((val) => TechWithIcon(val));
};
