import TechStack from "./components/TechStack";
import LetsConnect from "./components/LetsConnect";
import Footer from "./components/Footer";
import Particles from "@/app/components/Particles";
import Certificates from "./components/Certificates";
import GoogleScrollEffect from "./components/GoogleScrollEffect";
import GitHubActivity from "./components/Githubcalendar";
// import LeetCodeCalendar from "./components/Leetcodecalendar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
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
        <h1 className="text-4xl font-bold text-center text-foreground">
          Welcome to My Portfolio
        </h1>
        <TechStack />
        <GitHubActivity/>
        {/* <LeetCodeCalendar/> */}
        <Certificates />
        <div className="py-10">
          <GoogleScrollEffect />
        </div>
        <LetsConnect />
        <Footer />
      </div>
    </div>
  );
}
