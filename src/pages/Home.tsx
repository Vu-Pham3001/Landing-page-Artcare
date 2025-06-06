import ArtServices from '../components/ArtServices';
import EnquiryForm from '../components/EnquiryForm';
import FineArt from '../components/FineArt';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';
import ScrollToTop from '../components/ScrollToTop';
import SocialMedia from '../components/SocialMedia';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Home = () => {
  return (
    <div className="min-h-screen bg-black font-sans overflow-hidden">
      <Navigation />
      <Banner />

      <AnimateOnScroll animation="fade-up">
        <FineArt />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={200}>
        <ArtServices />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={300} >
        <EnquiryForm />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={400}>
        <SocialMedia />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={500}>
        <Newsletter />
        <ScrollToTop />
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={600}>
        <Footer />
      </AnimateOnScroll>
    </div>
  );
};

export default Home; 