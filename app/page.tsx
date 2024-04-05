import Navbar from "@/components/Navbar";
import AsideLeft from "@/components/AsideLeft";
import Topics from "@/components/Topics";

export default function Home() {
  return (
    <main className="w-full mx-auto flex  p-14 relative ">
      <AsideLeft />
      <Navbar />
      <Topics/>
    </main>
  );
}
