// ==UserScript==
// @name     Block YouTube
// @version  1
// @icon     https://duckduckgo.com/assets/icons/favicons/youtube.png
// @match    *://www.youtube.com/*
// @grant    none
// ==/UserScript==

var imageURL = window.location.toString();

window.addEventListener('load', function() {
  if (!window.location.href.includes("noYouTube4u")) {
    window.location.href = "noYouTube4u";
  }
	}, false);
