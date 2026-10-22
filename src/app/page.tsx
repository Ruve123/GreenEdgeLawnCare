import Script from "next/script";
import { Animations } from "@/components/animations";
import { Logo } from "@/components/logo";

const GHL_FORM_ID = "ab68hgwqdiklCN7hqC0p";
const GHL_FORM_SRC = `https://api.levelupacademy.ph/widget/form/${GHL_FORM_ID}`;

const container = "mx-auto w-full max-w-[1200px] px-[15px]";
const section = "py-[100px]";
const h2 =
  "font-heading font-extrabold text-[clamp(34px,5vw,52px)] leading-[1.03] tracking-[-0.025em]";
const btnLime =
  "inline-flex min-h-11 items-center rounded bg-lime px-5 py-3 text-base font-semibold text-ink transition-colors hover:bg-lime-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-lime";

const services = [
  ["Mowing", "Clean, even cuts on a schedule that fits your week."],
  ["Edging & Trimming", "Sharp borders along walks, beds and fences."],
  ["Fertilizing & Weed Control", "Feed the grass, starve the weeds."],
  ["Seasonal Cleanup", "Leaves and debris cleared so spring starts fresh."],
];

const reviews = [
  "Sample text: They showed up on time and my yard looked great. I got my Saturdays back.",
  "Sample text: Friendly, easy to reach, and the lawn has never looked greener.",
  "Sample text: Quick quote, fair process, and no more weekend mowing for me.",
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-forest text-white">
        <div className={`${container} flex min-h-[72px] items-center justify-between gap-[30px]`}>
          <a href="#top" aria-label="GreenEdge Lawn Care home">
            <Logo />
          </a>
          <a href="#inquiry" className={`${btnLime} px-4 py-2 text-sm`}>
            Request a free quote
          </a>
        </div>
      </header>

      <Animations />
      <main id="top">
        <section
          data-parallax
          className={`${section} bg-forest bg-cover bg-center text-white`}
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(18 48 31 / 0.92), rgb(18 48 31 / 0.35)), url(/images/home-hero.jpg)",
          }}
        >
          <div className={container}>
            <p data-hero className="text-sm font-semibold uppercase tracking-[0.14em] text-lime">
              Lawn care in Charlotte, North Carolina
            </p>
            <h1 data-hero className="mt-4 max-w-[760px] font-heading text-[clamp(44px,8vw,84px)] font-extrabold leading-[0.98] tracking-[-0.03em]">
              A Greener Lawn Without the Weekend Work
            </h1>
            <p data-hero className="mt-6 max-w-[560px] text-xl leading-[1.55] text-white/90">
              We handle the mowing and upkeep. You get your weekend back.
            </p>
            <a data-hero href="#inquiry" className={`${btnLime} mt-10`}>
              Request a free quote
            </a>
          </div>
        </section>

        <section id="services" className={section}>
          <div className={container}>
            <h2 data-reveal className={h2}>Our services</h2>
            <ul className="mt-[30px] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[30px]">
              {services.map(([name, desc], i) => (
                <li key={name} data-reveal className="rounded border-t-4 border-forest bg-white p-6 shadow-sm">
                  <span className="font-bold text-moss">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-heading text-2xl font-bold">{name}</h3>
                  <p className="mt-2 text-body-muted">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="reviews" className={`${section} bg-sage`}>
          <div className={container}>
            <h2 data-reveal className={h2}>What neighbors say</h2>
            <div className="mt-[30px] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[30px]">
              {reviews.map((text, i) => (
                <figure key={i} data-reveal className="rounded bg-paper p-6">
                  <blockquote className="italic">&ldquo;{text}&rdquo;</blockquote>
                  <figcaption className="mt-6">
                    <strong>Sample Customer {String.fromCharCode(65 + i)}</strong>
                    <span className="block text-sm text-body-muted">
                      Sample review - not a real customer
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="inquiry" className={section}>
          <div className={`${container} grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[30px]`}>
            <div data-reveal>
              <h2 className={h2}>Lawn Service Inquiry</h2>
              <p className="mt-4 text-lg text-body-muted">
                Tell us about your yard and we&rsquo;ll get back to you with a free quote.
              </p>
            </div>
            <iframe
              data-reveal
              src={GHL_FORM_SRC}
              id={`inline-${GHL_FORM_ID}`}
              title="Lawn Service Inquiry"
              className="h-[700px] w-full rounded border-0"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Lawn Service Inquiry"
              data-height="554"
              data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
              data-form-id={GHL_FORM_ID}
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
            />
            <Script src="https://api.levelupacademy.ph/js/form_embed.js" strategy="lazyOnload" />
          </div>
        </section>
      </main>

      <footer className="bg-forest pb-10 pt-[60px] text-white/90">
        <div className={`${container} flex flex-wrap justify-between gap-[30px]`}>
          <div>
            <Logo />
            <p>Charlotte, North Carolina</p>
          </div>
          <p>Phone: [PHONE] &nbsp;|&nbsp; Email: [EMAIL]</p>
        </div>
        <p className={`${container} mt-10 text-sm text-white/70`}>
          &copy; 2026 GreenEdge Lawn Care. Sample portfolio site.
        </p>
      </footer>
    </>
  );
}
