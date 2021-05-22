import Dropdown from '../components/Dropdown.js';
import Socmed from '../components/Socmed.js';

Dropdown();
Socmed();

/**
 * Function to toggle Sidebar
 * @param {Node} element
 * @param {Node} opener
 * @param {Node} closer
 */
const sidebarToggle = (element, opener, closer) => {
  try {
    opener.addEventListener('click', (e) => {
      e.stopPropagation();
      element.classList.toggle('show');
      document.body.style.overflow = 'hidden';
    });

    closer.addEventListener('click', (e) => {
      e.stopPropagation();
      element.classList.toggle('show');
      document.body.style.overflow = 'auto';
    });
  } catch (error) {
    console.log(error);
  }
};

const dropdown = (toggler) => {
  const handleClick = (e) => {
    const curr = e.target;
    const dd = curr.nextElementSibling;

    toggler.forEach((el) => {
      if (el !== curr) {
        el.nextElementSibling.classList.remove('show');
      }
    });

    if (dd.classList.contains('show')) {
      dd.classList.remove('show');
    } else {
      dd.classList.add('show');
    }
  };

  toggler.forEach((el) => {
    el.addEventListener('click', handleClick);
  });

  window.addEventListener('click', (event) => {
    toggler.forEach((el) => {
      if (event.target !== el) {
        el.nextElementSibling.classList.remove('show');
      }
    });
  });
};

const Navbar = () => {
  const linkText = document.querySelectorAll('[data-dd-toggler]');
  dropdown(linkText);

  const sidebarOpen = document.querySelector('#js-hamburger--open');
  const sidebarClose = document.querySelector('#js-hamburger--close');
  const sidebar = document.querySelector('#js-sidebar');

  window.matchMedia('(min-width: 1000px)').addEventListener('change', (e) => {
    if (e.matches) {
      sidebar.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });
  sidebarToggle(sidebar, sidebarOpen, sidebarClose);
};

export default Navbar;
