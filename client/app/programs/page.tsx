"use client";

import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navbar";
import { useEffect } from "react";
import { useGlobalContext } from "../context/ProgramsContext";

export default function Programs() {
  const programsArr = useGlobalContext();

  useEffect(() => {
    console.log(programsArr);
  });

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="bg-bgbrand w-full flex flex-col items-center py-10 gap-16">
        <p className="text-white text-4xl font-bold">Our upcoming events...</p>
        <div className="flex flex-wrap max-w-[1400px] justify-center gap-6">
          <EventCard></EventCard>
          <EventCard></EventCard>
          <EventCard></EventCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
