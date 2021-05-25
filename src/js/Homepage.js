import '../scss/main.scss'; //FIXME: Hapus ini kalo dah mau run di css biasa
import UpdatesContent from './contents/UpdatesContent.js';
import { Sidebar, Dropdown, Socmed } from './components/index.js';

Sidebar();
Dropdown();
Socmed();

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

const newsParent = $('#js-news');
const newsLists = UpdatesContent.map((data) => SingleNews(data)).join('');

newsParent.append(newsLists);
