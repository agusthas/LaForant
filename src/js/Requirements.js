import '../scss/main.scss'; //FIXME: Hapus ini kalo dah mau run di css biasa
import SpecsContent from './contents/SpecsContent.js';
import { Sidebar, Dropdown, Socmed } from './components/index.js';

Sidebar();
Dropdown();
Socmed();

const Lists = ({ os, processor, gpu, vram, ram, storage }) => {
  return `
    <ul class="req-card__lists">
      <li class="req-card__list">
        <strong>OS : </strong>${os}
      </li>
      <li class="req-card__list">
        <strong>Processor : </strong>${processor}
      </li>
      <li class="req-card__list">
        <strong>GPU : </strong>${gpu}
      </li>
      <li class="req-card__list">
        <strong>VRAM : </strong>${vram}
      </li>
      <li class="req-card__list">
        <strong>RAM : </strong>${ram}
      </li>
      <li class="req-card__list">
        <strong>Storage : </strong>${storage}
      </li>
    </ul>
  `;
};

const Header = ({ type, fps }) => {
  return `
    <div class="req-card__header">
      <h4 class="req-card__title">${type}</h4>
      <p class="req-card__subtitle">(${fps} FPS)</p>
    </div>
  `;
};

const SingleRequirement = (specs) => {
  const ul = Lists(specs);
  const title = Header(specs);

  const wrapper = document.createElement('div');
  wrapper.className = `req-card req-card--${specs.type.toLowerCase()}`;

  $(wrapper).append(title).append(ul);

  return wrapper;
};

const SpecsList = SpecsContent.map((value) => SingleRequirement(value));
$('[data-requirement]').each((_, el) => $(el).append(SpecsList));
