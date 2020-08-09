function openNav () {
  const navbar = document.getElementById ('navbar');

  if (navbar.className === 'navbar') {
    navbar.className += ' responsive';
  } else {
    navbar.className = 'navbar';
  }
}

// window.addEventListener ('load', e => {
//   setTimeout (() => {
//     const popup = document.getElementById ('popup-container');
//     popup.style.display = 'block';
//   }, 1000 * 4);
// });

// const closeModal = () => {
//   const popup = document.getElementById ('popup-container');
//   popup.style.display = 'none';
// };
