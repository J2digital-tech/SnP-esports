(function () {
  "use strict";

  if (!document.body.hasAttribute("data-protected")) return;

  var raw = localStorage.getItem("bfUser");
  var token = localStorage.getItem("bfToken");
  if (!raw || !token) {
    var next = encodeURIComponent(window.location.pathname.replace(/^\//, ""));
    window.location.href = "login.html?next=" + next;
    return;
  }

  try {
    JSON.parse(raw);
  } catch (_err) {
    localStorage.removeItem("bfUser");
    localStorage.removeItem("bfToken");
    window.location.href = "login.html";
  }
})();
