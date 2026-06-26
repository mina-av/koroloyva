/* global React */
(function () {
const { KFSectionHead, KFArrowLink } = window;

const PATHS = [
  { label: "Для собственников", title: "Вы — собственник недвижимости", target: "owners",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
  { label: "Для предпринимателей", title: "Вы создаёте строительный бизнес", target: "business",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80" },
  { label: "Партнёрство", title: "Закрытая партнёрская сеть", target: "network",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" },
];

function PathCard({ p, onNav }) {
  const [h, setH] = React.useState(false);
  return (
    <article onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      onClick={() => onNav(p.target)} style={{ cursor: "pointer" }}>
      <div style={{ overflow: "hidden", aspectRatio: "4 / 3", background: "var(--sand-200)" }}>
        <img src={p.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover",
          filter: "saturate(0.9)", transform: h ? "scale(1.04)" : "scale(1)",
          transition: "transform var(--dur-slow) var(--ease-out)" }} />
      </div>
      <div style={{ paddingTop: 22 }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--brass-600)", margin: 0 }}>{p.label}</p>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 27, lineHeight: 1.12,
          letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "12px 0 18px", maxWidth: "16ch" }}>{p.title}</h3>
        <KFArrowLink onNav={onNav} target={p.target}>Перейти</KFArrowLink>
      </div>
    </article>
  );
}

function Paths({ onNav }) {
  return (
    <section id="puti" style={{ background: "var(--cream-50)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ marginBottom: 60 }}>
          <KFSectionHead n="01" heading="Выберите путь, который актуален для вас сегодня" max="20ch" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }} className="kit-paths-grid">
          {PATHS.map((p) => <PathCard key={p.target} p={p} onNav={onNav} />)}
        </div>
      </div>
    </section>
  );
}

window.Paths = Paths;
})();
