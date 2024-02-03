// Урок 3. Промисы. Хранилище
// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).


const reviewBtn = document.querySelector('.review-btn');

if (reviewBtn) {
  reviewBtn.addEventListener('click', function () {
    const product = document.querySelector('.product-input').value;
    const review = document.querySelector('.review-input').value;

    if (product && review) {
      const data = {
        product,
        review,
      };

      saveReview(data);

      document.querySelector('.product-input').value = '';
      document.querySelector('.review-input').value = '';

      window.location.href = 'reviews.html';
    }
  });
}

function saveReview(data) {
  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push(data);
  localStorage.setItem('reviews', JSON.stringify(reviews));
}