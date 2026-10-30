(function () {
  var m = document.getElementById("peek"), b = document.getElementById("pbubble"), t;
  if (!m || !b) return;
  function toggle(ev) {
    if (ev && ev.stopPropagation) ev.stopPropagation();
    clearTimeout(t);
    if (/\bshow\b/.test(b.className)) { b.className = "pbubble"; return; }
    b.className = "pbubble show";
    t = setTimeout(function () { b.className = "pbubble"; }, 4000);
  }
  m.addEventListener("click", toggle);
  m.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(ev); } });
  document.addEventListener("click", function () { b.className = "pbubble"; });
})();
