import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import CompaniesSection from "./_components/CompaniesSection";
import AboutSection from "./_components/AboutSection";
import FeatureSection from "./_components/FeatureSection";
import CallToActionSection from "./_components/CallToActionSection";
import BlogSection from "./_components/BlogSection";
import FooterSection from "./_components/FooterSection";

export default function Home() {
  return (
    <main className="relative z-0 bg-[#040C18] text-white">
      <div className="hidden lg:block lg:absolute lg:top-0 lg:left-0 w-[500px] h-[500px] bg-[#1B78DE] blur-[300px] rounded-full" />
      <div className="mx-auto w-4/5">
        <Header />
        <HeroSection />
        <CompaniesSection />
        <AboutSection />
        <FeatureSection />
        <CallToActionSection />
        <BlogSection />
      </div>
      <FooterSection />
    </main>
  );
}
