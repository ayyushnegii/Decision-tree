// Decision Tree Explorer - app.js
// 4 views: tree, explorer, svg, stats

var T = TREE_DATA;
var cur = "start";
var path = ["start"];

// Update stats counters
(function() {
  cn = Object.keys(T);
  var chN = cn.filter(function(k){return T[k].c && T[k].c.length > 0;});
  var oN = cn.filter(function(k){return T[k].isOutcome;});
  var sn = document.getElementById("sn");
  var sc = document.getElementById("sc");
  var so = document.getElementById("so");
  if (sn) sn.textContent = cn.length;
  if (sc) sc.textContent = chN.length;
  if (so) so.textContent = oN.length;
})();

var colors = {
  "Low": "#10b981",
  "Medium": "#f97316",
  "High": "#ef4444",
  "V.High": "#dc2626"
};

var streamColors = {
  "Science": "#22d3ee",
  "Commerce": "#10b981",
  "Arts": "#8b5cf6",
  "Any": "#f97316"
};

function getNodeColor(id, node) {
  if (node.isOutcome) return "#eab308";
  if (id.startsWith("oc_") || id.startsWith("c") || id.startsWith("oc_")) return "#10b981";
  if (id.startsWith("oa_") || id.startsWith("a")) return "#8b5cf6";
  if (id.startsWith("os_") || id.startsWith("s") || id.startsWith("sc") || id.startsWith("pc")) return "#22d3ee";
  if (id.startsWith("ou_") || id.startsWith("cb_") || id === "up" || id === "cb") return "#f97316";
  if (node.str === "sci") return "#22d3ee";
  if (id === "ss" || id === "start" || id === "sc" || id === "sp" || id === "pcm" || id === "pcb") return "#3b82f6";
  return "#3b82f6";
}

function show(v) {
  ["tree", "explorer", "svg", "stats"].forEach(function(x) {
    document.getElementById("v-" + x).style.display = x === v ? "block" : "none";
  });
  document.querySelectorAll(".controls button").forEach(function(b, i) {
    b.classList.toggle("active", ["tree", "explorer", "svg", "stats"][i] === v);
  });
  if (v === "tree") renderTree();
  if (v === "explorer") renderExp();
  if (v === "svg") renderSVG();
  if (v === "stats") renderStats();
}

/* ============ TREE VIEW ============ */
function renderTree() {
  var c = document.getElementById("tc");
  c.innerHTML = "";
  var V = new Set(), L = {}, Q = [{id: "start", lv: 0}];
  while (Q.length) {
    var item = Q.shift();
    var id = item.id, lv = item.lv;
    if (V.has(id)) continue;
    V.add(id);
    if (!L[lv]) L[lv] = [];
    L[lv].push(id);
    var n = T[id];
    if (n && n.c) {
      n.c.forEach(function(ch) {
        if (ch.n && T[ch.n] && !V.has(ch.n)) {
          var nl = T[ch.n].l !== undefined ? T[ch.n].l : lv + 1;
          Q.push({id: ch.n, lv: nl});
        }
      });
    }
  }
  var mx = Math.max.apply(null, Object.keys(L).map(Number));
  for (var l = 0; l <= mx; l++) {
    var row = document.createElement("div");
    row.className = "level-row";
    var nw = document.createElement("div");
    nw.style.cssText = "display:flex;gap:10px;flex-wrap:wrap;justify-content:center";
    (L[l] || []).forEach(function(id) {
      var n = T[id];
      if (!n) return;
      var el = document.createElement("div");
      var cl = "node";
      if (n.isOutcome) cl += " is-outcome";
      else if (n.str === "sci") cl += " stream-science";
      else if (id.startsWith("oc_") || id === "cp" || id === "c1" || id === "c3" || id === "c4" || id === "c5" || id === "c6" || id === "c7" || id === "c8" || id === "c6p" || id === "c6b" || id === "c6f" || id === "c7s" || id === "c7w") cl += " stream-commerce";
      else if (id.startsWith("oa_") || id === "ap" || id === "a1" || id === "a2" || id === "a3" || id === "a4" || id === "a5" || id === "a6") cl += " stream-arts";
      else if (id.startsWith("ou_") || id.startsWith("cb_") || id === "up" || id === "cb") cl += " stream-universal";
      el.className = cl;
      var h = "";
      if (n.tag) h += '<div class="node-tag">' + n.tag + '</div>';
      h += '<div class="node-title">' + n.title + '</div>';
      if (n.st) h += '<div class="node-tagline">' + n.st.substring(0, 60) + '</div>';
      if (n.c) h += '<div class="node-tagline" style="margin-top:4px;color:var(--neon-cyan)">' + n.c.length + ' choices</div>';
      if (n.isOutcome && n.outcome) h += '<div class="node-tagline" style="margin-top:4px;color:var(--neon-yellow)">' + n.outcome.sal + '</div>';
      el.innerHTML = h;
      (function(iid) { el.onclick = function() { sel(iid); show("explorer"); }; })(id);
      nw.appendChild(el);
    });
    row.appendChild(nw);
    c.appendChild(row);
    if (l < mx) {
      var co = document.createElement("div");
      co.style.cssText = "height:8px;background:linear-gradient(to bottom,var(--border),transparent)";
      c.appendChild(co);
    }
  }
}

