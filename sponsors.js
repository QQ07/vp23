const carousel = document.querySelector('.carousel');
const itemsContainer = carousel.querySelector('.carousel-items');
const items = Array.from(itemsContainer.children);
const prevButton = carousel.querySelector('.carousel-button-prev');
const nextButton = carousel.querySelector('.carousel-button-next');

let currentItemIndex = 0;
let itemsPerPage = 6;

function goToItem(index) {
  if (index < 0) {
    index = items.length - itemsPerPage;
  } else if (index > items.length - itemsPerPage) {
    index = 0;
  }
  itemsContainer.style.transition = 'transform 0.5s ease';
  itemsContainer.style.transform = `translateX(-${index * (100 / itemsPerPage)}%)`;
  currentItemIndex = index;
}

prevButton.addEventListener('click', () => {
  goToItem(currentItemIndex - 1);
});

nextButton.addEventListener('click', () => {
  goToItem(currentItemIndex + 1);
});

goToItem(currentItemIndex);

window.addEventListener('resize', () => {
  if (window.innerWidth < 800) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 6;
  }
  goToItem(currentItemIndex);
});