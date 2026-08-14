import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Users, RefreshCw, Search, Heart, TrendingUp } from 'lucide-react';
import medal from '@/assets/medal-mvp.png.asset.json';
import shield from '@/assets/shield-roi.png.asset.json';
import strategyImg from '@/assets/journey-strategy.webp.asset.json';
import executionImg from '@/assets/journey-execution.webp.asset.json';
import resultsImg from '@/assets/journey-results.webp.asset.json';

/* ------------------------------------------------------------------ */
/*  Canvas: 1536 x 940 design space, everything positioned in percent   */
/* ------------------------------------------------------------------ */
const W = 1536;
const OFFSET = 175;
const H = 940 - OFFSET;
const px = (x: number) => `${(x / W) * 100}%`;
const py = (y: number) => `${(y / H) * 100}%`;
const pyAbs = (y: number) => `${((y - OFFSET) / H) * 100}%`;

type Milestone = {
  id: string;
  label: string;
  title: string;
  kicker: string;
  copy: string;
};

const MILESTONES: Record<string, Milestone> = {
  strategy: {
    id: 'strategy',
    label: 'Milestone 1',
    title: 'The Blueprint (Strategy)',
    kicker: '1. Strategic Conceptualization',
    copy: 'Results-driven digital marketing strategies. Engineered for maximum conversion and high ROI.',
  },
  results: {
    id: 'results',
    label: 'Milestone 4',
    title: 'Market Domination (Results)',
    kicker: '4. Proven Growth',
    copy: 'Campaign performance transformed into measurable business growth. Campaign ROI: +45% revenue lift.',
  },
  precision: {
    id: 'precision',
    label: 'Milestone 5',
    title: 'The Precision Engine (Data Foundation)',
    kicker: '5. Underlying Precision',
    copy: 'Data-driven marketing campaigns. Precision targeting backed by advanced analytics and continuous optimization.',
  },
  acclaim: {
    id: 'acclaim',
    label: 'Milestone 6',
    title: 'Client Victory (Acclaim)',
    kicker: '6. Client Acclaim',
    copy: 'Highly rated by clients. A 5.0 star rated agency built on long-term partnerships.',
  },
};

/* Serpentine route, drawn in the same 1536x940 space */
const PATH_MAIN =
  'M 360 323 L 700 323 M 810 323 L 1245 323 M 360 350 L 360 610 M 760 445 L 760 500 M 760 548 C 760 640 620 660 700 740 C 730 772 745 760 755 757 M 790 757 C 900 757 980 828 1150 828 M 1205 828 L 1420 828 M 1177 800 C 1177 640 1097 620 1097 460';

const NODES = [
  { x: 360, y: 323, Icon: Users, key: 'strategy' },
  { x: 760, y: 523, Icon: RefreshCw, key: 'precision' },
  { x: 755, y: 757, Icon: Search, key: 'precision' },
  { x: 1177, y: 828, Icon: Heart, key: 'acclaim' },
  { x: 1245, y: 323, Icon: TrendingUp, key: 'results' },
] as const;

const STEPS = [
  { x: 470, y: 300, text: 'Step 1: Insight' },
  { x: 668, y: 480, text: 'Step 2: Clarity' },
  { x: 812, y: 715, text: 'Step 3: Depth' },
  { x: 930, y: 862, text: 'Step 4: Loyalty' },
];

