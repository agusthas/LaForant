import './vendors/jquery.min';
import MapsContent from './contents/MapsContent';
import AgentsContent from './contents/AgentsContent';
import { listAppend } from './utils';

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
