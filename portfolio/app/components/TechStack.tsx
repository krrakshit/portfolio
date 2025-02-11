import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiTypescript, 
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiGit,
  SiWebpack,
  SiBabel,
  SiJest,
  SiDocker,
  SiAmazonaws,
  SiSass,
  SiPostgresql
} from 'react-icons/si';

const techIcons = [
  { name: 'React', Icon: FaReact },
  { name: 'Node.js', Icon: FaNodeJs },
  { name: 'Express', Icon: SiExpress },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'HTML5', Icon: SiHtml5 },
  { name: 'CSS3', Icon: SiCss3 },
  { name: 'Redux', Icon: SiRedux },
  { name: 'Git', Icon: SiGit },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Webpack', Icon: SiWebpack },
  { name: 'Babel', Icon: SiBabel },
  { name: 'Jest', Icon: SiJest },
  { name: 'Docker', Icon: SiDocker },
  { name: 'AWS', Icon: SiAmazonaws },
  { name: 'Sass', Icon: SiSass },
  { name: 'PostgreSQL', Icon: SiPostgresql }
];

const TechStack: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">My Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {techIcons.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <tech.Icon size={50} />
            <span className="mt-2">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;