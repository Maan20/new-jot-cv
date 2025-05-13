import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import { Features } from "home/Features";
import { Testimonials } from "home/Testimonials";
import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section with gradient background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50" />
        <div className="relative">
          <Hero />
        </div>
      </section>

      {/* Steps Section with subtle pattern */}
      <section className="relative">
        <div className="absolute inset-0 bg-dot opacity-5" />
        <div className="relative">
          <Steps />
        </div>
      </section>

      {/* Features Section with gradient background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-50" />
        <div className="relative">
          <Features />
        </div>
      </section>

      {/* Testimonials Section with subtle pattern */}
      <section className="relative">
        <div className="absolute inset-0 bg-dot opacity-5" />
        <div className="relative">
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section with gradient background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50" />
        <div className="relative">
          <QuestionsAndAnswers />
        </div>
      </section>
    </div>
  );
}
