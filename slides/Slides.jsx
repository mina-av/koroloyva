/* global React */
(function () {
const { Eyebrow, Divider } = window.KorolyovaDesignSystem_d31d2b;

const W = 1280, H = 720;

function Frame({ children, bg = "cream", image, index, label, style }) {
  const dark = bg === "ink" || bg === "image";
  const bgColor = bg === "ink" ? "var(--ink-900)" : "var(--cream-50)";
  return (
    <div style={{
      position: "relative", width: W, height: H, overflow: "hidden",
      background: bgColor, color: dark ? "var(--cream-50)" : "var(--ink-900)",
      fontFamily: "var(--font-sans)", ...style,
    }}>
      {bg === "image" && image && (
        <React.Fragment>
          <img src={image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.88) brightness(0.78)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(22,19,15,0.5) 0%, rgba(22,19,15,0.1) 38%, rgba(22,19,15,0.82) 100%)" }} />
        </React.Fragment>
      )}
      <div style={{ position: "absolute", top: 44, left: 56, zIndex: 3,
        fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19, letterSpacing: "0.02em",
        color: dark ? "var(--cream-50)" : "var(--ink-900)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: 13, fontFamily: "var(--font-sans)", fontWeight: 600 }}>ТАМИЛА КОРОЛЁВА</div>
      <div style={{ position: "absolute", bottom: 40, left: 56, right: 56, zIndex: 3, display: "flex",
        justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: dark ? "rgba(247,242,233,0.6)" : "var(--stone-400)" }}>{label}</span>
        {index && <span style={{ fontFamily: "var(--font-display)", fontSize: 15,
          color: dark ? "rgba(247,242,233,0.45)" : "var(--stone-400)" }}>{index}</span>}
      </div>
      <div style={{ position: "relative", zIndex: 2, width: "100%", height: "100%" }}>{children}</div>
    </div>
  );
}

/* ---- 01 · Title --------------------------------------------------------- */
function TitleSlide() {
  return (
    <Frame bg="image" image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80" index="01" label="Консультации по недвижимости и строительству">
      <div style={{ position: "absolute", left: 56, bottom: 100, maxWidth: 1130 }}>
        <Eyebrow onDark>20+ лет практики</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 58, lineHeight: 1.12,
          letterSpacing: "-0.015em", color: "var(--cream-50)", margin: "20px 0 0" }}>
          Недвижимость способна увеличивать капитал или <span style={{ fontStyle: "italic" }}>уничтожать</span> его
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.5, color: "rgba(247,242,233,0.85)", maxWidth: "58ch", margin: "32px 0 0" }}>
          Разница редко в бюджете. Чаще в качестве решений на каждом этапе.
        </p>
      </div>
    </Frame>
  );
}

