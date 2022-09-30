/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector('.promo__adv'),
    advBlocks = adv.querySelectorAll('img'),
    genre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    listOfFilms = document.querySelectorAll('.promo__interactive-item');

advBlocks.forEach(item => { item.remove(); });

const divGenre = document.createElement('div');
divGenre.innerHTML = 'ДРАМА';
genre.replaceWith(divGenre);

promoBg.style.backgroundImage = 'url(../img/bg.jpg)';

movieDB.movies.sort();
listOfFilms.forEach((item, i) => {
    item.innerHTML = `${i+1}. ${movieDB.movies[i]} <div class="delete"></div>`;
    i++;
});