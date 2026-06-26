/* global React */
(function () {
const COLS = [
  { title: "Собственникам", target: "owners", items: ["Консультация", "Курс для собственников", "Представление интересов"] },
  { title: "Строительный бизнес", target: "business", items: ["Самостоятельное изучение", "Первый объект", "Стратегическое партнёрство"] },
  { title: "Навигация", items: [["Партнёрская сеть", "network"], ["Об авторе", "about"], ["Как начать работу", "process"], ["Записаться на консультацию", "contact"]] },
];

function Footer({ onNav }) {
  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--cream-50)" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "var(--section-y-snug) var(--gutter) 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48 }} className="kit-footer-grid">
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "var(--cream-50)", margin: 0 }}>
              ТАМИЛА КОРОЛЁВА
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6, color: "rgba(247,242,233,0.66)", margin: "16px 0 0", maxWidth: "32ch" }}>
              Консультации по недвижимости и строительству. Более 20 лет практики.
            </p>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "var(--brass-400)", margin: "0 0 18px" }}>{c.title}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {c.items.map((it) => {
                  const [label, tgt] = Array.isArray(it) ? it : [it, c.target];
                  return (
                    <li key={label}>
                      <a href={"#" + tgt} onClick={(e) => { e.preventDefault(); onNav(tgt); }}
                        style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "rgba(247,242,233,0.8)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brass-400)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,242,233,0.8)")}>
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "var(--border-on-ink)", margin: "48px 0 0" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, paddingTop: 28 }}>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(247,242,233,0.55)" }}>
            Политика конфиденциальности
          </a>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(247,242,233,0.5)" }}>© Тамила Королёва</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
})();
