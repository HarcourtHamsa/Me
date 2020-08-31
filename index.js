function openNav () {
  const navbar = document.getElementById ('navbar');

  if (navbar.className === 'navbar') {
    navbar.className += ' responsive';
  } else {
    navbar.className = 'navbar';
  }
}

window.addEventListener ('load', e => {
  e.preventDefault (); // prevents default action
  const loader = document.getElementById ('loader');

  setTimeout (() => {
    loader.style.display = 'none';
  }, 1000 * 3);
});


