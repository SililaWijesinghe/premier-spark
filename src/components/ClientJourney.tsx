import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from '@tanstack/react-router';
import {
  ArrowRight,
  Users,
  RefreshCw,
  Search,
  Heart,
  TrendingUp,
  ChevronRight,
  ChevronsDown,
} from 'lucide-react';
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
  execution: {
    id: 'execution',
    label: 'Milestone 2',
    title: 'Creative Execution',
    kicker: 'Campaigns, content and digital experiences built around your growth objectives.',
    copy: 'From concept to launch, every asset is crafted to convert and scale across channels.',
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
  { x: 772, y: 705, text: 'Step 3: Depth' },
  { x: 930, y: 862, text: 'Step 4: Loyalty' },
];

type MobileStep = {
  num: string;
  step: string;
  id: string;
  title: string;
  desc: string;
  more: string;
  media?: string;
  art?: string;
};

const MOBILE_STEPS: MobileStep[] = [
  {
    num: '01',
    step: 'Step 1: Insight',
    id: 'strategy',
    title: 'The Blueprint',
    desc: 'Strategic conceptualization delivers intelligent digital marketing strategies.',
    more: 'Engineered for maximum conversion and high ROI from day one.',
    media: strategyImg.url,
  },
  {
    num: '02',
    step: 'Step 2: Clarity',
    id: 'execution',
    title: 'Creative Execution',
    desc: 'Campaigns, content and digital experiences built around your growth objectives.',
    more: 'Every asset is crafted to convert and scale across channels.',
    media: executionImg.url,
  },
  {
    num: '03',
    step: 'Step 3: Depth',
    id: 'precision',
    title: 'The Precision Engine',
    desc: 'Data-driven marketing campaigns continuously optimized using performance insights.',
    more: 'Precision targeting backed by advanced analytics and continuous optimization.',
    art: shield.url,
  },
  {
    num: '04',
    step: 'Step 4: Results',
    id: 'results',
    title: 'Market Domination',
    desc: 'Campaign performance transformed into measurable business growth and stronger ROI.',
    more: 'Campaign ROI: +45% average revenue lift across managed accounts.',
    media: resultsImg.url,
  },
  {
    num: '05',
    step: 'Step 5: Loyalty',
    id: 'acclaim',
    title: 'Client Victory',
    desc: 'Highly rated by clients. Built around measurable outcomes and long-term partnerships.',
    more: 'A 5.0 star rated agency trusted for sustained market dominance.',
    art: medal.url,
  },
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
        <div className="relative mt-10 lg:hidden">
          {/* rail */}
          <div className="absolute bottom-6 left-[26px] top-6 w-px bg-[#E71919]/20" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-6 left-[25px] top-6 w-[2px] origin-top bg-gradient-to-b from-[#E71919] via-[#FF7A00] to-[#E71919] shadow-[0_0_12px_rgba(231,25,25,0.7)]"
          />

          <div className="space-y-8">
            {MOBILE_STEPS.map(({ m, media, art, step, num }, i) => {
              const open = active === `${m.id}-${num}`;
              return (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* number badge */}
                  <span className="absolute left-0 top-4 grid h-[52px] w-[52px] place-items-center rounded-full border-2 border-[#E71919] bg-[#060B16] text-base font-extrabold text-[#F8FAFC] shadow-[0_0_22px_rgba(231,25,25,0.55)]">
                    {num}
                  </span>
                  {/* connector */}
                  <span className="absolute left-[22px] top-[70px] flex items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#E71919] shadow-[0_0_10px_rgba(231,25,25,0.9)]" />
                    <span className="h-px w-8 bg-[#E71919]/70" />
                    <span className="h-2 w-2 rounded-full bg-[#E71919] shadow-[0_0_8px_rgba(231,25,25,0.9)]" />
                  </span>

                  <button
                    type="button"
                    onClick={() => setActive(open ? null : `${m.id}-${num}`)}
                    aria-expanded={open}
                    className={`ml-[68px] block w-[calc(100%-68px)] rounded-3xl border bg-gradient-to-br from-[#0E1728]/90 to-[#060B16]/90 p-3 text-left backdrop-blur-xl transition-all duration-500 ${
                      open
                        ? 'border-[#FF7A00]/70 shadow-[0_0_38px_rgba(255,122,0,0.28)]'
                        : 'border-[#26354D] shadow-[0_0_22px_rgba(231,25,25,0.12)]'
                    }`}
                  >
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                      <div className="min-w-0">
                        {art ? (
                          <motion.img
                            src={art}
                            alt={m.title}
                            loading="lazy"
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="mx-auto mb-3 h-36 w-full object-contain drop-shadow-[0_22px_40px_rgba(0,0,0,0.9)]"
                          />
                        ) : (
                          <div className="relative mb-3 h-32 w-full overflow-hidden rounded-2xl border border-[#E71919]/30">
                            <img src={media!} alt={m.title} loading="lazy" className="h-full w-full object-cover" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060B16]/70 via-transparent to-transparent" />
                          </div>
                        )}
                        <p className="text-[12px] font-semibold text-[#E71919]">{step}</p>
                        <h3 className="mt-1 text-lg font-extrabold tracking-tight text-[#F8FAFC]">{m.title}</h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-[#A5B0C3]">{m.kicker}</p>
                        <p
                          className={`overflow-hidden text-[13px] leading-relaxed text-[#A5B0C3]/80 transition-all duration-500 ${
                            open ? 'mt-2 max-h-40 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          {m.copy}
                        </p>
                      </div>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-400 ${
                          open
                            ? 'rotate-90 border-[#FF7A00] text-[#FF7A00] shadow-[0_0_18px_rgba(255,122,0,0.45)]'
                            : 'border-[#E71919] text-[#F8FAFC] shadow-[0_0_14px_rgba(231,25,25,0.45)]'
                        }`}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </button>

                  {i < MOBILE_STEPS.length - 1 && (
                    <ChevronsDown className="absolute -bottom-6 left-[16px] h-5 w-5 text-[#E71919] drop-shadow-[0_0_6px_rgba(231,25,25,0.8)]" />
                  )}
                </motion.div>
              );
            })}
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
