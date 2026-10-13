/*
  Cyborg Commons - shared script
  1. Marks the current page in the header nav.
  2. Fills in the footer year.
  3. Runs any countdown (data-countdown="YYYY-MM-DDTHH:MM:SS", viewer's local time).
  4. Hides the "sign-up coming soon" note once something is embedded in #signup-embed.
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

  // 3. Countdown
  Array.prototype.forEach.call(document.querySelectorAll("[data-countdown]"), function (box) {
    var target = new Date(box.getAttribute("data-countdown")).getTime();
    var label = box.querySelector("[data-cd-label]");
    var timer = box.querySelector(".cd");
    var parts = {};
    Array.prototype.forEach.call(box.querySelectorAll("[data-cd]"), function (el) {
      parts[el.getAttribute("data-cd")] = el;
    });
    if (isNaN(target)) { box.hidden = true; return; }
    var id;
    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        if (label) label.textContent = "The session date has arrived";
        if (timer) timer.hidden = true;
        if (id) clearInterval(id);
        return;
      }
      var s = Math.floor(diff / 1000);
      parts.d.textContent = Math.floor(s / 86400);
      parts.h.textContent = Math.floor((s % 86400) / 3600);
      parts.m.textContent = Math.floor((s % 3600) / 60);
      parts.s.textContent = s % 60;
    }
    tick();
    id = setInterval(tick, 1000);
  });

  // 4. Sign-up slot: hide the fallback note when an embed is present
  var slot = document.getElementById("signup-embed");
  var fallback = document.querySelector("[data-signup-fallback]");
  if (slot && fallback && slot.children.length > 0) {
    fallback.hidden = true;
  }
})();
