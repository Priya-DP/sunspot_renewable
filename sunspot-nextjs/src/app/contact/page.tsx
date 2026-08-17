'use client';

import HeaderOne from "@/components/headers/headerOne";
import PageTitle from "@/components/sections/pageTitle";
import ContactAddress from "@/components/sections/contact/contactAddress";
import ContactForm from "@/components/sections/contact/contactForm";
import ContactMap from "@/components/sections/contact/contactMap";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  return (
    <>
      <HeaderOne />
      <PageTitle pageName="Contact Us" />
      <section className="contact-section-2 fix section-padding">
        <div className="container">
          <div className="contact-wrapper-2">
            <div className="row g-4">
              <div className="col-lg-6">
                <ContactAddress />
              </div>
              <div className="col-lg-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactMap />
      <Footer />
    </>
  );
}
