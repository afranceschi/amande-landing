(function () {
  // Pegá tu Measurement ID de GA4 (ej. G-XXXXXXXXXX). Si queda vacío, no se carga analytics.
  var GA4_ID = window.AMANDE_GA4_ID || "";

  function initMenu() {
    var b = document.getElementById("menuBtn");
    var n = document.getElementById("navlinks");
    if (!b || !n) return;
    b.addEventListener("click", function () {
      var o = n.classList.toggle("open");
      b.setAttribute("aria-expanded", String(o));
      b.setAttribute("aria-label", o ? "Cerrar menú" : "Abrir menú");
      b.textContent = o ? "✕" : "☰";
    });
    n.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        n.classList.remove("open");
        b.setAttribute("aria-expanded", "false");
        b.setAttribute("aria-label", "Abrir menú");
        b.textContent = "☰";
      });
    });
  }

  function loadGA4() {
    if (!GA4_ID || !/^G-[A-Z0-9]+$/i.test(GA4_ID)) return;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA4_ID, { anonymize_ip: true });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA4_ID);
    document.head.appendChild(s);
  }

  function trackCtaClicks() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest("a");
      if (!a || !window.gtag) return;
      var href = a.getAttribute("href") || "";
      var label = (a.textContent || "").trim().slice(0, 80);
      if (/shop\.amandesub\.com\.ar/i.test(href)) {
        gtag("event", "cta_shop", { event_category: "conversion", event_label: label, link_url: href });
      } else if (/wa\.me\//i.test(href)) {
        gtag("event", "cta_whatsapp", { event_category: "conversion", event_label: label, link_url: href });
      }
    });
  }

  initMenu();
  loadGA4();
  trackCtaClicks();
})();
