import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  animateHero();

  animateOnScroll();
};

const animateHero = () => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const title = hero.querySelector('h1');
  const subtitle = hero.querySelector('p');

  gsap.from(title, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from(subtitle, {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
  });
};

const animateOnScroll = () => {
  const sections = document.querySelectorAll('section:not(.hero)');

  sections.forEach((section) => {
    const heading = section.querySelector('h2');
    if (heading) {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      });
    }

    const cards = section.querySelectorAll('.property-card');
    if (cards.length > 0) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  });
};

export const animateElement = (element, options = {}) => {
  return gsap.to(element, {
    ...options,
    ease: options.ease || 'power2.out',
  });
};
