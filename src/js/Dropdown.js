import './vendors/jquery.min';
import Maps from './contents/Maps';
import Agents from './contents/Agents';
import { listAppend } from './utils';

const SingeList = ({ name, link = '/index.html' }) => {
  return `
    <li class="dropdown__list">
      <a href="${link}">${name}</a>
    </li>
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
