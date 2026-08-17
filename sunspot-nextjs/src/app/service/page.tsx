'use client';

import HeaderOne from "@/components/headers/headerOne";
import PageTitle from "@/components/sections/pageTitle";
import ServicesOne from "@/components/sections/services/servicesOne";
import Footer from "@/components/sections/footer";

export default function ServicesPage() {
  return (
    <>
      <HeaderOne />
      <PageTitle pageName="Services" />
      <ServicesOne />
      <Footer />
    </>
  );
}
