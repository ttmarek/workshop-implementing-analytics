function renderUI(state) {

  // Adding an active class to the nav links
  const navLinks = Array.prototype.slice.call(document.querySelectorAll('nav li'));
  navLinks.forEach((navLink) => {
    const page = '/' + navLink.id.replace('page-link-', '');
    if (state.route === page) {
      navLink.classList.add('active');
    } else {
      if (navLink.classList.contains('active')) {
        navLink.classList.remove('active');
      }
    }
  });
};

module.exports = { renderUI };
