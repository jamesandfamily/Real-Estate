import '../css/base.css';
import '../css/layout.css';
import '../css/components.css';

import { initThreeScene } from './modules/three-scene.js';
import { initAnimations } from './modules/animations.js';
import { initGallery } from './modules/gallery.js';
import { loadProperties } from './modules/properties.js';
import { initAnalytics } from './modules/analytics.js';

const init = () => {
  initThreeScene();

  initAnimations();

  loadProperties();

  initGallery();

  initAnalytics();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
