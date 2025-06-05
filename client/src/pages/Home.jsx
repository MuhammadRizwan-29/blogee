import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BlogList />
      <Newsletter />
      <Footer />
    </>
  );
}
