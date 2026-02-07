import USOpenBanner from "@/components/USOpenBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import SpaceDetails from "@/components/SpaceDetails";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <USOpenBanner />
      <Navbar />
      <Hero />
      <QuickStats />
      <SpaceDetails />
      <Gallery />
      <Amenities />
      <Location />
      <InquiryForm />
      <Footer />
    </main>
  );
}
