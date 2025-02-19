import IconCloud from "./Iconcloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "nginx",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "framer",
  "figma",
  "linux",
  "render",
  "postman",
  "netlify",
  "ubuntu",
  "shadcn"



];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}