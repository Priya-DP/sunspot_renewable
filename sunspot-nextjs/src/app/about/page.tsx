'use client';

import HeaderOne from "@/components/headers/headerOne";
import PageTitle from "@/components/sections/pageTitle";
import AboutTwo from "@/components/sections/about/aboutTwo";
import PartnersOne from "@/components/sections/partners/partnersOne";
import Footer from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <>
      <HeaderOne />
      <PageTitle pageName="About Us" />
      <AboutTwo />
      <PartnersOne />
      <Footer />
    </>
  );
}
