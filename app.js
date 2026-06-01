// Decision Tree Explorer - Interactive Collapsible Top-Down Tree
// Click nodes to expand/collapse branches. Click outcomes to see details.

var T = TREE_DATA;

// Update stats counters
(function() {
  var cn = Object.keys(T);
  var chN = cn.filter(function(k){return T[k].c && T[k].c.length > 0;});
  var oN = cn.filter(function(k){return T[k].isOutcome;});
  var sn = document.getElementById("sn");
  var sc = document.getElementById("sc");
  var so = document.getElementById("so");
  if (sn) sn.textContent = cn.length;
  if (sc) sc.textContent = chN.length;
  if (so) so.textContent = oN.length;
})();

// Build children map
var children = {};
Object.keys(T).forEach(function(id) {
  children[id] = [];
  var n = T[id];
  if (n.c) {
    n.c.forEach(function(ch) {
      if (ch.n && T[ch.n]) children[id].push(ch.n);
    });
  }
});

var expanded = {};
// Auto-expand first 3 levels
function autoExpand(id, depth) {
  if (depth > 3) return;
  expanded[id] = true;
  if (children[id]) {
    children[id].forEach(function(cid) { autoExpand(cid, depth + 1); });
  }
}
autoExpand("start", 0);
var cur = "start";

var riskColors = {"Low":"#10b981","Medium":"#f97316","High":"#ef4444","V.High":"#dc2626"};
var streamColors = {"Science":"#22d3ee","Commerce":"#10b981","Arts":"#8b5cf6","Any":"#f97316"};

function getNodeColor(id, node) {
  if (node.isOutcome) return "#f59e0b";
  if (node.str === "sci") return "#06b6d4";
  if (id.startsWith("oc_") || id === "cp" || id.startsWith("c1") || id.startsWith("c3") || id.startsWith("c4") || id.startsWith("c5") || id.startsWith("c6") || id.startsWith("c7") || id.startsWith("c8")) return "#10b981";
  if (id.startsWith("oa_") || id === "ap") return "#8b5cf6";
  if (id.startsWith("ou_") || id.startsWith("cb_") || id === "up" || id === "cb") return "#f97316";
  if (id.startsWith("os_") || id === "s1" || id === "s2" || id === "s3" || id === "s4" || id === "s5" || id === "s6" || id === "s7" || id === "s8" || id === "s9" || id === "s10" || id === "s11" || id === "s12" || id === "s13" || id === "s14" || id === "s15") return "#06b6d4";
  if (id === "sc" || id === "sp" || id === "pcm" || id === "pcb" || id === "ss" || id === "start") return "#6366f1";
  return "#6366f1";
}