/* ---- 02 · Problem ------------------------------------------------------- */
const QUESTIONS = [
  "Хватит ли денег завершить проект так, как задумали?",
  "Как выбрать подрядчиков, которым можно доверять?",
  "Как контролировать качество и избежать лишних расходов?",
  "Как получить именно тот результат, что представляли в начале?",
];
function ProblemSlide() {
  return (
    <Frame bg="ink" index="02" label="С чего всё начинается">
      <div style={{ padding: "146px 56px 0", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "start" }}>
        <div>
          <Eyebrow onDark>С чего всё начинается</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 46, lineHeight: 1.08,
            letterSpacing: "-0.01em", color: "var(--cream-50)", margin: "18px 0 0", maxWidth: "16ch" }}>
            Все ошибки и расходы оплачиваете именно вы
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(247,242,233,0.72)", margin: "24px 0 0", maxWidth: "34ch" }}>
            Вы не обязаны знать всё о строительстве. Но собственник не обязан быть и заложником мастеров.
          </p>
        </div>
        <div style={{ marginTop: 6 }}>
          {QUESTIONS.map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 20, padding: "20px 0",
              borderTop: "1px solid var(--border-on-ink)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "rgba(247,242,233,0.45)", flex: "none", width: 30 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 18, lineHeight: 1.4, color: "var(--cream-50)" }}>{q}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ---- 03 · Paths --------------------------------------------------------- */
const PATHS = [
  { n: "01", label: "Для собственников", title: "Вы — собственник недвижимости",
    desc: "Консультации, курс и полное представление ваших интересов на проекте." },
  { n: "02", label: "Для предпринимателей", title: "Вы создаёте строительный бизнес",
    desc: "Программа, первый объект под руководством, стратегическое партнёрство." },
  { n: "03", label: "Партнёрство", title: "Закрытая партнёрская сеть",
    desc: "Поставщики, подрядчики, застройщики и специалисты — за 20+ лет работы." },
];
function PathsSlide() {
  return (
    <Frame bg="cream" index="03" label="Выберите путь">
      <div style={{ padding: "150px 56px 0" }}>
        <Eyebrow>Три направления</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 44, lineHeight: 1.04,
          letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "16px 0 48px", maxWidth: "24ch" }}>
          Выберите путь, который актуален для вас сегодня
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--sand-300)" }}>
          {PATHS.map((p) => (
            <div key={p.n} style={{ padding: "30px 30px 0 0", borderRight: p.n !== "03" ? "1px solid var(--sand-300)" : "none", paddingLeft: p.n === "01" ? 0 : 30 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--stone-400)" }}>{p.n}</span>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--stone-400)", margin: "16px 0 0" }}>{p.label}</p>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 25, lineHeight: 1.12, color: "var(--ink-900)", margin: "10px 0 12px", maxWidth: "14ch" }}>{p.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--stone-500)", margin: 0, maxWidth: "26ch" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ---- 04 · Owners formats ------------------------------------------------ */
const OWNERS = [
  { title: "Консультация", sub: "Разбор вашей ситуации", meta: "Письменные рекомендации и план действий", price: "от 97 $" },
  { title: "Курс для собственников", sub: "Контроль качества без технического образования", meta: "52 модуля · 143 урока · 634 страницы", price: "237 – 1 570 $" },
  { title: "Представление интересов", sub: "Ваши интересы на каждом этапе проекта", meta: "Контроль смет, сроков, качества, подрядчиков", price: "от 2 570 $" },
];
function OwnersSlide() {
  return (
    <Frame bg="cream" index="04" label="Для собственников недвижимости">
      <div style={{ padding: "150px 56px 0" }}>
        <Eyebrow>Форматы участия</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 44, lineHeight: 1.04,
          letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "16px 0 46px", maxWidth: "22ch" }}>
          Выберите формат под вашу ситуацию
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {OWNERS.map((o) => (
            <div key={o.title} style={{ background: "var(--paper)", border: "1px solid var(--sand-300)", padding: "30px 28px", display: "flex", flexDirection: "column", minHeight: 280 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 26, lineHeight: 1.12, color: "var(--ink-900)", margin: 0, minHeight: 58, flexShrink: 0 }}>{o.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.45, fontWeight: 500, color: "var(--stone-500)", margin: "10px 0 0", flexShrink: 0 }}>{o.sub}</p>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--stone-500)", margin: "16px 0 0", flex: 1 }}>{o.meta}</p>
              <div style={{ height: 1, background: "var(--sand-300)", margin: "16px 0 14px" }} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 26, color: "var(--ink-900)" }}>{o.price}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ---- 05 · Business ------------------------------------------------------ */
