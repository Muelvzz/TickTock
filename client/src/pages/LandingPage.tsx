import Navigation from "../components/landing-page/Navigation"
import { Hero } from "../components/landing-page/Hero"
import Features from "../components/landing-page/Features"
import CTA from "../components/landing-page/CTA"
import Footer from "../components/landing-page/Footer"

export default function LandingPage() {
  return (
    <>
      <Navigation/>
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  )
}