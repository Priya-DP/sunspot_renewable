'use client';

import HeaderOne from "@/components/headers/headerOne";
import PageTitle from "@/components/sections/pageTitle";
import TeamesOne from "@/components/sections/teames/teamesOne";
import TeamesThree from "@/components/sections/teames/teamesThree";
import Footer from "@/components/sections/footer";

export default function TeamPage() {
  return (
    <>
      <HeaderOne />
      <PageTitle pageName="Team Members" />
      <TeamesThree />
      <TeamesOne />
      <Footer />
    </>
  );
}
