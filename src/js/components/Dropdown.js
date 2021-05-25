import MapsContent from '../contents/MapsContent.js';
import AgentsContent from '../contents/AgentsContent.js';

const SingeList = ({ name, link = '/index.html' }) => {
  const aTag = document.createElement('a');
  aTag.href = link;

  const li = document.createElement('li');
  li.innerHTML = name.toUpperCase();
  li.className = 'dropdown__list';

  $(aTag).append(li);
  return aTag;
};

const Dropdown = () => {
  const MapsList = MapsContent.map((value) => SingeList(value));
  const AgentsList = AgentsContent.map((value) => SingeList(value));

  $('[data-dropdown-maps]').each((_, el) => $(el).append(MapsList));
  $('[data-dropdown-agents]').each((_, el) => $(el).append(AgentsList));

  /* Dropdowns */
  $('[data-dd-toggler]').each(function (_, el) {
    const toggler = $(this);

    // Show Dropdown when user click the toggler
    toggler.on('click', function (event) {
      const target = event.target;
      const sibling = $(target).siblings();

      // Remove 'show' class from the other dropdown
      $('.dropdown').each((_, el) => {
        if ($(el)[0] !== sibling[0]) {
          $(el).removeClass('show');
        }
      });

      sibling.hasClass('show')
        ? sibling.removeClass('show')
        : sibling.addClass('show');
    });

    // Remove Dropdown when user click outside the toggler
    $(window).on('click', (event) => {
      if ($(event.target)[0] !== toggler[0]) {
        toggler.siblings().removeClass('show');
      }
    });
  });
};

export default Dropdown;
