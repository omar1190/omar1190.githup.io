document.querySelectorAll(".c-banner__close").forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.parentNode;t.classList.add("collapse"),t.addEventListener("transitionend",(function(e){e.target===this&&this.remove()}))}))}));