import React from 'react';
import Header from './components/Header';
import ArtServices from './components/ArtServices';
import FineArt from './components/FineArt';
import EnquiryForm from './components/EnquiryForm';
import SocialMedia from './components/SocialMedia';
import Newsletter from './components/Newsletter';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-sans overflow-x-hidden">
      <Header />
      <FineArt />
      <ArtServices />
      <EnquiryForm />
      <SocialMedia />
      <Newsletter />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
