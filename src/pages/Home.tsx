import ArtServices from '../components/ArtServices';
import EnquiryForm from '../components/EnquiryForm';
import FineArt from '../components/FineArt';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';
import ScrollToTop from '../components/ScrollToTop';
import SocialMedia from '../components/SocialMedia';

const Home = () => {
  return (
    <div className="min-h-screen bg-black font-sans overflow-x-hidden">
      <Navigation />
      <Banner />
      <FineArt />
      <ArtServices />
      <EnquiryForm />
      <SocialMedia />
      <Newsletter />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home; 