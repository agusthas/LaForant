import '../scss/main.scss'; //FIXME: Hapus ini kalo dah mau run di css biasa
import Navbar from './layout/Navbar.js';
import MapsContent from './contents/MapsContent.js';

Navbar();

/* Slicing last item */
const MapsData = MapsContent.slice(0, -1);

/* Mapping each element in MapsData into an HTML Element */
const Showcases = MapsData.map((item, index) => {
  const { name, image, desc } = item;

  return `
      <div class="showcases__top" style="background-image: url('${image}')"></div>

      <div data-maps-index="0${index}" class="showcases__bottom">
        <h4 class="showcases__title">${name}</h4>
        <p class="showcases__description">${desc}</p>
      </div>
    `;
});

let mapFromUrl = new URL(window.location.href).searchParams.get('map');

let currentIndex = 0;
if (mapFromUrl) {
  currentIndex = MapsData.findIndex(({ name }) => name == mapFromUrl);
}

const listMapsParent = $('#js-list-maps');
const nextBtn = $('#js-next-btn');
const prevBtn = $('#js-prev-btn');

MapsData.forEach((el, i) => {
  const img = `
    <div class="list-${i}" data-maps-index="${i}" data-maps-name=${el.name}>
      <img src="${el.image}" alt=""/>
    <div>
    `;

  listMapsParent.append(img);
});

/**
 * Set active class to the active list
 * @param {Number} activeIndex The current active index
 */
const setActiveList = (activeIndex) => {
  listMapsParent.children().each((_, el) => {
    const curr = $(el);

    if (typeof activeIndex !== 'number') {
      activeIndex = Number(activeIndex);
    }

    if (curr.data().mapsIndex === activeIndex) {
      curr.addClass('active');
    } else {
      curr.removeClass('active');
    }
  });
};

/**
 * Set showcase to the active list
 * @param {Number} currIndex The current active index
 */
const setShowcase = (currIndex) => {
  try {
    if (currIndex < 0 || currIndex > MapsData.length - 1) {
      throw new RangeError('Current Index if out of bounds');
    }

    $('#js-maps-showcases').html(Showcases[currIndex]);
  } catch (error) {
    $('#js-maps-showcases').html(Showcases[0]);
    console.log(error);
  }
};

listMapsParent.each((_, el) => {
  $(el).on('click', (e) => {
    currentIndex = $(e.target).data().mapsIndex;
    setActiveList(currentIndex);
    setShowcase(currentIndex);
  });
});

setActiveList(currentIndex);
setShowcase(currentIndex);

nextBtn.on('click', (e) => {
  currentIndex += 1;

  if (currentIndex > MapsData.length - 1) {
    currentIndex = 0;
  }

  setActiveList(currentIndex);
  setShowcase(currentIndex);
});

prevBtn.on('click', (e) => {
  currentIndex -= 1;

  if (currentIndex < 0) {
    currentIndex = MapsData.length - 1;
  }

  setActiveList(currentIndex);
  setShowcase(currentIndex);
});
