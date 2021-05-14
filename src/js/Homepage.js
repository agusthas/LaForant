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
};

export default Homepage;
