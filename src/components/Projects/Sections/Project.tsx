import Link from "next/link";
import Description, { DescriptionProps } from "./Description";
import Header, { HeaderProps } from "./Header";
import Image, { ImageProps } from "./Image";
import SizeImage, { SideImageProps } from "./SideImage";
import { StackToIcons } from "@/utils/Stack";
import LinkRenderer, { LinkProps } from "./Link";

type Project = {
  title: string;
  thumbnail: string;
  stack: string[];
  sections: (
    | HeaderProps
    | DescriptionProps
    | ImageProps
    | SideImageProps
    | LinkProps
  )[];
  github?: string;
  website?: string;
};

type Props = {
  project: Project;
};

function Project({ project }: Props) {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-5xl text-center font-bold text-green-500">
        {project.title}
      </h1>
      <img className="rounded-lg" src={project.thumbnail} />
      <div>
        {project.github && (
          <div className="flex flex-row gap-2">
            <p>Github: </p>
            <Link
              target="_blank"
              href={project.github}
              className="text-blue-500"
            >
              {project.github}
            </Link>
          </div>
        )}
        {project.website && (
          <div className="flex flex-row gap-2">
            <p>Website: </p>
            <Link
              target="_blank"
              href={project.website}
              className="text-blue-500"
            >
              {project.website}
            </Link>
          </div>
        )}
      </div>
      <div>
        <p className="font-bold">Stack:</p>
        <div className="flex flex-row flex-wrap pr-12">
          {StackToIcons(project.stack).map((i) => i)}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {project.sections.map((section, idx) => {
          if ("header" in section) {
            return <Project.Header key={idx} header={section.header} />;
          }
          if ("imageSide" in section) {
            return (
              <Project.ImageSize
                key={idx}
                description={section.description}
                imageSide={section.imageSide}
                url={section.url}
              />
            );
          }
          if ("description" in section) {
            return (
              <Project.Description
                key={idx}
                description={section.description}
              />
            );
          }
          if ("url" in section) {
            return <Project.Image key={idx} url={section.url} />;
          }
          if ("link" in section) {
            return (
              <Project.Link key={idx} link={section.link} text={section.text} />
            );
          }
        })}
      </div>
    </div>
  );
}

Project.Header = Header;
Project.Description = Description;
Project.Image = Image;
Project.ImageSize = SizeImage;
Project.Link = LinkRenderer;

export default Project;
