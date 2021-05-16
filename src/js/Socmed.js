const data = [
  {
    icon: 'fab fa-facebook-f',
    link: 'https://www.facebook.com/PlayVALORANT/',
  },
  {
    icon: 'fab fa-twitter',
    link: 'https://twitter.com/playvalorant',
  },
  {
    icon: 'fab fa-youtube',
    link: 'https://www.youtube.com/channel/UC8CX0LD98EDXl4UYX1MDCXg',
  },
];

/**
 * Creating <a> tag
 * @param {Object} props - Object of link
 * @param {string} props.link - Link
 * @param {string} props.icon - Icon
 * @returns String literal for an <a> element
 */
const aTag = ({ link, icon }) => {
  return `<a class="social__link" href="${link}" target="_blank"><i class="${icon}"></i></a>`;
};

const Socmed = () => {
  const socmedParent = $('[data-socmed]');

  const Lists = data.map((value) => {
    return aTag(value);
  });

  socmedParent.each((_, el) => {
    $(el).append(Lists.join(''));
  });
};

export default Socmed;