function renderTree() {
  var c = document.getElementById("tc");
  c.innerHTML = "";
  
  var NODE_W = 160;
  var NODE_H = 44;
  var H_GAP = 24;
  var V_GAP = 64;
  
  // Calculate subtree leaf counts
  function leafCount(id) {
    if (!expanded[id] || !children[id] || children[id].length === 0) return 1;
    var total = 0;
    children[id].forEach(function(cid) { total += leafCount(cid); });
    return Math.max(total, 1);
  }
  
  // Position nodes
  var positions = {};
  var maxY = 0;
  
  function layout(id, x, depth) {
    var leaves = leafCount(id);
    var width = leaves * (NODE_W + H_GAP);
    var cx = x + width / 2;
    var py = depth * (NODE_H + V_GAP);
    positions[id] = { x: cx - NODE_W / 2, y: py, w: NODE_W, h: NODE_H, cx: cx };
    maxY = Math.max(maxY, py + NODE_H);
    
    if (expanded[id] && children[id] && children[id].length > 0) {
      var childX = x;
      children[id].forEach(function(cid) {
        var cLeaves = leafCount(cid);
        var cWidth = cLeaves * (NODE_W + H_GAP);
        layout(cid, childX, depth + 1);
        childX += cWidth;
      });
    }
  }
  
  layout("start", 0, 0);
  
  var svgW = 0;
  Object.keys(positions).forEach(function(id) {
    var p = positions[id];
    svgW = Math.max(svgW, p.x + p.w);
  });
  svgW += 40;
  var svgH = maxY + 40;
  
  var svgNS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "-20 -20 " + (svgW + 40) + " " + (svgH + 40));
  svg.setAttribute("height", Math.min(svgH + 40, 2000));
  svg.style.display = "block";
  
  // Draw edges
  var edgeGroup = document.createElementNS(svgNS, "g");
  Object.keys(positions).forEach(function(id) {
    var p = positions[id];
    if (!expanded[id]) return;
    children[id].forEach(function(cid) {
      var cp = positions[cid];
      if (!cp) return;
      var path = document.createElementNS(svgNS, "path");
      var x1 = p.cx, y1 = p.y + p.h;
      var x2 = cp.cx, y2 = cp.y;
      var midY = (y1 + y2) / 2;
      path.setAttribute("d", "M" + x1 + "," + y1 + " C" + x1 + "," + midY + " " + x2 + "," + midY + " " + x2 + "," + y2);
      path.setAttribute("stroke", "#334155");
      path.setAttribute("stroke-width", "1.5");
      path.setAttribute("fill", "none");
      path.setAttribute("opacity", "0.5");
      edgeGroup.appendChild(path);
    });
  });
  svg.appendChild(edgeGroup);
  
  // Draw nodes
  Object.keys(positions).forEach(function(id) {
    var p = positions[id];
    var n = T[id];
    if (!n) return;
    
    var col = getNodeColor(id, n);
    var g = document.createElementNS(svgNS, "g");
    g.setAttribute("transform", "translate(" + p.x + "," + p.y + ")");
    g.style.cursor = "pointer";
    
    // Shadow
    var shadow = document.createElementNS(svgNS, "rect");
    shadow.setAttribute("x", 2);
    shadow.setAttribute("y", 2);
    shadow.setAttribute("width", p.w);
    shadow.setAttribute("height", p.h);
    shadow.setAttribute("rx", 10);
    shadow.setAttribute("fill", "#000");
    shadow.setAttribute("opacity", "0.3");
    g.appendChild(shadow);
    
    // Background
    var rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", p.w);
    rect.setAttribute("height", p.h);
    rect.setAttribute("rx", 10);
    rect.setAttribute("fill", "#1e293b");
    rect.setAttribute("stroke", col);
    rect.setAttribute("stroke-width", id === cur ? 2.5 : 1.5);
    rect.setAttribute("opacity", "0.95");
    g.appendChild(rect);
    
    // Expand/collapse indicator
    if (children[id] && children[id].length > 0) {
      var indicator = document.createElementNS(svgNS, "text");
      indicator.setAttribute("x", p.w - 14);
      indicator.setAttribute("y", 16);
      indicator.setAttribute("text-anchor", "middle");
      indicator.setAttribute("fill", "#94a3b8");
      indicator.setAttribute("font-size", "12");
      indicator.setAttribute("font-family", "Inter,sans-serif");
      indicator.textContent = expanded[id] ? "−" : "+";
      g.appendChild(indicator);
    }
    
    // Title
    var title = n.title.length > 18 ? n.title.substring(0, 16) + ".." : n.title;
    var txt = document.createElementNS(svgNS, "text");
    txt.setAttribute("x", p.w / 2);
    txt.setAttribute("y", 18);
    txt.setAttribute("text-anchor", "middle");
    txt.setAttribute("fill", n.isOutcome ? "#f59e0b" : "#e2e8f0");
    txt.setAttribute("font-size", "9.5");
    txt.setAttribute("font-family", "Inter,sans-serif");
    txt.setAttribute("font-weight", "600");
    txt.textContent = title;
    g.appendChild(txt);
    
    // Subtext
    if (n.isOutcome && n.outcome) {
      var sub = document.createElementNS(svgNS, "text");
      sub.setAttribute("x", p.w / 2);
      sub.setAttribute("y", 34);
      sub.setAttribute("text-anchor", "middle");
      sub.setAttribute("fill", "#64748b");
      sub.setAttribute("font-size", "7.5");
      sub.setAttribute("font-family", "Inter,sans-serif");
      sub.textContent = n.outcome.sal;
      g.appendChild(sub);
    } else if (n.c && n.c.length > 1) {
      var sub = document.createElementNS(svgNS, "text");
      sub.setAttribute("x", p.w / 2);
      sub.setAttribute("y", 34);
      sub.setAttribute("text-anchor", "middle");
      sub.setAttribute("fill", "#64748b");
      sub.setAttribute("font-size", "7.5");
      sub.setAttribute("font-family", "Inter,sans-serif");
      sub.textContent = n.c.length + " choices";
      g.appendChild(sub);
    }
    
    (function(iid) {
      g.addEventListener("click", function(e) {
        e.stopPropagation();
        cur = iid;
        if (children[iid] && children[iid].length > 0) {
          expanded[iid] = !expanded[iid];
        }
        renderTree();
        showDetail(iid);
      });
    })(id);
    
    svg.appendChild(g);
  });
  
  c.appendChild(svg);
  c.scrollLeft = Math.max(0, (svgW - c.clientWidth) / 2);
}

