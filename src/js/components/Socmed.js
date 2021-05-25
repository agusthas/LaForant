import SocialsContent from '../contents/SocialsContent.js';

const SingleLink = ({ link, icon }) => {
  return `<a class="social__link" href="${link}" target="_blank"><i class="${icon}"></i></a>`;
};

const Socmed = () => {
  const SocialsList = SocialsContent.map((value) => SingleLink(value));

  $('[data-socmed]').each((_, el) => $(el).append(SocialsList));
};

export default Socmed;
