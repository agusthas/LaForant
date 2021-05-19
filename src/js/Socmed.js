import SocialsContent from './contents/SocialsContent';
import { listAppend } from './utils';

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

  listAppend(
    socmedParent,
    SocialsContent.map((value) => aTag(value)),
  );
};

export default Socmed;