function showDetail(id) {
  var n = T[id];
  var nd = document.getElementById("nd");
  var dp = document.getElementById("dp");
  
  dp.style.display = "none";
  nd.style.display = "block";
  
  var h = "";
  if (n.isOutcome && n.outcome) {
    var o = n.outcome;
    var rc = riskColors[o.r] || "#f97316";
    var radarHtml = "";
    if (o.cd && o.cd.length) {
      radarHtml = '<div style="margin-bottom:16px"><div style="font-family:\'JetBrains Mono\',monospace;font-size:.62rem;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted);margin-bottom:8px">Career Radar</div><div class="radar-bar">' + o.cd.map(function(v) { return '<div class="radar-col" style="height:' + Math.max(4, Math.min(v, 100)) + '%"></div>'; }).join('') + '</div></div>';
    }
    h = '<div class="detail-title">' + o.title + '</div>' +
      '<div class="detail-subtitle">' + o.pt.join(' \u2192 ') + '</div>' +
      '<div class="detail-stats">' +
      '<div class="stat-card"><div class="stat-label">Salary</div><div class="stat-value" style="color:#10b981">' + o.sal + '</div></div>' +
      '<div class="stat-card"><div class="stat-label">Net Worth</div><div class="stat-value" style="color:#22d3ee">' + o.nw + '</div></div>' +
      '<div class="stat-card"><div class="stat-label">Probability</div><div class="stat-value" style="color:#8b5cf6">' + o.p + '</div></div>' +
      '<div class="stat-card"><div class="stat-label">Risk</div><div class="stat-value" style="color:' + rc + '">' + o.r + '</div></div>' +
      '</div>' + radarHtml +
      '<div class="brutal-truth">' + o.bt + '</div>';
    
    if (n.c && n.c.length > 0) {
      h += '<h2 style="margin-top:20px;margin-bottom:12px;color:var(--neon-cyan);font-family:\'JetBrains Mono\',monospace;font-size:.75rem;text-transform:uppercase;letter-spacing:1px">Continue from here</h2><div class="choices-grid">' +
        n.c.map(function(ch) {
          var tgt = T[ch.n];
          var hint = tgt && tgt.isOutcome && tgt.outcome ? ' \u2022 ' + tgt.outcome.sal : '';
          return '<div class="choice-btn" onclick="cur=\'' + ch.n + '\';expanded[\'' + ch.n + '\']=true;renderTree();showDetail(\'' + ch.n + '\')"><div class="choice-label">' + ch.l + '</div><div class="choice-tagline">' + (ch.tl || '') + hint + '</div></div>';
        }).join('') + '</div>';
    }
  } else {
    h = '<div class="detail-title">' + n.title + '</div>' +
      '<div class="detail-subtitle">' + (n.st || 'Choose your path') + '</div>';
    
    if (n.c && n.c.length > 0) {
      h += '<h2 style="margin-top:20px;margin-bottom:12px;color:var(--neon-cyan);font-family:\'JetBrains Mono\',monospace;font-size:.75rem;text-transform:uppercase;letter-spacing:1px">Choices (' + n.c.length + ')</h2><div class="choices-grid">' +
        n.c.map(function(ch) {
          var tgt = T[ch.n];
          var hint = tgt && tgt.isOutcome && tgt.outcome ? ' \u2022 ' + tgt.outcome.sal : '';
          return '<div class="choice-btn" onclick="cur=\'' + ch.n + '\';expanded[\'' + ch.n + '\']=true;renderTree();showDetail(\'' + ch.n + '\')"><div class="choice-label">' + ch.l + '</div><div class="choice-tagline">' + (ch.tl || '') + hint + '</div></div>';
        }).join('') + '</div>';
    }
  }
  
  nd.innerHTML = h;
}

