const Updates = [
  {
    title: 'NEW AGENT: ASTRA',
    img: '/assets/images/new-agent-astra-reveal.jpg',
    date: '05/14/2021',
    link: 'https://www.youtube.com/watch?v=-ylVnuPWlJM',
  },
  {
    title: 'MAP REVEAL',
    img: '/assets/images/new-map-reveal.jpg',
    date: '05/05/2021',
    link: 'https://www.youtube.com/watch?v=HuI3qdaL-jI',
  },
  {
    title: 'RANKED GAMEPLAY',
    img: '/assets/images/ranked-gameplay-reveal.jpg',
    date: '05/01/2021',
    link: 'https://www.youtube.com/watch?v=WV1LCOHoDwA',
  },
  {
    title: 'COMMUNITY SPOTLIGHT #6',
    img: '/assets/images/community-spotlight.jpg',
    date: '04/04/2021',
    link: 'https://playvalorant.com/en-us/news/announcements/community-spotlight-6/',
  },
];

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
