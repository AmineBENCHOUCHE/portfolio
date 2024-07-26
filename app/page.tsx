import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


export default function Home() {
  return (
    <main className="relative text-blue-50 overflow-clip bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 mb-10">
      <div className="flex flex-col justify-center items-center max-w-7xl w-full">
        {/* TODO NavBar*/}
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experiences />
        <Approach />
        <Footer  />
      </div>
    </main>
  );
}
