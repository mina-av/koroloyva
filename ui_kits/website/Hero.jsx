/* global React */
(function () {
const { Eyebrow } = window.KorolyovaDesignSystem_d31d2b;

const HERO_IMG = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80";

function Hero({ onNav }) {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end",
      overflow: "hidden", background: "var(--ink-900)" }}>
      <img src={HERO_IMG} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", filter: "saturate(0.88) brightness(0.78)" }} />
      <div style={{ position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(22,19,15,0.45) 0%, rgba(22,19,15,0.12) 32%, rgba(22,19,15,0.82) 100%)" }} />

      <div style={{ position: "relative", maxWidth: "var(--container-wide)", margin: "0 auto", width: "100%",
        padding: "0 var(--gutter) 92px" }}>
        <div style={{ maxWidth: 1000 }}>
          <Eyebrow onDark>Консультации по недвижимости и строительству</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(2.6rem, 5.4vw, 5.2rem)", lineHeight: 1.02, letterSpacing: "-0.015em",
            color: "var(--cream-50)", margin: "24px 0 0" }}>
            Недвижимость способна увеличивать капитал — или <span style={{ fontStyle: "italic", color: "var(--brass-400)" }}>уничтожать</span> его
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
            lineHeight: 1.6, color: "rgba(247,242,233,0.85)", maxWidth: "60ch", margin: "30px 0 0" }}>
            Разница редко в бюджете. Чаще — в качестве решений на каждом этапе. За более чем 20 лет
            практики я убедилась: понимать процесс важнее, чем быть строителем.
          </p>
        </div>
      </div>

      <div style={{ position: "absolute", right: "var(--gutter)", bottom: 44, display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "rgba(247,242,233,0.7)", writingMode: "vertical-rl" }}>20+ лет практики</span>
        <span style={{ width: 1, height: 54, background: "rgba(247,242,233,0.4)" }} />
      </div>
    </section>
  );
}

window.Hero = Hero;
})();