const BUSINESS = [
  { title: "Самостоятельное изучение", sub: "Полная система в своём темпе", meta: "95 модулей · 297 уроков · 1 000+ страниц", price: "587 $" },
  { title: "Первый объект с экспертом", sub: "Реальный проект не в одиночку", meta: "5 месяцев · закрытый чат · Zoom · сеть", price: "от 3 870 $" },
  { title: "Стратегическое партнёрство", sub: "Для бизнеса на годы вперёд", meta: "Стратегические встречи · персональные консультации", price: "от 15 000 $" },
];
function BusinessSlide() {
  return (
    <Frame bg="ink" index="05" label="Для предпринимателей и инвесторов">
      <div style={{ padding: "146px 56px 0" }}>
        <Eyebrow onDark>Строительный бизнес</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 44, lineHeight: 1.04,
          letterSpacing: "-0.01em", color: "var(--cream-50)", margin: "16px 0 44px", maxWidth: "24ch" }}>
          Создание и развитие строительного бизнеса
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {BUSINESS.map((b) => (
            <div key={b.title} style={{ border: "1px solid var(--border-on-ink)", padding: "30px 28px", display: "flex", flexDirection: "column", minHeight: 260 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 25, lineHeight: 1.12, color: "var(--cream-50)", margin: 0, minHeight: 56, flexShrink: 0 }}>{b.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.45, fontWeight: 500, color: "rgba(247,242,233,0.65)", margin: "10px 0 0", flexShrink: 0 }}>{b.sub}</p>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(247,242,233,0.66)", margin: "16px 0 0", flex: 1 }}>{b.meta}</p>
              <div style={{ height: 1, background: "var(--border-on-ink)", margin: "16px 0 14px" }} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 26, color: "var(--cream-50)" }}>{b.price}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ---- 06 · About --------------------------------------------------------- */
function AboutSlide() {
  return (
    <Frame bg="cream" index="06" label="Об авторе">
      <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", height: "100%" }}>
        <div style={{ padding: "150px 56px 90px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Eyebrow>Об авторе</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 54, lineHeight: 1.0,
            letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "16px 0 0" }}>Тамила Королёва</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--stone-500)", margin: "24px 0 0", maxWidth: "46ch" }}>
            За более чем 20 лет практики я убедилась: чтобы успешно управлять недвижимостью и строительством,
            не обязательно становиться строителем. Важно понимать, что происходит внутри процесса и за что
            именно вы платите свои деньги.
          </p>
          <div style={{ display: "flex", gap: 48, marginTop: 36 }}>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 40, color: "var(--ink-900)", lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--stone-500)", marginTop: 6 }}>лет практики</div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 40, color: "var(--ink-900)", lineHeight: 1 }}>3</div>
              <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--stone-500)", marginTop: 6 }}>направления</div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=80"
            alt="Тамила Королёва" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.92)" }} />
        </div>
      </div>
    </Frame>
  );
}

/* ---- 07 · Contact ------------------------------------------------------- */
const STEPS = [
  ["01", "Заполните бриф"],
  ["02", "Я изучу информацию"],
  ["03", "Проведём встречу"],
  ["04", "Вы получите результат"],
];
function ContactSlide() {
  return (
    <Frame bg="ink" index="07" label="Как начать работу">
      <div style={{ padding: "146px 56px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <Eyebrow onDark>Не уверены, с чего начать?</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: 1.02,
            letterSpacing: "-0.01em", color: "var(--cream-50)", margin: "18px 0 0", maxWidth: "14ch" }}>
            Напишите, я помогу определить формат
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(247,242,233,0.75)", maxWidth: "36ch", margin: "24px 0 0" }}>
            Каждая ситуация индивидуальна. Telegram · WhatsApp · телефон.
          </p>
        </div>
        <div style={{ marginTop: 6 }}>
          {STEPS.map(([n, t], i) => (
            <div key={n} style={{ display: "flex", alignItems: "center", gap: 22, padding: "18px 0",
              borderTop: i === 0 ? "none" : "1px solid var(--border-on-ink)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "rgba(247,242,233,0.45)", width: 34, flex: "none" }}>{n}</span>
              <span style={{ fontSize: 19, color: "var(--cream-50)" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

Object.assign(window, { SlideFrame: Frame, TitleSlide, ProblemSlide, PathsSlide, OwnersSlide, BusinessSlide, AboutSlide, ContactSlide });
})();
