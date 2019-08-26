"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const buttonAdd = document.querySelector(".button-add--js");
const buttonRemove = document.querySelector(".button-remove--js");
const value = document.querySelector(".counter__value--js");
const history = document.querySelector(".history--js");
const list = document.querySelector(".history__list--js");
const key = new Date().toISOString().slice(0, 10);
const glassesHistory = [];

if (!localStorage.getItem(key)) {
	localStorage.setItem(key, 0);
	value.innerHTML = "0";
} else {
	value.innerHTML = localStorage.getItem(key);
}

buttonAdd.addEventListener("click", e => {
	localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
	value.innerHTML = localStorage.getItem(key);
	refreshHistory();
});

buttonRemove.addEventListener("click", e => {
	const currentValue = parseInt(localStorage.getItem(key));
	if (currentValue > 0) {
		localStorage.setItem(key, localStorage.getItem(key) - 1);
		value.innerHTML = localStorage.getItem(key);
	}
	refreshHistory();
});

function refreshHistory(){
	history.classList.toggle("history--js-active");

	list.innerHTML = "Historia: ";
	glassesHistory.length = 0;

	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i)[0] == 2) {
			glassesHistory[i] = {
				key: localStorage.key(i),
				value: localStorage.getItem(localStorage.key(i))
			};
		}
	}

	glassesHistory.sort((a, b) => {
		if (a.key < b.key) {
			return 1;
		} else {
			return -1;
		}
	});

	glassesHistory.forEach(item => {
		let copy;
		if ((item.value == 0) | (item.value > 4)) {
			copy = "szklanek";
		} else if (item.value == 1) {
			copy = "szklanka";
		} else {
			copy = "szklanki";
		}

		list.innerHTML += `<li class="history__item">${
			item.key
		} - <span class="history__span">${item.value} ${copy} ${
			item.value > 7 ? "✔️" : ""
		}</span></li>`;
	});
}