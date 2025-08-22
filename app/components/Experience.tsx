"use client";
import React from "react";
import { Inter} from "next/font/google"
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./tracing-beam";

const calsans = Inter({
    subsets: ['latin'],
  variable: '--font-calsans',
  display: 'swap',
})

export function TracingBeamDemo() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
      </div>
      
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {experienceContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className={twMerge(calsans.className, "text-xl mb-4")}>
                {item.title}
              </p>

              <div className="text-sm prose prose-sm dark:prose-invert">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const experienceContent = [
  {
    title: "Backend Intern - IMESH",
    description: (
      <>
        <p className="text-white leading-relaxed mb-6">
          Currently working as a Backend Intern at IMESH since <span className="font-semibold text-blue-400">July 1st, 2025</span>, focusing on 
          high-performance backend development using cutting-edge technologies.
        </p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-2">• Backend Migration</h4>
            <p className="text-white ml-4">
              Successfully recreated and migrated existing backend systems from <span className="font-medium">Golang and NestJS TypeScript</span> to <span className="font-medium">Quarkus Java</span>, improving performance and maintainability.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">• Real-time Notification System</h4>
            <p className="text-white ml-4">
              Developed a high-performance notification system prototype using <span className="font-medium">WebSockets and NATS</span> that can efficiently handle <span className="font-bold text-white">1000+ concurrent connections</span> using only <span className="font-bold text-white">20MB of memory</span>.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">• Scalable Architecture</h4>
            <p className="text-white ml-4">
              Implemented microservices architecture with <span className="font-medium">Kubernetes orchestration</span>, <span className="font-medium">Redis caching</span>, and <span className="font-medium">Keycloak authentication</span> for enterprise-grade applications.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">• GraphQL Integration</h4>
            <p className="text-white ml-4">
              Designed and implemented <span className="font-medium">GraphQL APIs</span> for efficient data fetching and real-time subscriptions.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-bold text-white mb-3">Technologies Used:</h4>
          <p className="text-white">
            <span className="font-medium">Quarkus Java</span>, <span className="font-medium">NATS</span>, <span className="font-medium">Kubernetes</span>, <span className="font-medium">WebSockets</span>, <span className="font-medium">Keycloak</span>, <span className="font-medium">Redis</span>, <span className="font-medium">GraphQL</span>
          </p>
        </div>
      </>
    ),
    badge: "Current",
  },
];
