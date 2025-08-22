import { Hero } from "@/components/Hero";
import { TracingBeamDemo } from "@/components/Experience";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import Certificates from "@/components/Certificates";
import GoogleScrollEffect from "@/components/GoogleScrollEffect";
import GitHubActivity from "@/components/Githubcalendar";

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={['#ededed', '#ededed']}
          particleCount={700}
          particleSpread={10}
          speed={1}
          particleBaseSize={160}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 space-y-12"> 
        <Hero/>
        <GitHubActivity/>
          <TracingBeamDemo />
        <Certificates />
        <div className="py-10">
          <GoogleScrollEffect />
        </div>
        <Footer />
      </div>
    </div>
  );
}
