(()=>{var t;t=document.querySelectorAll(".js-tabs"),Array.from(t,(function(t){var e=t.querySelectorAll(".js-tab__link"),a=t.querySelector(".js-tab__link.is-active"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;a=e||a,e.classList.toggle("is-active");var i=e.dataset.index;t.querySelector(".js-tabarea[data-index=".concat(i,"]")).classList.toggle("is-active")};a||i(e[0]),e.forEach((function(t){t.addEventListener("click",(function(t){a!==this&&(a&&i(),i(this))}))}))}))})();