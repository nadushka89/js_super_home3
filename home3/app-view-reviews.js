loadReviews();

function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const ul = document.querySelector('.list');

  if (ul) {
    ul.innerHTML = '';

    reviews.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong class="product-link" data-product="${item.product}">${item.product}</strong>: ${item.review} <button onclick="deleteReview('${item.product}')">Удалить</button>`;
      ul.appendChild(li);
    });

    const productLinks = document.querySelectorAll('.product-link');
    productLinks.forEach((link) => {
      link.addEventListener('click', function () {
        showProductReviews(link.dataset.product);
      });
    });
  }
}

function showProductReviews(product) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const productReviews = reviews.filter((item) => item.product === product);

  const ul = document.querySelector('.list');
  if (ul) {
    ul.innerHTML = '';

    productReviews.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.review;
      ul.appendChild(li);
    });
  }
}

window.deleteReview = function (product) {
  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews = reviews.filter((item) => item.product !== product);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  loadReviews();
};
