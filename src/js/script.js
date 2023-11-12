// import diferents modules:
import {isWebp, Modal, burger , Tabs, Accordion, mobileCheck,
  isMobile, isTablet, isDesktop, getHeaderHeight,
  createPopper, right, scrollingAnim, consoleText} from "./imports.js";
import Swiper, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
import {fade, unfade} from "./libraries/fade-unfade.js";
import LazyLoad from "vanilla-lazyload";
import "focus-visible";
import { validateForms } from './libraries/validate-form.js';
// import "simplebar";
// import * as myfun from "./modules/functions.js"

window.addEventListener('DOMContentLoaded', function () {
  // check webp
  isWebp();
  // connect lazy load
  new LazyLoad({
    elements_selector: '.lazy' ,
  });
  // my js code
  console.log('Script connected...');

  // slider with header menu
  new Swiper('.header__swiper', {
    freeMode: true,
    slidesPerView: 'auto',
    // spaceBetween:74,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    }
  });

  // burger initialitzation
  burger();

  // catalog heart active state...
  const heartState = document.querySelectorAll('.card__heart');

  heartState.forEach(el => {
    el.addEventListener('click' , () => {
      el.classList.toggle('active');
    });
  });


  // filter settings
  const filetrBtn = document.querySelectorAll('.filter__btn');

  filetrBtn.forEach(el => {
    el.addEventListener('click' , () => {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      } else {
        filetrBtn.forEach(e => {
          e.classList.remove('active');
        });
        el.classList.toggle('active');
      }
    });
  });
  // catalog slider
  new Swiper('.catalog__swiper', {
    spaceBetween:32,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
});
