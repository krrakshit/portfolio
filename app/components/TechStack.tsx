import React from 'react';
import { 
  FaReact, 
  FaNodeJs,
  FaAws,
  FaGithub,
  FaLinux,
  FaJava
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
  SiDocker,
  SiSass,
  SiPostgresql,
  SiKubernetes,
  SiGraphql,
  SiRedis,
  SiNginx,
  SiApachekafka,
  SiThreedotjs,
  SiPrisma,
  SiApollographql,
  SiBootstrap,
  SiShadcnui,
  SiDiscord,
  SiMaterialdesign,
  SiOpenapiinitiative,
  SiPrometheus,
  SiSlack,
  SiGrafana
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

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
  { name: 'Docker', Icon: SiDocker },
  { name: 'Sass', Icon: SiSass },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'AWS', Icon: FaAws },
  { name: 'GitHub', Icon: FaGithub },
  { name: 'Linux', Icon: FaLinux },
  { name: 'Java', Icon: FaJava },
  { name: 'Kubernetes', Icon: SiKubernetes },
  { name: 'GraphQL', Icon: SiGraphql },
  { name: 'Redis', Icon: SiRedis },
  { name: 'Nginx', Icon: SiNginx },
  { name: 'Apache Kafka', Icon: SiApachekafka },
  { name: 'Three.js', Icon: SiThreedotjs },
  { name: 'Prisma', Icon: SiPrisma },
  { name: 'Apollo GraphQL', Icon: SiApollographql },
  { name: 'Bootstrap', Icon: SiBootstrap },
  { name: 'Material UI', Icon: SiMaterialdesign },
  { name: 'shadcn/ui', Icon: SiShadcnui },
  { name: 'Discord', Icon: SiDiscord },
  { name: 'REST API', Icon: TbApi },
  { name: 'OpenAPI', Icon: SiOpenapiinitiative },
  { name: 'Prometheus', Icon: SiPrometheus },
  { name: 'Slack', Icon: SiSlack },
  { name: 'Grafana', Icon: SiGrafana }
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