// ==UserScript==
// @name     Crisp Bitmaps
// @version  1
// @grant    none
// @author   le me
// ==/UserScript==

css = document.createElement("style");
css.innerText = "img { image-rendering: crisp-edges !important; }";
document.head.appendChild(css);
