import '../vendors/jquery.min.js';
import SocialsContent from '../contents/SocialsContent.js';

/**
 * Function to append list to parent container
 * @param {JQuery<HTMLElement>} parent The parent container of dropdown as Jquery Object
 * @param {Array<HTMLElement>} list List of HTML Elements to be appended
 */
const listAppend = (parent, list) => {
  parent.each((_, el) => $(el).append(list));
};

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
