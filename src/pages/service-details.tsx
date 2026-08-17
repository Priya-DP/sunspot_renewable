"use client";

import { useState } from "react";
import PageTitle from "@/components/sections/pageTitle";
import ServiceDetailsVideoPopup from "@/components/sections/services/serviceDetailsVideoPopup";
import ServiceSidebar from "@/components/sections/services/serviceSidebar";
import { servicesData, ServiceContent } from "@/data/servicesData";
import { Link } from "react-router-dom";

const faqData: Record<
  string,
  Array<{ id: number; question: string; answer: string; icon?: string }>
> = {
  pv: [
    {
      id: 1,
      icon: "🔆",
      question: "How efficient are solar PV modules?",
      answer:
        "Our solar PV modules have efficiency ratings of 20-22%, which is among the highest available for residential and commercial installations.",
    },
    {
      id: 2,
      icon: "⏳",
      question: "What is the lifespan of solar panels?",
      answer:
        "Solar panels typically last 25-30 years with minimal degradation, typically losing only 0.5-1% efficiency per year.",
    },
    {
      id: 3,
      icon: "☁️",
      question: "Do solar panels work on cloudy days?",
      answer:
        "Yes, solar panels still generate electricity on cloudy days, though at reduced efficiency (typically 10-25% of normal output).",
    },
  ],
  rooftop: [
    {
      id: 1,
      icon: "💰",
      question: "How much can I save on my electricity bill?",
      answer:
        "You can save 70-90% of your electricity bill depending on system size and usage patterns. Most customers see ROI within 3-5 years.",
    },
    {
      id: 2,
      icon: "⏱️",
      question: "How long does installation take?",
      answer:
        "Installation usually takes 2-3 days, with approvals taking 2-4 weeks. The entire process from consultation to grid connection takes about 3-5 weeks.",
    },
    {
      id: 3,
      icon: "🏠",
      question: "Is my roof suitable for solar installation?",
      answer:
        "Most roofs are suitable. Key factors include shadow-free area, structural strength, roof orientation (south-facing is ideal), and slope (15-40 degrees optimal).",
    },
  ],
  ground: [
    {
      id: 1,
      icon: "🗺️",
      question: "How much land is needed?",
      answer:
        "Typically, 1 kW of solar requires approximately 100 sq ft of land. For a 1 MW plant, you would need about 2.5-3 acres of land.",
    },
    {
      id: 2,
      icon: "🎯",
      question: "Can I install tracking systems?",
      answer:
        "Yes, we offer both single-axis and dual-axis tracking systems that increase energy production by 20-35% compared to fixed-tilt systems.",
    },
  ],
  pump: [
    {
      id: 1,
      icon: "💧",
      question: "How much water can a solar pump deliver?",
      answer:
        "Output ranges from 20,000 to 100,000 liters per day depending on system size, solar irradiation, and pump head requirements.",
    },
    {
      id: 2,
      icon: "🌙",
      question: "Does the pump work at night?",
      answer:
        "Solar pumps operate only during daylight hours. Water is stored in tanks for night use. Battery backup can be added for nighttime pumping if needed.",
    },
  ],
  lighting: [
    {
      id: 1,
      icon: "💡",
      question: "How long do solar street lights stay on?",
      answer:
        "Fully charged batteries provide 10-12 hours of lighting from dusk until dawn, with automatic dimming features to extend backup during cloudy days.",
    },
    {
      id: 2,
      icon: "🌧️",
      question: "Do they work during monsoons?",
      answer:
        "Yes, with 3-5 days of battery backup, lights continue working even during extended cloudy weather. The system automatically adjusts brightness to conserve power.",
    },
  ],
};

const defaultService: ServiceContent = {
  title: "Solar Energy Solutions",
  image: "/img/service/details-1.jpg",
  description:
    "Smart, reliable, and affordable solar solutions designed for homes and businesses.",
  fullDescription:
    "We make your transition to clean solar energy simple and stress-free. Our team guides you from the initial consultation to final installation with complete transparency. We design solutions tailored to your home or business needs for maximum savings and efficiency. Our experts handle setup, approvals, and ongoing maintenance so you don't have to worry. Start saving on electricity bills while contributing to a greener future with our reliable support.",
  benefitsTitle: "Why Choose Solar Energy?",
  benefitsDescription: "",
  benefitsList: [
    "Reduce electricity bills by 70–90%",
    "Government subsidies and tax benefits available",
    "Increase property value",
    "Low maintenance and long lifespan (20–25 years)",
    "Reliable power even during outages (with battery backup)",
    "Environment-friendly and reduces carbon footprint",
    "Quick return on investment",
    "Protection against rising electricity costs",
  ],
  secondDescription:
    "Installation takes just 2-3 days for most residential systems. Our team handles everything from design to government approvals and net meter installation.",
  thirdDescription:
    "High-Performance Technology: Our monocrystalline panels deliver 20-30% more energy than traditional solar panels.",
  faqType: "pv",
};

