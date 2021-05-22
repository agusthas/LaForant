import MapsContent from '../contents/MapsContent.js';
import AgentsContent from '../contents/AgentsContent.js';

/**
 * Function to append list to parent container
 * @param {JQuery<HTMLElement>} parent The parent container of dropdown as Jquery Object
 * @param {Array<HTMLElement>} list List of HTML Elements to be appended
 */
const listAppend = (parent, list) => {
  parent.each((_, el) => $(el).append(list));
};

const SingeList = ({ name, link = '/index.html' }) => {
  return `
    <a href="${link}">
      <li class="dropdown__list">${name}</li>
    </a>
    `;
};

const Dropdown = () => {
  listAppend(
    $('[data-dropdown-maps]'),
    MapsContent.map((value) => SingeList(value)),
  );

  listAppend(
    $('[data-dropdown-agents]'),
    AgentsContent.map((value) => SingeList(value)),
  );
};

export default Dropdown;
