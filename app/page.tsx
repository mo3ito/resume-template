"use client";

import Navbar from "@/components/Navbar";
import AsideLeft from "@/components/AsideLeft";
import Topics from "@/components/Topics";
import NavbarMobile from "@/components/NavbarMobile";
import useAllItemsRef from "@/hooks/useAllItemsRef";

export default function Home() {
  const { allItemsRef } = useAllItemsRef();

  return (
    <main className="w-full mx-auto flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-14 py-9 lg:relative ">
      <AsideLeft />
      <Navbar {...allItemsRef} />
      <Topics {...allItemsRef} />
      <NavbarMobile {...allItemsRef} />
    </main>
  );
}
