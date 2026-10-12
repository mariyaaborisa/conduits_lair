/*
  Cyborg Commons - shared script
  1. Marks the current page in the header nav.
  2. Fills in the footer year.
  3. Hides the "sign-up coming soon" note once something is embedded in #signup-embed.
  No tracking, no network requests.
*/
(function () {
  "use strict";

  // Turn "/session.html", "/session", or "session.html" into "session".
  function pageName(path) {
    var name = String(path || "")
      .split("#")[0]
      .split("?")[0]
      .replace(/\.html$/, "")
      .replace(/\/+$/, "")
      .split("/")
      .pop();
    return name || "index";
  }

  // 1. Current page in the nav
  var current = pageName(window.location.pathname);
  var links = document.querySelectorAll(".top nav a");
  Array.prototype.forEach.call(links, function (link) {
    if (pageName(link.getAttribute("href")) === current) {
      link.setAttribute("aria-current", "page");
    }
  });

  // 2. Footer year
  var years = document.querySelectorAll("[data-year]");
  var year = String(new Date().getFullYear());
  Array.prototype.forEach.call(years, function (el) {
    el.textContent = year;
  });

  // 3. Sign-up slot: hide the fallback note when an embed is present
  var slot = document.getElementById("signup-embed");
  var fallback = document.querySelector("[data-signup-fallback]");
  if (slot && fallback && slot.children.length > 0) {
    fallback.hidden = true;
  }
})();
