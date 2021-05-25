import '../scss/main.scss'; //FIXME: Hapus ini kalo dah mau run di css biasa
import MapsContent from './contents/MapsContent.js';
import { limitIndex } from './utils/limitIndex.js';
import { Sidebar, Dropdown, Socmed } from './components/index.js';

const parameter =
  new URL(window.location.href).searchParams.get('map') || 'breeze';

let currentIndex = 0;
let MapsElements = [];
let MapsLength = 0;

const setElements = (content) => {
  // Set Map Image
  $('#js-map-image').empty().append(content.img);

  // Set Map Content
  const currentContent = [content.heading, content.paragraph];

  $('#js-map-content').empty().append(currentContent);
};

const setPrevClick = (target) => {
  $(target).on('click', (e) => {
    currentIndex = limitIndex(0, --currentIndex, MapsLength);

    setElements(MapsElements[currentIndex]);
  });
};

const setNextClick = (target) => {
  $(target).on('click', (e) => {
    currentIndex = limitIndex(0, ++currentIndex, MapsLength);

    setElements(MapsElements[currentIndex]);
  });
};

const setArrowKeyClick = (prev, next) => {
  $(window).on('keydown', (e) => {
    if (e.code === 'ArrowRight') $(next).trigger('click');
    if (e.code === 'ArrowLeft') $(prev).trigger('click');
  });
};

const transformContent = (content) => {
  const elementObject = content.map((item) => {
    const dot = document.createElement('span');
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');
    const img = new Image();
    const param =
      new URL(window.location.origin + item.link).searchParams.get('map') ||
      null;

    heading.className = 'maps__name';
    dot.className = 'decor-dot';
    paragraph.className = 'maps__description';
    img.className = 'maps__image';

    heading.textContent = item.name;
    dot.textContent = '.';
    heading.appendChild(dot);
    paragraph.textContent = item.desc;
    img.src = item.image;
    img.alt = item.name;

    return {
      id: item.id,
      heading,
      paragraph,
      img,
      param,
    };
  });

  const len = elementObject.length - 1;
  return [elementObject, len];
};

$(function () {
  Sidebar();
  Dropdown();
  Socmed();

  setNextClick($('#js-next-map-button'));
  setPrevClick($('#js-prev-map-button'));
  setArrowKeyClick($('#js-prev-map-button'), $('#js-next-map-button'));

  [MapsElements, MapsLength] = transformContent(MapsContent.slice(0, -1));

  currentIndex = MapsElements.find(({ param }) => param === parameter).id;

  setElements(MapsElements[currentIndex]);
  $('#js-maps-loading').fadeOut();
});
