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

/**
 * Dropdown Toggler
 * @param {NodeListOf<Element>} toggler A nodelist of node elements to listens the click event
 * @param {Function} sideEffect Callback function that receives the current cliked element as its parameter
 */
const dropdownToggle = (toggler, sideEffect = () => {}) => {
  try {
    toggler.forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        const current = e.target;

        sideEffect(current);
        $(current).siblings().toggleClass('show');
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const Navbar = () => {
  const linkText = document.querySelectorAll('[data-dd-toggler]');

  dropdownToggle(linkText, (current) => {
    current.classList.toggle('navbar__link-text--active');
    console.log(current);
  });

  const sidebarOpen = document.querySelector('#js-hamburger--open');
  const sidebarClose = document.querySelector('#js-hamburger--close');
  const sidebar = document.querySelector('#js-sidebar');

  sidebarToggle(sidebar, sidebarOpen, sidebarClose);
};

export default Navbar;
