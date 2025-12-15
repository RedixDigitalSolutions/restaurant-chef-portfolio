import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import VideoGallery from './components/VideoGallery/VideoGallery';
import ContactCTA from './components/ContactCTA/ContactCTA';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <Stats />
        <VideoGallery />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
