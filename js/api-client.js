(function () {
  "use strict";

  var API_BASE = window.location.origin + "/api";
  var TOKEN_KEY = "bfToken";

  function getToken() {
    return localStorage.getItem(TOKEN_KEY) || "";
  }

  function withAuthHeaders(options) {
    var next = options || {};
    var headers = Object.assign({}, next.headers || {});
    var token = getToken();
    if (token) headers.Authorization = "Bearer " + token;
    next.headers = headers;
    return next;
  }

  function request(path, options) {
    return fetch(API_BASE + path, withAuthHeaders(options)).then(function (res) {
      if (!res.ok) {
        return res.json().catch(function () {
          return { error: "Request failed" };
        }).then(function (err) {
          throw new Error(err.error || "Request failed");
        });
      }
      return res.json();
    });
  }

  window.BattleFlyApi = {
    TOKEN_KEY: TOKEN_KEY,
    getTournaments: function (league) {
      var q = league ? "?league=" + encodeURIComponent(league) : "";
      return request("/tournaments" + q);
    },
    createTournament: function (payload) {
      return request("/tournaments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    },
    getMatches: function (tournamentId) {
      var q = tournamentId ? "?tournamentId=" + encodeURIComponent(tournamentId) : "";
      return request("/matches" + q);
    },
    createMatch: function (payload) {
      return request("/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    },
    reportScore: function (matchId, payload) {
      return request("/matches/" + encodeURIComponent(matchId) + "/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    },
    generateBracket: function (payload) {
      return request("/brackets/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    },
    getStandings: function (opts) {
      var params = new URLSearchParams();
      if (opts && opts.league) params.set("league", opts.league);
      if (opts && opts.tournamentId) params.set("tournamentId", opts.tournamentId);
      var q = params.toString() ? "?" + params.toString() : "";
      return request("/standings" + q);
    },
    register: function (payload) {
      return request("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    },
    login: function (payload) {
      return request("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    }
  };
})();