/* ============ EXPLORER VIEW ============ */
function sel(id) {
  cur = id;
  if (path.indexOf(id) === -1) path.push(id);
  renderExp();
}

function renderExp() {
  var pt = document.getElementById("pt");
  var cg = document.getElementById("cg");
  var nd = document.getElementById("nd");
  var dp = document.getElementById("dp");
  var n = T[cur];
  if (!n) return;

  // Path trail
  pt.innerHTML = path.map(function(id, i) {
    var nn = T[id];
    var la = i === path.length - 1 ? " last" : "";
    return '<span class="path-node' + la + '" onclick="cur=\'' + id + '\';renderExp();return false;">' + (nn ? nn.title.substring(0, 35) : id) + '</span>' +
      (i < path.length - 1 ? '<span class="path-arrow">→</span>' : '');
  }).join("");

  // Choices
  if (n.c && n.c.length > 0) {
    cg.innerHTML = n.c.map(function(ch) {
      var tgt = T[ch.n];
      var hi = tgt && tgt.isOutcome && tgt.outcome ? ' &bull; ' + tgt.outcome.sal : '';
      return '<div class="choice-btn" onclick="sel(\'' + ch.n + '\')"><div class="choice-label">' + ch.l + '</div><div class="choice-tagline">' + (ch.tl || '') + hi + '</div></div>';
    }).join("");
  } else {
    cg.innerHTML = '<div style="color:var(--text-muted);font-size:.85rem;padding:20px;">Outcome node - end of path. <a href="#" onclick="cur=\'start\';path=[\'start\'];renderExp();return false;" style="color:var(--neon-cyan)">Restart</a></div>';
  }

  // Detail panel
  if (n.isOutcome && n.outcome) {
    dp.style.display = "none";
    nd.style.display = "block";
    var o = n.outcome;
    var riskColor = colors[o.r] || "#f97316";
    var radarHtml = '';
    if (o.cd && o.cd.length) {
      radarHtml = '<div style="margin-bottom:16px"><div style="font-family:\'JetBrains Mono\',monospace;font-size:.62rem;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted);margin-bottom:8px">Career Radar</div><div class="radar-bar">' +
        o.cd.map(function(v) { return '<div class="radar-col" style="height:' + Math.max(4, Math.min(v, 100)) + '%"></div>'; }).join('') +
        '</div></div>';
    }
    nd.innerHTML = '<div class="detail-title">' + o.title + '</div>' +
      '<div class="detail-subtitle">' + o.pt.join(' → ') + '</div>' +
      '<div class="detail-stats">' +
      '<div class="stat-card"><div class="stat-label">Salary</div><div class="stat-value" style="color:#10b981">' + o.sal + '</div></div>' +
      '<div class="stat-card"><div class="stat-label">Net Worth</div><div class="stat-value" style="color:#22d3ee">' + o.nw + '</div></div>' +
      '<div class="stat-card"><div class="stat-label">Probability</div><div class="stat-value" style="color:#8b5cf6">' + o.p + '</div></div>' +
      '<div class="stat-card"><div class="stat-label">Risk</div><div class="stat-value" style="color:' + riskColor + '">' + o.r + '</div></div>' +
      '</div>' + radarHtml +
      '<div class="brutal-truth">' + o.bt + '</div>';
  } else {
    dp.style.display = "block";
    nd.style.display = "none";
  }
}

