import BlogSection from "@/components/client/blog-section";
import UniversityList from "@/components/client/university-list";
import ConsultationForm from "@/components/client/consultation-form";
import Faqs from "@/components/client/faq-section";
import Services from "@/components/client/services-section";
import VisaMap from "@/components/client/visa-map";
import WhyChooseUs from "@/components/client/why-choose-us";
import Hero from "@/components/client/hero";
import AboutUs from "@/components/client/about";
import Testimonials from "@/components/client/testimonials";
import ContactUs from "@/components/client/contact-us";

export default async function Home() {

  return (
    <main className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <div className="max-w-7xl mx-auto">
        <WhyChooseUs />
        <AboutUs />
        <Services />
        <VisaMap />
        <UniversityList />
        <BlogSection />
        <ConsultationForm />
        <ContactUs />
        <Testimonials /> 
        <Faqs />  
      </div>
    </main>
  );
}