const ServiceDetails = () => {
  const [selectedService, setSelectedService] = useState<string>("default");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const getCurrentService = (): ServiceContent => {
    if (selectedService !== "default" && servicesData[selectedService]) {
      return servicesData[selectedService];
    }
    return defaultService;
  };

  const currentService = getCurrentService();
  const benefitsList =
    currentService.benefitsList || defaultService.benefitsList;

  // Get FAQ based on current service's faqType
  const currentFaq = faqData[currentService.faqType] || faqData.pv;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageTitle title={currentService.title} currentPage="Services Details" />

      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4" style={{ alignItems: "stretch" }}>
              {/* Sidebar */}
              <div className="col-12 col-lg-4 order-2 order-md-1">
                <ServiceSidebar
                  activeService={
                    selectedService === "default" ? undefined : selectedService
                  }
                  onServiceChange={(serviceId) => {
                    setSelectedService(serviceId);
                    setOpenIndex(0);
                  }}
                />
              </div>

              {/* Main Content */}
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-items">
                  {/* Image */}
                  <div style={{ marginBottom: "25px" }}>
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                      style={{
                        width: "100%",
                        maxHeight: "350px",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  </div>

                  <div className="details-content">
                    <h3>{currentService.title}</h3>
                    <p className="mt-3">{currentService.fullDescription}</p>

                    {/* Benefits */}
                    <div
                      style={{
                        background: "#f8f9fa",
                        borderRadius: "12px",
                        padding: "20px",
                        marginTop: "25px",
                        marginBottom: "25px",
                      }}
                    >
                      <h4>{currentService.benefitsTitle}</h4>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        {benefitsList.map((benefit, idx) => (
                          <li
                            key={idx}
                            style={{
                              display: "flex",
                              gap: "10px",
                              marginBottom: "8px",
                            }}
                          >
                            <span style={{ color: "#0a5c8e" }}>✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p>{currentService.secondDescription}</p>

                    {/* Third */}
                    <div
                      style={{
                        marginTop: "25px",
                        padding: "20px",
                        background: "#e8f4f8",
                        borderRadius: "12px",
                      }}
                    >
                      <h4 style={{ color: "#0a5c8e" }}>
                        Why Choose Our {currentService.title}?
                      </h4>
                      <p>{currentService.thirdDescription}</p>
                    </div>

                    {/* Video */}
                    <div className="details-video-items">
                      <ServiceDetailsVideoPopup />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL WIDTH FAQ SECTION - Outside the row, below both columns */}
            <div className="row mt-5 pt-4">
              <div className="col-12">
                <div className="most-comment-section">
                  <div className="section-header text-center mb-4">
                    <span className="subtitle">
                      <i className="fa-regular fa-message"></i> FAQ
                    </span>
                    <h2 className="fw-bold mb-3">
                      Frequently Asked{" "}
                      <span style={{ color: "#0a5c8e" }}>Questions</span>
                    </h2>
                    <div className="divider mx-auto">
                      <span></span>
                      <i className="fa-regular fa-circle-question"></i>
                      <span></span>
                    </div>
                    <p
                      className="text-muted mx-auto mt-3"
                      style={{ maxWidth: "600px" }}
                    >
                      Find answers to common questions about{" "}
                      {currentService.title.toLowerCase()}. Learn more about how
                      our solar solutions can benefit you.
                    </p>
                  </div>

                  {/* Modern FAQ Accordion - Using currentFaq dynamically */}
                  <div className="modern-faq">
                    {currentFaq.map((item, index) => (
                      <div
                        key={item.id}
                        className={`faq-card ${openIndex === index ? "active" : ""}`}
                        style={{
                          background: "#fff",
                          borderRadius: "16px",
                          marginBottom: "16px",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                          transition: "all 0.3s ease",
                          border:
                            openIndex === index
                              ? "1px solid #0a5c8e"
                              : "1px solid #eef2f6",
                        }}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "20px 24px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "16px",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "15px",
                            }}
                          >
                            <div
                              style={{
                                width: "48px",
                                height: "48px",
                                background:
                                  openIndex === index ? "#0a5c8e" : "#f0f4f9",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s ease",
                              }}
                            >
                              <span style={{ fontSize: "22px" }}>
                                {item.icon || "❓"}
                              </span>
                            </div>
                            <h5
                              style={{
                                margin: 0,
                                fontSize: "18px",
                                fontWeight: 600,
                                color:
                                  openIndex === index ? "#0a5c8e" : "#1a2b3e",
                                transition: "color 0.3s ease",
                              }}
                            >
                              {item.question}
                            </h5>
                          </div>
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              background:
                                openIndex === index ? "#0a5c8e" : "#f0f4f9",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s ease",
                              transform:
                                openIndex === index
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                            }}
                          >
                            <i
                              className={`fa-solid ${openIndex === index ? "fa-minus" : "fa-plus"}`}
                              style={{
                                fontSize: "14px",
                                color: openIndex === index ? "#fff" : "#0a5c8e",
                              }}
                            ></i>
                          </div>
                        </button>

                        <div
                          className="faq-answer"
                          style={{
                            maxHeight: openIndex === index ? "300px" : "0",
                            overflow: "hidden",
                            transition:
                              "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            padding:
                              openIndex === index
                                ? "0 24px 24px 87px"
                                : "0 24px",
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              color: "#5a6e7f",
                              lineHeight: "1.7",
                              fontSize: "15px",
                            }}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* If no FAQ items found */}
                  {currentFaq.length === 0 && (
                    <div className="text-center p-4">
                      <p>
                        No FAQs available for this service. Please contact us
                        for more information.
                      </p>
                    </div>
                  )}

                  {/* Need Help Section */}
                  <div
                    className="help-section mt-5 text-center p-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #0a5c8e 0%, #0d6efd 100%)",
                      borderRadius: "20px",
                      color: "#fff",
                    }}
                  >
                    <h4 className="mb-2" style={{ fontWeight: 600 }}>
                      Still Have Questions?
                    </h4>
                    <p style={{ opacity: 0.9, marginBottom: "20px" }}>
                      Can't find the answer you're looking for? Please chat with
                      our friendly team.
                    </p>
                    <Link to="/contact">
                      <button
                        className="btn"
                        style={{
                          background: "#fff",
                          color: "#0a5c8e",
                          borderRadius: "50px",
                          padding: "10px 30px",
                          fontWeight: 600,
                          border: "none",
                          transition: "transform 0.3s ease",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <i className="fa-regular fa-comment-dots me-2"></i>
                        Contact Support
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