/* ============ SVG TREE VIEW ============ */
function renderSVG() {
  var svg = document.getElementById("svg");
  var W = 1800, H = 2800;
  svg.setAttribute("viewBox", "0 0 " + W + " " + H);
  svg.setAttribute("height", H);
  svg.innerHTML = "";

  var V = new Set(), L = {}, Q = [{id: "start", lv: 0}];
  while (Q.length) {
    var item = Q.shift();
    var id = item.id, lv = item.lv;
    if (V.has(id)) continue;
    V.add(id);
    if (!L[lv]) L[lv] = [];
    L[lv].push(id);
    var n = T[id];
    if (n && n.c) {
      n.c.forEach(function(ch) {
        if (ch.n && T[ch.n] && !V.has(ch.n)) {
          var nl = T[ch.n].l !== undefined ? T[ch.n].l : lv + 1;
          Q.push({id: ch.n, lv: nl});
        }
      });
    }
  }

  var mx = Math.max.apply(null, Object.keys(L).map(Number));
  var lh = Math.min(130, (H - 80) / (mx + 1));
  var pos = {};

  // Draw edges
  var eg = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svg.appendChild(eg);

  for (var l = 0; l <= mx; l++) {
    var nds = L[l] || [];
    var sp = W / (nds.length + 1);
    nds.forEach(function(id, i) {
      var x = sp * (i + 1), y = 60 + l * lh;
      pos[id] = {x: x, y: y};
      var n = T[id];
      if (n && n.c) {
        n.c.forEach(function(ch) {
          var t = pos[ch.n];
          if (t) {
            var ln = document.createElementNS("http://www.w3.org/2000/svg", "line");
            ln.setAttribute("x1", x);
            ln.setAttribute("y1", y + 18);
            ln.setAttribute("x2", t.x);
            ln.setAttribute("y2", t.y - 18);
            ln.setAttribute("stroke", "#2d3a4f");
            ln.setAttribute("stroke-width", "1");
            ln.setAttribute("opacity", "0.4");
            eg.appendChild(ln);
          }
        });
      }
    });
  }

  // Draw nodes
  var ng = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svg.appendChild(ng);

  Object.keys(pos).forEach(function(id) {
    var p = pos[id];
    var n = T[id];
    if (!n) return;
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", "translate(" + p.x + "," + p.y + ")");
    g.style.cursor = "pointer";

    var col = getNodeColor(id, n);

    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", -70);
    rect.setAttribute("y", -16);
    rect.setAttribute("width", 140);
    rect.setAttribute("height", 32);
    rect.setAttribute("rx", 8);
    rect.setAttribute("fill", "#1e293b");
    rect.setAttribute("stroke", col);
    rect.setAttribute("stroke-width", "1.5");
    rect.setAttribute("opacity", "0.9");
    g.appendChild(rect);

    var txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
    txt.setAttribute("x", 0);
    txt.setAttribute("y", 2);
    txt.setAttribute("text-anchor", "middle");
    txt.setAttribute("fill", n.isOutcome ? "#eab308" : "#f1f5f9");
    txt.setAttribute("font-size", "9");
    txt.setAttribute("font-family", "Inter, sans-serif");
    txt.setAttribute("font-weight", n.isOutcome ? "600" : "400");
    var t = n.title.length > 20 ? n.title.substring(0, 18) + ".." : n.title;
    txt.textContent = t;
    g.appendChild(txt);

    (function(iid) {
      g.addEventListener("click", function() { sel(iid); show("explorer"); });
    })(id);

    ng.appendChild(g);
  });
}

