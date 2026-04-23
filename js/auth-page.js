(function () {
  "use strict";

  var mode = document.body.getAttribute("data-auth-mode");
  var form = document.getElementById("auth-form");
  var msg = document.getElementById("auth-msg");
  var params = new URLSearchParams(window.location.search);
  var next = params.get("next") || "organize-tournaments.html";

  if (!mode || !form || !window.BattleFlyApi) return;

  function setMsg(text, tone) {
    msg.textContent = text || "";
    msg.className = "platform-msg" + (tone ? " " + tone : "");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = form.elements.namedItem("email").value.trim();
    var displayField = form.elements.namedItem("displayName");
    var displayName = displayField ? displayField.value.trim() : "";
    var password = form.elements.namedItem("password").value;
    if (!email || !password) {
      setMsg("Email and password are required.", "err");
      return;
    }

    if (mode === "signup") {
      window.BattleFlyApi.register({ displayName: displayName || "Player", email: email, password: password })
        .then(function (resp) {
          localStorage.setItem("bfUser", JSON.stringify(resp.user));
          localStorage.setItem(window.BattleFlyApi.TOKEN_KEY, resp.token);
          setMsg("Account created. Redirecting...", "ok");
          setTimeout(function () {
            window.location.href = next;
          }, 900);
        })
        .catch(function (err) {
          setMsg(err.message, "err");
        });
      return;
    }

    window.BattleFlyApi.login({ email: email, password: password })
      .then(function (resp) {
        localStorage.setItem("bfUser", JSON.stringify(resp.user));
        localStorage.setItem(window.BattleFlyApi.TOKEN_KEY, resp.token);
        setMsg("Logged in. Redirecting...", "ok");
        setTimeout(function () {
          window.location.href = next;
        }, 900);
      })
      .catch(function (err) {
        setMsg(err.message + ". Try signing up first.", "err");
      });
  });
})();
