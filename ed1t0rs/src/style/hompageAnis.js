import { gsap } from 'gsap';

/**
 * This function fades in the logo on a black screen, then changes the background image,
 * and floats the logo to the top.
 * @param {object} logoRef - The reference to the logo element.
 * @param {object} backgroundRef - The reference to the background container.
 */
export const fadeInLogoThenChangeBackground = (logoRef, backgroundRef) => {
  const tl = gsap.timeline();

  // Step 1: Fade in the logo on a black background
  tl.fromTo(
    logoRef.current,
    { opacity: 0, scale: 0.5 },  // Start hidden and scaled down
    { opacity: 1, scale: 1, duration: 2 }  // Fade in and scale to full size
  );

  // Step 2: After the logo fades in, change the background and float the logo to the top
  tl.to(backgroundRef.current, {
    backgroundImage: "url('/photos/DSC_7683edited2.jpg')", // Change the background to the photo

    duration: 0,  // No transition, the background changes instantly
  }, "+=1");  // Wait 1 second after the logo fades in before changing the background

  // Step 3: Float the logo to the top after the background changes
  tl.to(logoRef.current, {
    y: "-40vh",   // Move the logo to the top
    scale: 0.8,   // Slightly scale down the logo
    duration: 2,  // Duration of the float
    ease: "power2.inOut",
  });

  
};