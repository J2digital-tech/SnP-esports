(function () {
  "use strict";

  var league = document.body.getAttribute("data-league");
  var tournamentsEl = document.getElementById("league-tournaments");
  var matchesEl = document.getElementById("league-matches");
  var standingsEl = document.getElementById("league-standings");
  var statusEl = document.getElementById("league-status");

  if (!league || !window.BattleFlyApi || !tournamentsEl) return;

  function renderList(el, rows, mapRow) {
    if (!rows.length) {
      el.innerHTML = '<li class="platform-row"><span>No records yet.</span></li>';
      return;
    }
    el.innerHTML = rows.map(mapRow).join("");
  }

  Promise.all([
    window.BattleFlyApi.getTournaments(league),
    window.BattleFlyApi.getStandings({ league: league })
  ])
    .then(function (data) {
      var tournaments = data[0];
      var standings = data[1];
      var firstTournament = tournaments[0];
      renderList(tournamentsEl, tournaments, function (t) {
        return (
          '<li class="platform-row"><b>' +
          t.name +
          "</b><span>" +
          t.format +
          " • " +
          t.status +
          " • " +
          new Date(t.startsAt).toLocaleString() +
          "</span></li>"
        );
      });
      renderList(standingsEl, standings, function (s, i) {
        return (
          '<li class="platform-row"><b>#' +
          (i + 1) +
          " " +
          s.team +
          "</b><span>" +
          s.points +
          " pts • W:" +
          s.wins +
          " L:" +
          s.losses +
          "</span></li>"
        );
      });

      if (!firstTournament) {
        statusEl.textContent = "No tournaments found for this league.";
        renderList(matchesEl, [], function () {
          return "";
        });
        return;
      }

      statusEl.textContent = "Live data loaded for " + firstTournament.name + ".";
      return window.BattleFlyApi.getMatches(firstTournament.id).then(function (matches) {
        renderList(matchesEl, matches, function (m) {
          return (
            '<li class="platform-row"><b>' +
            m.homeTeam +
            " vs " +
            m.awayTeam +
            "</b><span>" +
            m.status +
            " • " +
            new Date(m.scheduledAt).toLocaleString() +
            "</span></li>"
          );
        });
      });
    })
    .catch(function (err) {
      statusEl.textContent = err.message;
    });
})();
