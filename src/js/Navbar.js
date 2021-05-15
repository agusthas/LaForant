const Navbar = () => {
  const dropdownToggler = document.querySelectorAll(
    '.navbar__link-text[data-dd-toggler]',
  );

  const sidebarOpen = document.querySelector('#js-hamburger--open');
  const sidebarClose = document.querySelector('#js-hamburger--close');
  const sidebar = document.querySelector('#js-sidebar');

  dropdownToggler.forEach((t) => {
    t.addEventListener('click', (e) => {
      const curr = e.target;

      curr.classList.toggle('navbar__link-text--active');
      $(curr).siblings('.dropdown').toggleClass('dropdown--show');
    });
  });

  try {
    sidebarOpen.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('show');
      document.body.style.overflow = 'hidden';
    });
    sidebarClose.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('show');
      document.body.style.overflow = 'auto';
    });
  } catch (error) {
    console.log(error);
  }
};

export default Navbar;
