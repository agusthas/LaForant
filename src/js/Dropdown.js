import './vendors/jquery.min';
import Maps from './contents/Maps';
import Agents from './contents/Agents';
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
    Maps.map((value) => SingeList(value)),
  );

  listAppend(
    $('[data-dropdown-agents]'),
    Agents.map((value) => SingeList(value)),
  );
};

export default Dropdown;
