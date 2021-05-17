import './vendors/jquery.min';
import Specs from './contents/Specs';
import { listAppend } from './utils';

/**
 * Function to create a Single Requirements
 * @param {Object} Specs
 * @param {String} Specs.type
 * @param {String} Specs.fps
 * @param {String} Specs.os
 * @param {String} Specs.processor
 * @param {String} Specs.gpu
 * @param {String} Specs.vram
 * @param {String} Specs.ram
 * @param {String} Specs.storage
 * @returns {HTMLElement}
 */
const SingleRequirement = ({
  type,
  fps,
  os,
  processor,
  gpu,
  vram,
  ram,
  storage,
}) => {
  return `
    <div class="req-card">
      <div class="req-card__header">
        <h4 class="req-card__title">${type}</h4>
        <p class="req-card__subtitle">(${fps} FPS)</p>
      </div>
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
    </div>
  `;
};

const Requirements = () => {
  const reqParent = $('[data-requirement]');
  listAppend(
    reqParent,
    Specs.map((value) => SingleRequirement(value)),
  );
};

export default Requirements;
