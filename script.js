'use strict';
const articles = [
  {
    id: 1,
    title: 'the WET Codbase',
    date: new Date(2020, 9, 4),
    length: 11,
    snippet: `I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.`,
  },
  {
    id: 2,
    title: 'goodby, clean code',
    date: new Date(2019, 10, 22),
    length: 5,
    snippet: `Biodiesel artisan seitan plaid sriracha copper mug venmo shabby chic. Kickstarter raclette kombucha, yr post-ironic jianbing try-hard flexitarian vaporware normcore.`,
  },
  {
    id: 3,
    title: 'my decade in review',
    date: new Date(2018, 7, 11),
    length: 5,
    snippet: `Direct trade shabby chic four dollar toast, tilde actually try-hard bicycle rights aesthetic forage. Meditation keytar asymmetrical tacos artisan truffaut. Pabst jean shorts roof party scenester.`,
  },
  {
    id: 4,
    title: 'what are the react team principles',
    date: new Date(2015, 5, 4),
    length: 5,
    snippet: `Selvage street art hammock affogato VHS. Mustache shaman literally wayfarers schlitz. Direct trade four loko narwhal VHS pop-up, chartreuse trust fund typewriter street art swag thundercats art party.`,
  },
];

articles.forEach((el, i) => {
  const htmlEl = document.createElement('section');
  const h1El = el.title
    .toLowerCase()
    .split(' ')
    .map((item) => item.replace(item[0], item[0].toLocaleUpperCase()))
    .join(' ');

  htmlEl.insertAdjacentHTML(
    'afterbegin',
    `<article><h2>${h1El}</h2>
    <span class="sameDark">${Intl.DateTimeFormat('en-US').format(el.date)}, ${
      el.length
    } min read</span>
      </article>
      <p class="sameDark">${el.snippet}</p>`
  );

  document
    .querySelector('.container')
    .insertAdjacentElement('beforeend', htmlEl);
});

document.querySelector('button').addEventListener('click', function () {
  document.querySelector('body').classList.toggle('DarkBody');
  document
    .querySelectorAll('.sameDark')
    .forEach((elemHTML) => elemHTML.classList.toggle('Dark'));
});
