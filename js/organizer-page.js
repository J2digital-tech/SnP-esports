(function () {
  "use strict";

  var formTournament = document.getElementById("create-tournament-form");
  var formMatch = document.getElementById("create-match-form");
  var tournamentsEl = document.getElementById("tournament-list");
  var matchesEl = document.getElementById("match-list");
  var standingsEl = document.getElementById("standings-list");
  var tournamentSelect = document.getElementById("match-tournament-id");
  var scoreForm = document.getElementById("score-match-form");
  var scoreMatchSelect = document.getElementById("score-match-id");
  var bracketBtn = document.getElementById("generate-bracket-btn");
  var msg = document.getElementById("organizer-msg");
  var activeTournamentId = null;

  if (!formTournament || !window.BattleFlyApi) return;

  function setMsg(text, tone) {
    msg.textContent = text || "";
    msg.className = "platform-msg" + (tone ? " " + tone : "");
  }

  function renderTournaments(rows) {
    tournamentsEl.innerHTML = rows
      .map(function (t) {
        return (
          '<li class="platform-row"><b>' +
          t.name +
          "</b><span>" +
          t.league +
          " • " +
          t.status +
          " • " +
          new Date(t.startsAt).toLocaleString() +
          "</span></li>"
        );
      })
      .join("");

    tournamentSelect.innerHTML = rows
      .map(function (t) {
        return '<option value="' + t.id + '">' + t.name + "</option>";
      })
      .join("");
  }

  function renderMatches(rows) {
    scoreMatchSelect.innerHTML = rows
      .filter(function (m) {
        return m.status !== "completed";
      })
      .map(function (m) {
        return '<option value="' + m.id + '">' + m.homeTeam + " vs " + m.awayTeam + " (" + m.status + ")" + "</option>";
      })
      .join("");

    matchesEl.innerHTML = rows
      .map(function (m) {
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
      })
      .join("");
  }

  function renderStandings(rows) {
    if (!rows.length) {
      standingsEl.innerHTML = '<li class="platform-row"><span>No completed matches yet.</span></li>';
      return;
    }
    standingsEl.innerHTML = rows
      .map(function (r, i) {
        return (
          '<li class="platform-row"><b>#' +
          (i + 1) +
          " " +
          r.team +
          "</b><span>" +
          r.points +
          " pts • W:" +
          r.wins +
          " L:" +
          r.losses +
          " • P:" +
          r.played +
          "</span></li>"
        );
      })
      .join("");
  }

  function refresh() {
    return window.BattleFlyApi.getTournaments().then(function (tournaments) {
      renderTournaments(tournaments);
      activeTournamentId = tournaments[0] && tournaments[0].id;
      return Promise.all([
        window.BattleFlyApi.getMatches(activeTournamentId),
        window.BattleFlyApi.getStandings({ tournamentId: activeTournamentId })
      ]).then(function (data) {
        renderMatches(data[0]);
        renderStandings(data[1]);
      });
    });
  }

  formTournament.addEventListener("submit", function (e) {
    e.preventDefault();
    var tName = formTournament.elements.namedItem("name").value.trim();
    var tLeague = formTournament.elements.namedItem("league").value;
    var tFormat = formTournament.elements.namedItem("format").value.trim();
    var tStartsAt = formTournament.elements.namedItem("startsAt").value;
    var payload = {
      name: tName,
      league: tLeague,
      format: tFormat,
      startsAt: tStartsAt ? new Date(tStartsAt).toISOString() : undefined
    };
    window.BattleFlyApi.createTournament(payload)
      .then(function () {
        formTournament.reset();
        setMsg("Tournament created.", "ok");
        return refresh();
      })
      .catch(function (err) {
        setMsg(err.message, "err");
      });
  });

  formMatch.addEventListener("submit", function (e) {
    e.preventDefault();
    var mTournamentId = formMatch.elements.namedItem("tournamentId").value;
    var mHomeTeam = formMatch.elements.namedItem("homeTeam").value.trim();
    var mAwayTeam = formMatch.elements.namedItem("awayTeam").value.trim();
    var mScheduledAt = formMatch.elements.namedItem("scheduledAt").value;
    var payload = {
      tournamentId: mTournamentId,
      homeTeam: mHomeTeam,
      awayTeam: mAwayTeam,
      scheduledAt: mScheduledAt ? new Date(mScheduledAt).toISOString() : undefined
    };
    window.BattleFlyApi.createMatch(payload)
      .then(function () {
        formMatch.reset();
        setMsg("Match scheduled.", "ok");
        return refresh();
      })
      .catch(function (err) {
        setMsg(err.message, "err");
      });
  });

  if (scoreForm) {
    scoreForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var matchId = scoreForm.elements.namedItem("matchId").value;
      var homeScore = Number(scoreForm.elements.namedItem("homeScore").value);
      var awayScore = Number(scoreForm.elements.namedItem("awayScore").value);
      window.BattleFlyApi.reportScore(matchId, { homeScore: homeScore, awayScore: awayScore })
        .then(function () {
          scoreForm.reset();
          setMsg("Score submitted. Standings updated.", "ok");
          return refresh();
        })
        .catch(function (err) {
          setMsg(err.message, "err");
        });
    });
  }

  if (bracketBtn) {
    bracketBtn.addEventListener("click", function () {
      if (!activeTournamentId) {
        setMsg("No tournament available for bracket generation.", "err");
        return;
      }
      window.BattleFlyApi.generateBracket({ tournamentId: activeTournamentId })
        .then(function (result) {
          setMsg("Bracket generated: " + result.createdCount + " round-1 matches.", "ok");
          return refresh();
        })
        .catch(function (err) {
          setMsg(err.message, "err");
        });
    });
  }

  refresh().catch(function (err) {
    setMsg(err.message, "err");
  });
})();
