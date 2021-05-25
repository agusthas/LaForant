const Sidebar = () => {
  /* Sidebars */
  $('#js-hamburger--open').on('click', (e) => {
    e.stopPropagation();
    $('#js-sidebar').toggleClass('show');
    $('body').css('overflow', 'hidden');
  });

  $('#js-hamburger--close').on('click', (e) => {
    e.stopPropagation();
    $('#js-sidebar').toggleClass('show');
    $('body').css('overflow', 'auto');
  });
};

export default Sidebar;
