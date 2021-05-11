import '../scss/main.scss';
import './jquery.min';

// $(window).on('load', () => {
//   setTimeout(() => {
//     $('.loading').fadeOut();
//   }, 1500);
// });

const openBtn = $('#js-hamburger-open');
const closeBtn = $('#js-hamburger-close');
const mobileMenu = $('.mobile-menu');

openBtn.on('click', () => {
  $('body').css('overflow', 'hidden');
  mobileMenu.removeClass('mobile-menu--hidden');
  mobileMenu.addClass('mobile-menu--show');
});

closeBtn.on('click', () => {
  $('body').css('overflow', 'auto');
  mobileMenu.removeClass('mobile-menu--show');
  mobileMenu.addClass('mobile-menu--hidden');
});
