import DownloaderSection from '@/components/DownloaderSection';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import HowToSection from '@/components/HowToSection';
import BenefitsSection from '@/components/BenefitsSection';
import UseCasesSection from '@/components/UseCasesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ComparisonSection from '@/components/ComparisonSection';
// import TipsSection from '@/components/TipsSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-6 leading-tight">
          Download Instagram Content <br className="hidden md:block" />
          <span className="text-pink-500">Easily & Securely</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center mb-8">
          The fastest and most reliable way to download Instagram videos, photos, reels, IGTV,
          stories, and carousels in high quality. No login required, 100% free!
        </p>
        <DownloaderSection />
      </section>

      {/* <FeaturesSection /> */}
      <BenefitsSection />
      <HowToSection />
      {/* <UseCasesSection /> */}
      <ComparisonSection />
      {/* <TestimonialsSection /> */}
      {/* <TipsSection /> */}
      <FAQSection />
      {/* <CTASection /> */}
    </div>
  );
}