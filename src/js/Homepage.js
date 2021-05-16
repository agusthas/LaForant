import { Updates } from './content';

/**
 * Function to create a single news
 * @param {{title: string, img: string, date: string, link: string}} News - List of News data
 * @returns String literal for a news
 */
const SingleNews = ({ title, img, date, link }) => {
  return `
    <article class="newspaper">
      <div class="newspaper__image">
        <a
          href="${link}"
          target="_blank"
          ><img
            loading="lazy"
            src="${img}"
            alt="${title}"
        /></a>
      </div>
      <div class="newspaper__date">${date}</div>
      <div class="newspaper__headlines">${title}</div>
    </article>
  `;
};

const Homepage = () => {
  const newsParent = $('#js-news');
  const newsLists = Updates.map((data) => SingleNews(data)).join('');

  newsParent.append(newsLists);
};

export default Homepage;
