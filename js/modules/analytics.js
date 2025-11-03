export const initAnalytics = () => {
  trackPageView();

  setupEventTracking();
};

const trackPageView = () => {
  console.warn('Analytics: Page view tracked');
};

const setupEventTracking = () => {
  document.querySelectorAll('.property-card').forEach((card) => {
    card.addEventListener('click', () => {
      trackEvent('property_click', {
        property_title: card.querySelector('h3')?.textContent || 'Unknown',
      });
    });
  });
};

export const trackEvent = (eventName, eventData = {}) => {
  console.warn(`Analytics: Event tracked - ${eventName}`, eventData);
};
