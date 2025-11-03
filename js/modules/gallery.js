import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { galleryData } from '../data/gallery.js';

export const initGallery = () => {
  const swiperContainer = document.querySelector('.swiper-container');
  if (!swiperContainer) {
    console.warn('Swiper container not found');
    return;
  }

  const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
  if (!swiperWrapper) {
    console.warn('Swiper wrapper not found');
    return;
  }

  galleryData.forEach((item) => {
    const slide = createGallerySlide(item);
    swiperWrapper.appendChild(slide);
  });

  const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  return swiper;
};

const createGallerySlide = (item) => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.title;

  const caption = document.createElement('div');
  caption.className = 'gallery-caption';

  const title = document.createElement('h3');
  title.textContent = item.title;

  const description = document.createElement('p');
  description.textContent = item.description;

  caption.appendChild(title);
  caption.appendChild(description);

  slide.appendChild(img);
  slide.appendChild(caption);

  return slide;
};
