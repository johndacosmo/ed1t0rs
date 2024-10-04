"use client";

import { useEffect, useRef } from 'react';
import { fadeInLogoThenChangeBackground } from '@/style/hompageAnis';  // Import the animation function
import Image from 'next/image';
import '@/style/homePage.css';  // Import the CSS file
import Link from 'next/link';
const HomePage = () => {
  const logoRef = useRef(null);       // Reference for the logo
  const backgroundRef = useRef(null); // Reference for the background container

  useEffect(() => {
    // Trigger the animation that fades in the logo first, then changes the background and floats the logo
    fadeInLogoThenChangeBackground(logoRef, backgroundRef);
  }, []);

  return (
    <>
      {/* First section */}
      <div className="home-container" ref={backgroundRef}>
        <header className="home-header" ref={logoRef}>
          <Image 
            src="/photos/Final.jpg"
            alt="SnapSavvy Logo"
            width={300} 
            height={150}
          />
        </header>
      </div>

      {/* Second section */}
      <section className="second-section">
        <h1>Welcome to the second section</h1>
        <p>This is another part of the page with a different background.</p>
      </section>

      <section className="third-section">
        <h1>This is the third section</h1>
        <p>Another full-screen section with its own background image.</p>

        {/* Button to the gallery page */}
        <Link href="/gallery" className="gallery-button">
          Visit Gallery
        </Link>
      </section>
    </>
  );
};

export default HomePage;
