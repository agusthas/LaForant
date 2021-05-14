import { Updates } from './content';

const mappedUpdates = Updates.map((update) => {
  const { title, img, date, link } = update;

  return `
    <article class="newspaper">
      <div class="newspaper__image">
        <a
          href="${link}"
          target="_blank"
          ><img
            src="${img}"
            alt="${title}"
        /></a>
      </div>
      <div class="newspaper__date">${date}</div>
      <div class="newspaper__headlines">${title}</div>
    </article>
  `;
});

const Homepage = () => {
  const newsParent = $('#js-news');
  $.each(mappedUpdates, (_, el) => newsParent.append(el));

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
};

export default Homepage;
