// ==UserScript==
// @name        Blue HN Logo
// @namespace   don't know what to put there
// @description My script description
// @include     https://news.ycombinator.com/*
// @version     1
// @grant       none
// @icon			  https://raw.githubusercontent.com/Besnn/bookmarklets/master/assets/y18.png
// @run-at      document-start
// ==/UserScript==

let lookup_table = {
	'https://news.ycombinator.com/y18.gif': 'https://raw.githubusercontent.com/Besnn/bookmarklets/master/assets/y18.png',
};

for (let image of document.getElementsByTagName('img')) {
	for (let query in lookup_table) {
		if (image.src == query) {
			image.src = lookup_table[query];
		}
	}
}