/* ============ STATS VIEW ============ */
function renderStats() {
  var container = document.getElementById("stats-content");
  var outcomes = Object.keys(T).filter(function(k) { return T[k].isOutcome; });

  // Stream breakdown
  var streamCount = {}, riskCount = {};
  outcomes.forEach(function(k) {
    var o = T[k].outcome;
    var stream = o.pt[0];
    streamCount[stream] = (streamCount[stream] || 0) + 1;
    var risk = o.r;
    riskCount[risk] = (riskCount[risk] || 0) + 1;
  });

  var streamHtml = '<table class="outcome-table"><tr><th>Stream</th><th>Outcomes</th><th>Color</th></tr>';
  Object.keys(streamCount).forEach(function(s) {
    var col = streamColors[s] || "#3b82f6";
    streamHtml += '<tr><td>' + s + '</td><td>' + streamCount[s] + '</td><td><span style="display:inline-block;width:12px;height:12px;background:' + col + ';border-radius:3px"></span></td></tr>';
  });
  streamHtml += '</table>';

  // Top outcomes by salary (extract numeric value)
  var sortedOutcomes = outcomes.slice().sort(function(a, b) {
    var sa = parseInt((T[a].outcome.sal.match(/[0-9]+/) || [0])[0]);
    var sb = parseInt((T[b].outcome.sal.match(/[0-9]+/) || [0])[0]);
    return sb - sa;
  });

  var topHtml = '<table class="outcome-table"><tr><th>#</th><th>Outcome</th><th>Salary</th><th>Risk</th></tr>';
  sortedOutcomes.slice(0, 25).forEach(function(k, i) {
    var o = T[k].outcome;
    var rc = colors[o.r] || "#f97316";
    topHtml += '<tr><td>' + (i + 1) + '</td><td>' + o.title + '</td><td>' + o.sal + '</td><td style="color:' + rc + '">' + o.r + '</td></tr>';
  });
  topHtml += '</table>';

  // Risk distribution
  var riskHtml = '<div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:10px">';
  Object.keys(riskCount).forEach(function(r) {
    var col = colors[r] || "#f97316";
    riskHtml += '<div style="text-align:center"><div style="font-size:2rem;font-weight:700;color:' + col + '">' + riskCount[r] + '</div><div style="font-family:\'JetBrains Mono\',monospace;font-size:.6rem;color:var(--text-muted);text-transform:uppercase">' + r + '</div></div>';
  });
  riskHtml += '</div>';

  // All outcomes table
  var allHtml = '<h2 style="margin-top:24px;color:var(--neon-cyan);font-family:\'JetBrains Mono\',monospace;font-size:.85rem;text-transform:uppercase;letter-spacing:1px">All ' + outcomes.length + ' Outcomes</h2>';
  allHtml += '<table class="outcome-table"><tr><th>Path</th><th>Outcome</th><th>Salary</th><th>Net Worth</th><th>Prob</th><th>Risk</th></tr>';
  outcomes.forEach(function(k) {
    var o = T[k].outcome;
    var rc = colors[o.r] || "#f97316";
    allHtml += '<tr><td>' + o.pt.join(' → ') + '</td><td>' + o.title + '</td><td>' + o.sal + '</td><td>' + o.nw + '</td><td>' + o.p + '</td><td style="color:' + rc + '">' + o.r + '</td></tr>';
  });
  allHtml += '</table>';

  container.innerHTML = '<div class="viz-layout">' +
    '<div class="panel"><h2>Stream Breakdown</h2>' + streamHtml + '</div>' +
    '<div class="panel"><h2>Top 25 Outcomes by Salary</h2>' + topHtml + '</div>' +
    '</div>' +
    '<div class="viz-layout">' +
    '<div class="panel"><h2>Risk Distribution</h2>' + riskHtml + '</div>' +
    '<div class="panel"><h2>Quick Stats</h2>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
    '<div class="stat-card"><div class="stat-label">Total Nodes</div><div class="stat-value">' + Object.keys(T).length + '</div></div>' +
    '<div class="stat-card"><div class="stat-label">Choice Points</div><div class="stat-value">' + Object.keys(T).filter(function(k){return T[k].c;}).length + '</div></div>' +
    '<div class="stat-card"><div class="stat-label">Outcomes</div><div class="stat-value">' + outcomes.length + '</div></div>' +
    '<div class="stat-card"><div class="stat-label">Streams</div><div class="stat-value">4</div></div>' +
    '</div></div></div>' +
    '</div>' + allHtml;
}

// Init
renderTree();
