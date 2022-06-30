// ==UserScript==
// @name         Aggregator Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @icon				 https://news.ycombinator.com/y18.gif
// @description  Simple Dark Mode Stylesheet for HN.
// @match        https://news.ycombinator.com/* 
// @match				 https://lobste.rs/*
// @match				 https://lemmy.ml/*
// @grant        All
// ==/UserScript==

(function() {
    'use strict';
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = (function EOF(){ /*!<<<EOF
body  { font-family:Verdana, Geneva, sans-serif; font-size:10pt; color:#999999; background-color: #000001;
background-image: url("https://raw.githubusercontent.com/Besnn/userscripts/master/assets/stars.gif") }
#hnmain { background-color: rgba(0, 0, 0, 0); }
.admin td   { font-family:Verdana, Geneva, sans-serif; font-size:8.5pt; color:#000000; }
textarea { font-family:monospace; font-size:10pt; background: #9090A0; color: #111111; }
a:link    { color:#CCCCCC; text-decoration:underline; }
a:visited { color:#9999ca; text-decoration:underline; }
.pagetop { font-family:Verdana, Geneva, sans-serif; font-size: 10pt; color:#cccccc; }
.c00, .c00 a:link { color:#DDDDDD; }
.pagetop a:visited { color:#000000;}
.topsel a:link, .topsel a:visited { color:#ffffff; }
EOF
*/
    }).toString().split("EOF")[2]
    .replace(/\$\{([^}]+)\}/g, function(outer, inner, pos) {
        return this[inner];
    });
    document.getElementsByTagName('head')[0].appendChild(style);
})();
