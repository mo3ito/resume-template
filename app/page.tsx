import Navbar from "@/components/Navbar";
import AsideLeft from "@/components/AsideLeft";

export default function Home() {
  return (
    <main className="w-full mx-auto h-screen flex gap-x-12 p-14 ">
      <AsideLeft />
      <Navbar />
    </main>
  );
}
