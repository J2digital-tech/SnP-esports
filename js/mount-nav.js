(function () {
  "use strict";

  var active = document.body.getAttribute("data-nav-active") || "home";

  document.body.classList.add("has-rail", "has-drawer-nav");

  var rail = document.createElement("aside");
  rail.className = "nav-rail nav-rail--drawer nav-rail--collapsed";
  rail.setAttribute("aria-label", "Primary navigation");

  rail.innerHTML =
    '<div class="nav-rail__brand">' +
    '<a class="nav-rail__logo" href="index.html"><span class="nav-rail__logo-mark" aria-hidden="true">◆</span><span class="nav-rail__logo-text">SnP eSport Battlefield</span></a>' +
    "</div>" +
    '<nav class="nav-rail__menu nav-rail__scroll" id="nav-rail-menu" aria-label="Sections">' +
    '<div class="nav-rail__section">' +
    '<a class="nav-rail__link" data-nav-item="home" href="index.html">' +
    '<span class="nav-rail__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 10v10h14V10"/></svg></span>' +
    '<span class="nav-rail__label">Home</span></a>' +
    '<a class="nav-rail__link" data-nav-item="armoury" href="armoury.html">' +
    '<span class="nav-rail__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 3l8 5v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V8l8-5z"/></svg></span>' +
    '<span class="nav-rail__label">Armoury</span></a>' +
    '<a class="nav-rail__link" data-nav-item="organize" href="organize-tournaments.html">' +
    '<span class="nav-rail__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v2l6 4 6-4V8M12 12v6"/></svg></span>' +
    '<span class="nav-rail__label">Organize Tournaments</span></a>' +
    "</div>" +
    '<div class="nav-rail__divider" role="presentation"></div>' +
    '<div class="nav-rail__section">' +
    '<a class="nav-rail__link nav-rail__link--league" data-nav-item="splatoon" href="splatoon3-north-american-league-2026.html">' +
    '<span class="nav-rail__icon nav-rail__icon--vs" aria-hidden="true">VS</span>' +
    '<span class="nav-rail__label">Splatoon 3 North American League 2026</span></a>' +
    '<a class="nav-rail__link nav-rail__link--league" data-nav-item="apex" href="apex-legends-global-series.html">' +
    '<span class="nav-rail__icon nav-rail__icon--apex" aria-hidden="true">A</span>' +
    '<span class="nav-rail__label">Apex Legends Global Series</span></a>' +
    '<a class="nav-rail__link nav-rail__link--league" data-nav-item="valorant" href="valorant-champions-tour.html">' +
    '<span class="nav-rail__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l5 12M20 6l-5 12"/><path d="M10 6h4"/></svg></span>' +
    '<span class="nav-rail__label">Valorant Champions Tour</span></a>' +
    '<a class="nav-rail__link nav-rail__link--league" data-nav-item="fortnite" href="fortnite-championship-series.html">' +
    '<span class="nav-rail__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.8 5.6L21 9.4l-4.5 4.2 1.1 6.1L12 16.9l-5.6 2.8 1.1-6.1L3 9.4l6.2-.8L12 3z"/></svg></span>' +
    '<span class="nav-rail__label">Fortnite Championship Series</span></a>' +
    '<a class="nav-rail__link nav-rail__link--league" data-nav-item="cod" href="call-of-duty-league.html">' +
    '<span class="nav-rail__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17l5-10 6 4 5-4-5 10-6-4-5 4z"/></svg></span>' +
    '<span class="nav-rail__label">Call of Duty League</span></a>' +
    '<a class="nav-rail__link nav-rail__link--league" data-nav-item="cs2" href="counter-strike-2-pro-league.html">' +
    '<span class="nav-rail__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h8M12 12l3-3M12 12l3 3"/><path d="M17 6h3v12h-3"/></svg></span>' +
    '<span class="nav-rail__label">Counter-Strike 2 Pro League</span></a>' +
    "</div>" +
    '<div class="nav-rail__divider" role="presentation"></div>' +
    '<div class="nav-rail__section">' +
    '<a class="nav-rail__link" data-nav-item="help" href="help-center.html">' +
    '<span class="nav-rail__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 114.2 2.5c-.6.5-1.2 1-1.2 2.2V15"/></svg></span>' +
    '<span class="nav-rail__label">Help Center</span></a>' +
    "</div>" +
    '<div class="nav-rail__divider" role="presentation"></div>' +
    '<div class="nav-rail__section nav-rail__section--lang">' +
    '<details class="nav-rail__lang">' +
    "<summary>English <span class=\"nav-rail__chev\" aria-hidden=\"true\"></span></summary>" +
    '<ul class="nav-rail__lang-list">' +
    "<li><button type=\"button\" class=\"nav-rail__lang-opt is-current\" disabled>English</button></li>" +
    "<li><button type=\"button\" class=\"nav-rail__lang-opt\">Español</button></li>" +
    "<li><button type=\"button\" class=\"nav-rail__lang-opt\">Français</button></li>" +
    "</ul></details></div>" +
    '<div class="nav-rail__divider" role="presentation"></div>' +
    '<div class="nav-rail__section nav-rail__section--account">' +
    '<a class="nav-rail__link" data-nav-item="login" href="login.html">' +
    '<span class="nav-rail__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M15 3h4v18h-4"/><path d="M8 12h11"/><path d="M5 12l3-3m-3 3l3 3"/></svg></span>' +
    '<span class="nav-rail__label">Login</span></a>' +
    '<a class="nav-rail__link" data-nav-item="signup" href="signup.html">' +
    '<span class="nav-rail__icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a5 5 0 015-5h2a5 5 0 015 5v1"/><path d="M18 8v6M15 11h6"/></svg></span>' +
    '<span class="nav-rail__label">Sign Up</span></a>' +
    "</div></nav>";

  document.body.insertBefore(rail, document.body.firstChild);

  var link = rail.querySelector('[data-nav-item="' + active + '"]');
  if (link) link.classList.add("nav-rail__link--active");
  var menuToggle = document.createElement("button");
  menuToggle.className = "nav-rail__hamburger nav-drawer-trigger";
  menuToggle.type = "button";
  menuToggle.setAttribute("aria-label", "Open menu");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-controls", "nav-rail-menu");
  menuToggle.innerHTML =
    '<span class="nav-rail__hamburger-line" aria-hidden="true"></span>' +
    '<span class="nav-rail__hamburger-line" aria-hidden="true"></span>' +
    '<span class="nav-rail__hamburger-line" aria-hidden="true"></span>';

  var topbarInner = document.querySelector(".page-topbar__inner");
  if (topbarInner) topbarInner.insertBefore(menuToggle, topbarInner.firstChild);
  else document.body.appendChild(menuToggle);

  var backdrop = document.createElement("button");
  backdrop.className = "nav-rail-backdrop";
  backdrop.type = "button";
  backdrop.setAttribute("aria-label", "Close menu");
  document.body.appendChild(backdrop);

  function setMenuOpen(open) {
    if (open) {
      rail.classList.remove("nav-rail--collapsed");
      document.body.classList.add("nav-drawer-open");
      menuToggle.setAttribute("aria-expanded", "true");
      return;
    }
    rail.classList.add("nav-rail--collapsed");
    document.body.classList.remove("nav-drawer-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuToggle.addEventListener("click", function () {
    var shouldOpen = rail.classList.contains("nav-rail--collapsed");
    setMenuOpen(shouldOpen);
  });

  backdrop.addEventListener("click", function () {
    setMenuOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenuOpen(false);
  });

  rail.addEventListener("click", function (e) {
    var navLink = e.target.closest(".nav-rail__link");
    if (navLink) {
      setMenuOpen(false);
    }
    var btn = e.target.closest(".nav-rail__lang-opt");
    if (!btn || btn.disabled) return;
    var list = rail.querySelectorAll(".nav-rail__lang-opt");
    for (var i = 0; i < list.length; i++) {
      list[i].classList.remove("is-current");
      list[i].disabled = false;
    }
    btn.classList.add("is-current");
    btn.disabled = true;
    var sum = rail.querySelector(".nav-rail__lang summary");
    if (sum) {
      var text = btn.textContent.trim();
      var tn = sum.childNodes[0];
      if (tn && tn.nodeType === 3) tn.textContent = text + " ";
      else sum.insertBefore(document.createTextNode(text + " "), sum.firstChild);
    }
    var det = rail.querySelector(".nav-rail__lang");
    if (det) det.removeAttribute("open");
  });
})();