export default function ClientJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>('acclaim');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 65%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 55, damping: 22, mass: 0.4 });
  const glow = useTransform(progress, [0, 0.6, 1], [0.12, 0.35, 0.6]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="client-journey-heading"
      className="relative overflow-hidden bg-[#060B16] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#E71919]/8 blur-[160px]" />
        <motion.div
          style={{ opacity: glow }}
          className="absolute bottom-0 right-0 h-[560px] w-[560px] translate-x-1/4 rounded-full bg-[#FF7A00]/10 blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#E71919]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E71919] shadow-[0_0_12px_rgba(231,25,25,0.9)]" />
            Our Client Journey
            <span className="h-1.5 w-1.5 rounded-full bg-[#E71919] shadow-[0_0_12px_rgba(231,25,25,0.9)]" />
          </div>
          <h2
            id="client-journey-heading"
            className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-[#F8FAFC] sm:text-5xl md:text-[3.6rem]"
          >
            Your Journey to Digital Victory:
            <br className="hidden sm:block" />{' '}
            <span className="whitespace-nowrap">
              The Premier{' '}
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#E71919] bg-clip-text text-transparent">
                Digital Storyline.
              </span>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-[#A5B0C3] sm:text-lg">
            Follow our proven flow from initial concept to sustained market dominance.
          </p>
        </motion.div>

        {/* ---------------- Desktop cinematic map ---------------- */}
        <div
          className="relative mx-auto mt-10 hidden w-full lg:block"
          style={{ aspectRatio: `${W} / ${H}` }}
          onMouseLeave={() => setActive('acclaim')}
        >
          {/* route */}
          <svg
            viewBox={`0 ${OFFSET} ${W} ${H}`}
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
            fill="none"
          >
            <path
              d={PATH_MAIN}
              stroke="#E71919"
              strokeOpacity={0.18}
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d={PATH_MAIN}
              stroke="#E71919"
              strokeWidth={1.8}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: progress, filter: 'drop-shadow(0 0 6px rgba(231,25,25,0.85))' }}
            />
            {/* directional arrows */}
            {[
              { x: 556, y: 323, r: 0 },
              { x: 975, y: 323, r: 0 },
              { x: 360, y: 605, r: 90 },
              { x: 1097, y: 470, r: -90 },
              { x: 728, y: 757, r: 0 },
            ].map((a, i) => (
              <motion.path
                key={i}
                d="M -6 -6 L 6 0 L -6 6 Z"
                fill="#E71919"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15 }}
                transform={`translate(${a.x} ${a.y}) rotate(${a.r})`}
                style={{ filter: 'drop-shadow(0 0 5px rgba(231,25,25,0.9))' }}
              />
            ))}
            <path d="M 993 828 l 10 -10 l 10 10 l -10 10 Z" fill="#E71919" opacity={0.9} />
            {/* travelling pulses */}
            <circle r={3.5} fill="#18C6D1" style={{ filter: 'drop-shadow(0 0 8px #18C6D1)' }}>
              <animateMotion dur="6s" repeatCount="indefinite" path="M 360 323 L 1245 323" />
            </circle>
            <circle r={3} fill="#FF7A00" style={{ filter: 'drop-shadow(0 0 8px #FF7A00)' }}>
              <animateMotion
                dur="7s"
                begin="1.2s"
                repeatCount="indefinite"
                path="M 760 548 C 760 640 620 660 700 740 C 730 772 745 760 755 757 C 900 757 980 828 1150 828"
              />
            </circle>
          </svg>

          {/* icon nodes */}
          {NODES.map(({ x, y, Icon, key }, i) => (
            <motion.button
              type="button"
              key={`${x}-${y}`}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActive(key)}
              onFocus={() => setActive(key)}
              aria-label={MILESTONES[key]!.title}
              className={`absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-[#0E1728] outline-none transition-all duration-400 ${
                active === key
                  ? 'scale-110 border-[#FF7A00] shadow-[0_0_28px_rgba(255,122,0,0.55)]'
                  : 'border-[#E71919]/70 shadow-[0_0_16px_rgba(231,25,25,0.4)]'
              }`}
              style={{ left: px(x), top: pyAbs(y) }}
            >
              <Icon className={`h-4 w-4 ${active === key ? 'text-[#FF7A00]' : 'text-[#E71919]'}`} />
            </motion.button>
          ))}

          {/* step labels */}
          {STEPS.map((s, i) => (
            <motion.span
              key={s.text}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12 }}
              className="absolute -translate-y-1/2 whitespace-nowrap text-[13px] font-medium text-[#F8FAFC]/90"
              style={{ left: px(s.x), top: pyAbs(s.y) }}
            >
              {s.text}
            </motion.span>
          ))}

          {/* Milestone 1 – Strategy */}
          <Media
            src={strategyImg.url}
            alt="Strategy huddle"
            active={active === 'strategy'}
            onHover={() => setActive('strategy')}
            box={{ x: 60, y: 253, w: 258, h: 196 }}
          />
          <Caption m={MILESTONES.strategy!} active={active === 'strategy'} box={{ x: 60, y: 468, w: 290 }} />

          {/* Precision shield art */}
          <Art
            src={shield.url}
            alt="Precision strategy award"
            active={active === 'precision'}
            onHover={() => setActive('precision')}
            box={{ x: 640, y: 230, w: 240, h: 215 }}
            float={7}
          />

          {/* Milestone 4 – Results */}
          <Media
            src={resultsImg.url}
            alt="Campaign ROI dashboard"
            active={active === 'results'}
            onHover={() => setActive('results')}
            box={{ x: 1000, y: 258, w: 212, h: 178 }}
          />
          <Caption m={MILESTONES.results!} active={active === 'results'} box={{ x: 1288, y: 300, w: 232 }} />

          {/* Milestone 5 – Precision */}
          <Media
            src={executionImg.url}
            alt="Data-driven execution"
            active={active === 'precision'}
            onHover={() => setActive('precision')}
            box={{ x: 398, y: 500, w: 226, h: 218 }}
          />
          <Caption m={MILESTONES.precision!} active={active === 'precision'} box={{ x: 398, y: 736, w: 268 }} />

          {/* Milestone 6 – Acclaim */}
          <Media
            src={strategyImg.url}
            alt="Client success briefing"
            active={active === 'acclaim'}
            onHover={() => setActive('acclaim')}
            box={{ x: 902, y: 545, w: 218, h: 205 }}
          />
          <Caption m={MILESTONES.acclaim!} active={active === 'acclaim'} box={{ x: 1145, y: 578, w: 226 }} />

          {/* Final reward – MVP medal */}
          <Art
            src={medal.url}
            alt="Clients' Choice MVP award"
            active={active === 'acclaim'}
            onHover={() => setActive('acclaim')}
            box={{ x: 1246, y: 636, w: 250, h: 240 }}
            float={10}
            hero
          />

          {/* decorative medal echo */}
          <Art
            src={medal.url}
            alt=""
            decorative
            active={false}
            box={{ x: 120, y: 676, w: 220, h: 200 }}
            float={12}
          />
        </div>

        {/* ---------------- Mobile vertical journey ---------------- */}
        <div className="relative mt-12 lg:hidden">
          <div className="absolute bottom-2 left-[22px] top-2 w-px bg-[#E71919]/20" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-2 left-[21px] top-2 w-[2px] origin-top bg-gradient-to-b from-[#E71919] via-[#FF7A00] to-[#18C6D1] shadow-[0_0_12px_rgba(231,25,25,0.6)]"
          />
          <div className="space-y-11 pl-14">
            {[
              { m: MILESTONES.strategy!, media: strategyImg.url, Icon: Users },
              { m: MILESTONES.precision!, media: executionImg.url, Icon: Search, art: shield.url },
              { m: MILESTONES.results!, media: resultsImg.url, Icon: TrendingUp },
              { m: MILESTONES.acclaim!, art: medal.url, Icon: Heart, hero: true },
            ].map(({ m, media, art, Icon, hero }) => (
              <motion.button
                type="button"
                key={m.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(active === m.id ? null : m.id)}
                className="relative block w-full text-left"
              >
                <span
                  className={`absolute -left-[46px] top-1 grid h-8 w-8 place-items-center rounded-full border bg-[#0E1728] ${
                    active === m.id
                      ? 'border-[#FF7A00] shadow-[0_0_20px_rgba(255,122,0,0.5)]'
                      : 'border-[#E71919]/70 shadow-[0_0_14px_rgba(231,25,25,0.45)]'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${active === m.id ? 'text-[#FF7A00]' : 'text-[#E71919]'}`} />
                </span>

                {art ? (
                  <motion.img
                    src={art}
                    alt={m.title}
                    loading="lazy"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className={`mb-3 w-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] ${
                      hero ? 'h-44' : 'h-32'
                    }`}
                  />
                ) : media ? (
                  <div className="relative mb-3 h-40 w-full overflow-hidden rounded-2xl border border-[#E71919]/35 shadow-[0_0_26px_rgba(231,25,25,0.18)]">
                    <img src={media} alt={m.title} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B16] via-[#060B16]/30 to-transparent" />
                  </div>
                ) : null}

                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A5B0C3]">{m.label}</p>
                <h3 className="mt-1 text-lg font-extrabold tracking-tight text-[#F8FAFC]">{m.title}</h3>
                <p className="mt-1.5 text-[13px] font-medium text-[#A5B0C3]">{m.kicker}</p>
                <p
                  className={`overflow-hidden text-[13px] leading-relaxed text-[#A5B0C3]/80 transition-all duration-500 ${
                    active === m.id ? 'mt-2 max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {m.copy}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex justify-center lg:mt-2"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 rounded-full border border-[#E71919]/60 bg-[#0E1728]/60 px-9 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#F8FAFC] shadow-[0_0_22px_rgba(231,25,25,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#FF7A00] hover:shadow-[0_0_45px_rgba(255,122,0,0.4)]"
          >
            Start Your Story With Us
            <ArrowRight className="h-4 w-4 text-[#E71919] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#FF7A00]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ pieces ------------------------------ */

type Box = { x: number; y: number; w: number; h?: number };

function Media({
  src,
  alt,
  box,
  active,
  onHover,
}: {
  src: string;
  alt: string;
  box: Box;
  active: boolean;
  onHover: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      className="absolute"
      style={{ left: px(box.x), top: pyAbs(box.y), width: px(box.w), height: py(box.h ?? 180) }}
    >
      <motion.div
        animate={{ y: active ? -6 : 0, scale: active ? 1.03 : 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`h-full w-full overflow-hidden rounded-2xl border transition-all duration-500 ${
          active
            ? 'border-[#E71919] shadow-[0_0_45px_rgba(231,25,25,0.45)]'
            : 'border-[#E71919]/35 shadow-[0_0_22px_rgba(231,25,25,0.16)]'
        }`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover transition-all duration-500 ${
            active ? 'brightness-110' : 'brightness-75'
          }`}
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#060B16]/70 via-transparent to-transparent" />
      </motion.div>
    </motion.div>
  );
}

function Art({
  src,
  alt,
  box,
  active,
  onHover,
  float = 8,
  hero = false,
  decorative = false,
}: {
  src: string;
  alt: string;
  box: Box;
  active: boolean;
  onHover?: () => void;
  float?: number;
  hero?: boolean;
  decorative?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: decorative ? 0.45 : 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      className="absolute"
      style={{ left: px(box.x), top: pyAbs(box.y), width: px(box.w), height: py(box.h ?? 200) }}
      aria-hidden={decorative || undefined}
    >
      <div
        className={`pointer-events-none absolute inset-x-6 bottom-2 h-10 rounded-[50%] blur-2xl transition-opacity duration-500 ${
          active ? 'bg-[#FF7A00]/45 opacity-100' : 'bg-[#E71919]/30 opacity-70'
        }`}
      />
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        animate={{ y: [0, -float, 0], rotate: active && hero ? [0, 1.5, 0] : 0 }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className={`relative h-full w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)] transition-[filter] duration-500 ${
          active ? 'brightness-115' : 'brightness-90'
        }`}
      />
    </motion.div>
  );
}

function Caption({ m, box, active }: { m: Milestone; box: Box; active: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute"
      style={{ left: px(box.x), top: pyAbs(box.y), width: px(box.w) }}
    >
      <p className="text-[13px] font-medium text-[#A5B0C3]">{m.label}:</p>
      <h3
        className={`mt-1 text-[19px] font-bold leading-snug tracking-tight transition-colors duration-500 ${
          active ? 'text-[#F8FAFC]' : 'text-[#F8FAFC]/75'
        }`}
      >
        {m.title}
      </h3>
      <p className="mt-2.5 text-[13px] font-medium text-[#A5B0C3]">{m.kicker}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-[#A5B0C3]/80">{m.copy}</p>
      <span
        className={`mt-3 block h-px origin-left bg-gradient-to-r from-[#E71919] to-transparent transition-transform duration-500 ${
          active ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </motion.div>
  );
}
