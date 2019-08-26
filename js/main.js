!function(t){var e={};function n(c){if(e[c])return e[c].exports;var l=e[c]={i:c,l:!1,exports:{}};return t[c].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,c){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(c,l,function(e){return t[e]}.bind(null,l));return c},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\n\n// service worker registration - remove if you\'re not going to use it\n\nif (\'serviceWorker\' in navigator) {\n  window.addEventListener(\'load\', function () {\n    navigator.serviceWorker.register(\'serviceworker.js\').then(function (registration) {\n      // Registration was successful\n      console.log(\'ServiceWorker registration successful with scope: \', registration.scope);\n    }, function (err) {\n      // registration failed :(\n      console.log(\'ServiceWorker registration failed: \', err);\n    });\n  });\n}\n\nconst buttonAdd = document.querySelector(".button-add--js");\nconst buttonRemove = document.querySelector(".button-remove--js");\nconst value = document.querySelector(".counter__value--js");\nconst history = document.querySelector(".history--js");\nconst list = document.querySelector(".history__list--js");\nconst key = new Date().toISOString().slice(0, 10);\nconst glassesHistory = [];\n\nif (!localStorage.getItem(key)) {\n\tlocalStorage.setItem(key, 0);\n\tvalue.innerHTML = "0";\n} else {\n\tvalue.innerHTML = localStorage.getItem(key);\n}\n\nbuttonAdd.addEventListener("click", e => {\n\tlocalStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);\n\tvalue.innerHTML = localStorage.getItem(key);\n\trefreshHistory();\n});\n\nbuttonRemove.addEventListener("click", e => {\n\tconst currentValue = parseInt(localStorage.getItem(key));\n\tif (currentValue > 0) {\n\t\tlocalStorage.setItem(key, localStorage.getItem(key) - 1);\n\t\tvalue.innerHTML = localStorage.getItem(key);\n\t}\n\trefreshHistory();\n});\n\nfunction refreshHistory(){\n\thistory.classList.toggle("history--js-active");\n\n\tlist.innerHTML = "Historia: ";\n\tglassesHistory.length = 0;\n\n\tfor (let i = 0; i < localStorage.length; i++) {\n\t\tif (localStorage.key(i)[0] == 2) {\n\t\t\tglassesHistory[i] = {\n\t\t\t\tkey: localStorage.key(i),\n\t\t\t\tvalue: localStorage.getItem(localStorage.key(i))\n\t\t\t};\n\t\t}\n\t}\n\n\tglassesHistory.sort((a, b) => {\n\t\tif (a.key < b.key) {\n\t\t\treturn 1;\n\t\t} else {\n\t\t\treturn -1;\n\t\t}\n\t});\n\n\tglassesHistory.forEach(item => {\n\t\tlet copy;\n\t\tif ((item.value == 0) | (item.value > 4)) {\n\t\t\tcopy = "szklanek";\n\t\t} else if (item.value == 1) {\n\t\t\tcopy = "szklanka";\n\t\t} else {\n\t\t\tcopy = "szklanki";\n\t\t}\n\n\t\tlist.innerHTML += `<li class="history__item">${\n\t\t\titem.key\n\t\t} - <span class="history__span">${item.value} ${copy} ${\n\t\t\titem.value > 7 ? "✔️" : ""\n\t\t}</span></li>`;\n\t});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxpQ0FBaUMsV0FBVyxHQUFHLEtBQUs7QUFDdkQ7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLWFkZC0tanNcIik7XG5jb25zdCBidXR0b25SZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1yZW1vdmUtLWpzXCIpO1xuY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50ZXJfX3ZhbHVlLS1qc1wiKTtcbmNvbnN0IGhpc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnktLWpzXCIpO1xuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeV9fbGlzdC0tanNcIik7XG5jb25zdCBrZXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuY29uc3QgZ2xhc3Nlc0hpc3RvcnkgPSBbXTtcblxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgMCk7XG5cdHZhbHVlLmlubmVySFRNTCA9IFwiMFwiO1xufSBlbHNlIHtcblx0dmFsdWUuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn1cblxuYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSArIDEpO1xuXHR2YWx1ZS5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXHRyZWZyZXNoSGlzdG9yeSgpO1xufSk7XG5cbmJ1dHRvblJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXHRpZiAoY3VycmVudFZhbHVlID4gMCkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAtIDEpO1xuXHRcdHZhbHVlLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cdH1cblx0cmVmcmVzaEhpc3RvcnkoKTtcbn0pO1xuXG5mdW5jdGlvbiByZWZyZXNoSGlzdG9yeSgpe1xuXHRoaXN0b3J5LmNsYXNzTGlzdC50b2dnbGUoXCJoaXN0b3J5LS1qcy1hY3RpdmVcIik7XG5cblx0bGlzdC5pbm5lckhUTUwgPSBcIkhpc3RvcmlhOiBcIjtcblx0Z2xhc3Nlc0hpc3RvcnkubGVuZ3RoID0gMDtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuXHRcdGlmIChsb2NhbFN0b3JhZ2Uua2V5KGkpWzBdID09IDIpIHtcblx0XHRcdGdsYXNzZXNIaXN0b3J5W2ldID0ge1xuXHRcdFx0XHRrZXk6IGxvY2FsU3RvcmFnZS5rZXkoaSksXG5cdFx0XHRcdHZhbHVlOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRnbGFzc2VzSGlzdG9yeS5zb3J0KChhLCBiKSA9PiB7XG5cdFx0aWYgKGEua2V5IDwgYi5rZXkpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHR9KTtcblxuXHRnbGFzc2VzSGlzdG9yeS5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdGxldCBjb3B5O1xuXHRcdGlmICgoaXRlbS52YWx1ZSA9PSAwKSB8IChpdGVtLnZhbHVlID4gNCkpIHtcblx0XHRcdGNvcHkgPSBcInN6a2xhbmVrXCI7XG5cdFx0fSBlbHNlIGlmIChpdGVtLnZhbHVlID09IDEpIHtcblx0XHRcdGNvcHkgPSBcInN6a2xhbmthXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvcHkgPSBcInN6a2xhbmtpXCI7XG5cdFx0fVxuXG5cdFx0bGlzdC5pbm5lckhUTUwgKz0gYDxsaSBjbGFzcz1cImhpc3RvcnlfX2l0ZW1cIj4ke1xuXHRcdFx0aXRlbS5rZXlcblx0XHR9IC0gPHNwYW4gY2xhc3M9XCJoaXN0b3J5X19zcGFuXCI+JHtpdGVtLnZhbHVlfSAke2NvcHl9ICR7XG5cdFx0XHRpdGVtLnZhbHVlID4gNyA/IFwi4pyU77iPXCIgOiBcIlwiXG5cdFx0fTwvc3Bhbj48L2xpPmA7XG5cdH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')}]);