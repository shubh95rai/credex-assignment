import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/testimonials";
import ContactForm from "@/components/sections/ContactForm";
import Navbar from "@/components/sections/Navbar";
import ChatWidget from "@/components/sections/ChatWidget";

export default function Home() {
  return (
    <main className="text-gray-800">
      <Hero />

      <HowItWorks />

      <WhyChooseUs />

      <Testimonials />

      <ContactForm />

      <ChatWidget />
    </main>
  );
}