function renderStats() {
  var container = document.getElementById("stats-content");
  var outcomes = Object.keys(T).filter(function(k) { return T[k].isOutcome; });
  
  var streamCount = {}, riskCount = {};
  outcomes.forEach(function(k) {
    var o = T[k].outcome;
    streamCount[o.pt[0]] = (streamCount[o.pt[0]] || 0) + 1;
    riskCount[o.r] = (riskCount[o.r] || 0) + 1;
  });
  
  var streamHtml = '<table class="outcome-table"><tr><th>Stream</th><th>Count</th></tr>';
  Object.keys(streamCount).forEach(function(s) {
    var col = streamColors[s] || "#3b82f6";
    streamHtml += '<tr><td><span style="display:inline-block;width:10px;height:10px;background:' + col + ';border-radius:2px;margin-right:6px"></span>' + s + '</td><td>' + streamCount[s] + '</td></tr>';
  });
  streamHtml += '</table>';
  
  var riskHtml = '<div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:10px">';
  Object.keys(riskCount).forEach(function(r) {
    var col = riskColors[r] || "#f97316";
    riskHtml += '<div style="text-align:center"><div style="font-size:2rem;font-weight:700;color:' + col + '">' + riskCount[r] + '</div><div style="font-family:\'JetBrains Mono\',monospace;font-size:.6rem;color:var(--text-muted)">' + r + '</div></div>';
  });
  riskHtml += '</div>';
  
  var sorted = outcomes.slice().sort(function(a,b) {
    return parseInt((T[b].outcome.sal.match(/[0-9]+/)||[0])[0]) - parseInt((T[a].outcome.sal.match(/[0-9]+/)||[0])[0]);
  });
  var topHtml = '<table class="outcome-table"><tr><th>#</th><th>Outcome</th><th>Salary</th></tr>';
  sorted.slice(0,25).forEach(function(k,i) {
    var o = T[k].outcome;
    var rc = riskColors[o.r] || "#f97316";
    topHtml += '<tr><td>'+(i+1)+'</td><td>'+o.title+'</td><td>'+o.sal+' <span style="color:'+rc+'">('+o.r+')</span></td></tr>';
  });
  topHtml += '</table>';
  
  container.innerHTML = '<div class="viz-layout"><div class="panel"><h2>Stream Breakdown</h2>'+streamHtml+'</div><div class="panel"><h2>Risk Distribution</h2>'+riskHtml+'</div></div><div class="viz-layout"><div class="panel"><h2>Top 25 by Salary</h2>'+topHtml+'</div><div class="panel"><h2>Quick Stats</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div class="stat-card"><div class="stat-label">Total Nodes</div><div class="stat-value">'+Object.keys(T).length+'</div></div><div class="stat-card"><div class="stat-label">Choice Points</div><div class="stat-value">'+Object.keys(T).filter(function(k){return T[k].c;}).length+'</div></div><div class="stat-card"><div class="stat-label">Outcomes</div><div class="stat-value">'+outcomes.length+'</div></div><div class="stat-card"><div class="stat-label">Tree Depth</div><div class="stat-value">6 levels</div></div></div></div></div>';
}

function renderExplorer() {
  // Explorer uses the same tree view but focuses on navigation
  renderTree();
  
  // Show choices in the side panel
  var n = T[cur];
  var cg = document.getElementById("cg");
  var pt = document.getElementById("pt");
  
  // Path trail
  pt.innerHTML = '<span class="path-node last" onclick="cur=\'start\';expanded={\"start\":true};renderTree();renderExplorer();return false;">Start</span>';
  
  if (n.c && n.c.length > 0) {
    cg.innerHTML = n.c.map(function(ch) {
      var tgt = T[ch.n];
      var hi = tgt && tgt.isOutcome && tgt.outcome ? ' \u2022 ' + tgt.outcome.sal : '';
      return '<div class="choice-btn" onclick="cur=\'' + ch.n + '\';expanded[\'' + ch.n + '\']=true;renderTree();renderExplorer();showDetail(\'' + ch.n + '\')"><div class="choice-label">' + ch.l + '</div><div class="choice-tagline">' + (ch.tl || '') + hi + '</div></div>';
    }).join("");
  } else {
    cg.innerHTML = '<div style="color:var(--text-muted);font-size:.85rem;padding:20px;">Outcome reached. </div>';
  }
  
  showDetail(cur);
}

function show(v) {
  ["tree","explorer","stats"].forEach(function(x) {
    var el = document.getElementById("v-" + x);
    if (el) el.style.display = x === v ? "block" : "none";
  });
  document.querySelectorAll(".controls button").forEach(function(b, i) {
    var views = ["tree", "explorer", "stats"];
    b.classList.toggle("active", views[i] === v);
  });
  if (v === "tree") renderTree();
  if (v === "explorer") renderExplorer();
  if (v === "stats") renderStats();
}

// Init
show("tree");
