import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Compass, Rocket, LineChart, TrendingUp, Trophy } from 'lucide-react';
import medal from '@/assets/medal-mvp.png.asset.json';
import shield from '@/assets/shield-roi.png.asset.json';
import strategyImg from '@/assets/journey-strategy.webp.asset.json';
import executionImg from '@/assets/journey-execution.webp.asset.json';
import resultsImg from '@/assets/journey-results.webp.asset.json';

type Milestone = {
  step: string;
  stage: string;
  title: string;
  copy: string;
  detail: string;
  icon: typeof Compass;
  media?: string;
  art?: string;
};

const MILESTONES: Milestone[] = [
  {
    step: '01',
    stage: 'Strategy',
    title: 'The Blueprint',
    copy: 'Strategic conceptualization delivers intelligent digital marketing strategies.',
    detail: 'Market research, positioning and channel planning before a single rupee is spent.',
    icon: Compass,
    media: strategyImg.url,
  },
  {
    step: '02',
    stage: 'Execution',
    title: 'Creative Execution',
    copy: 'Campaigns, content and digital experiences built around your growth objectives.',
    detail: 'Web, design, video and paid media produced by one aligned in-house team.',
    icon: Rocket,
    media: executionImg.url,
  },
  {
    step: '03',
    stage: 'Optimization',
    title: 'The Precision Engine',
    copy: 'Data-driven marketing campaigns continuously optimized using performance insights.',
    detail: 'Weekly testing cycles on creative, audience and funnel performance.',
    icon: LineChart,
    art: shield.url,
  },
  {
    step: '04',
    stage: 'Results',
    title: 'Market Domination',
    copy: 'Campaign performance transformed into measurable business growth and stronger ROI.',
    detail: 'Transparent reporting tied to revenue, not vanity metrics.',
    icon: TrendingUp,
    media: resultsImg.url,
  },
  {
    step: '05',
    stage: 'Client Success',
    title: 'Client Victory',
    copy: 'Highly rated by clients. Built around measurable outcomes and long-term partnerships.',
    detail: '70+ five-star reviews across Google, Meta and LinkedIn.',
    icon: Trophy,
    art: medal.url,
  },
];

const NODE_X = [100, 300, 500, 700, 900];
const NODE_Y = [300, 210, 300, 210, 300];
const PATH_D =
  'M 20 300 L 100 300 C 200 300 200 210 300 210 C 400 210 400 300 500 300 C 600 300 600 210 700 210 C 800 210 800 300 900 300 L 980 300';

export default function ClientJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(4);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 60%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.4 });
  const glowOpacity = useTransform(progress, [0, 0.6, 1], [0.15, 0.4, 0.7]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="client-journey-heading"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#E71919]/10 blur-[140px]" />
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute right-0 bottom-0 h-[560px] w-[560px] translate-x-1/4 rounded-full bg-[#FF7A00]/10 blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#E71919]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E71919] shadow-[0_0_12px_rgba(231,25,25,0.9)]" />
            Our Client Journey
            <span className="h-1.5 w-1.5 rounded-full bg-[#E71919] shadow-[0_0_12px_rgba(231,25,25,0.9)]" />
          </div>
          <h2
            id="client-journey-heading"
            className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-[#F8FAFC] sm:text-5xl md:text-6xl"
          >
            Your Journey to{' '}
            <span className="bg-gradient-to-r from-[#E71919] via-[#FF7A00] to-[#E71919] bg-clip-text text-transparent">
              Digital Victory
            </span>
          </h2>
          <p className="mt-5 text-base font-medium text-[#A5B0C3] sm:text-lg">
            Follow our proven path from strategy to measurable growth.
          </p>
        </motion.div>

        {/* ---------- Desktop roadmap ---------- */}
        <div className="relative mt-16 hidden h-[620px] lg:block">
          <svg
            viewBox="0 0 1000 620"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pd-journey-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E71919" />
                <stop offset="55%" stopColor="#FF7A00" />
                <stop offset="100%" stopColor="#18C6D1" />
              </linearGradient>
            </defs>
            <path
              d={PATH_D}
              fill="none"
              stroke="#26354D"
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d={PATH_D}
              fill="none"
              stroke="url(#pd-journey-line)"
              strokeWidth={2.5}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: progress, filter: 'drop-shadow(0 0 6px rgba(231,25,25,0.7))' }}
            />
            {NODE_X.map((cx, i) => (
              <motion.circle
                key={cx}
                cx={cx}
                cy={NODE_Y[i]}
                r={5}
                fill={active === i ? '#FF7A00' : '#E71919'}
                initial={{ opacity: 0.25, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 * i, duration: 0.5 }}
                style={{ filter: 'drop-shadow(0 0 8px rgba(231,25,25,0.9))', transformOrigin: `${cx}px ${NODE_Y[i]}px` }}
              />
            ))}
            <circle r={4} fill="#18C6D1" style={{ filter: 'drop-shadow(0 0 8px #18C6D1)' }}>
              <animateMotion dur="7s" repeatCount="indefinite" path={PATH_D} />
            </circle>
            <circle r={3} fill="#FF7A00" opacity={0.8} style={{ filter: 'drop-shadow(0 0 8px #FF7A00)' }}>
              <animateMotion dur="7s" begin="2.5s" repeatCount="indefinite" path={PATH_D} />
            </circle>
          </svg>

          {MILESTONES.map((m, i) => {
            const above = NODE_Y[i] === 300;
            const isActive = active === i;
            const isFinal = i === MILESTONES.length - 1;
            return (
              <motion.div
                key={m.step}
                initial={{ opacity: 0, y: above ? 30 : -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setActive(i)}
                className="absolute w-[230px] -translate-x-1/2"
                style={{
                  left: `${NODE_X[i] / 10}%`,
                  ...(above
                    ? { bottom: `${((620 - NODE_Y[i]) / 620) * 100 + 4}%` }
                    : { top: `${(NODE_Y[i] / 620) * 100 + 4}%` }),
                }}
              >
                <MilestoneContent m={m} isActive={isActive} isFinal={isFinal} />
              </motion.div>
            );
          })}
        </div>

        {/* ---------- Mobile / tablet roadmap ---------- */}
        <div className="relative mt-14 lg:hidden">
          <div className="absolute bottom-2 left-[22px] top-2 w-px bg-[#26354D]" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-2 left-[21px] top-2 w-[2px] origin-top bg-gradient-to-b from-[#E71919] via-[#FF7A00] to-[#18C6D1] shadow-[0_0_12px_rgba(231,25,25,0.6)]"
          />
          <div className="space-y-12 pl-14">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(i)}
                className="relative"
              >
                <span
                  className={`absolute -left-[38px] top-2 h-3 w-3 rounded-full ring-4 ring-[#060B16] ${
                    active === i ? 'bg-[#FF7A00]' : 'bg-[#E71919]'
                  } shadow-[0_0_14px_rgba(231,25,25,0.9)]`}
                />
                <MilestoneContent m={m} isActive={active === i} isFinal={i === MILESTONES.length - 1} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center lg:mt-8"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full border border-[#26354D] bg-[#0E1728]/80 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#F8FAFC] backdrop-blur-xl transition-all duration-300 hover:border-[#E71919]/60 hover:shadow-[0_0_35px_rgba(231,25,25,0.35)]"
          >
            Start Your Story With Us
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#E71919] to-[#FF7A00] transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function MilestoneContent({
  m,
  isActive,
  isFinal,
}: {
  m: Milestone;
  isActive: boolean;
  isFinal: boolean;
}) {
  const Icon = m.icon;
  return (
    <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
      {m.art ? (
        <motion.img
          src={m.art}
          alt={`${m.title} award artwork`}
          loading="lazy"
          animate={{ y: [0, -8, 0], rotate: isActive ? [0, 1.5, 0] : 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className={`mb-3 object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] ${
            isFinal ? 'h-32 w-full lg:h-40' : 'h-24 w-full lg:h-28'
          } ${isActive ? 'brightness-110' : 'brightness-90'} transition-[filter] duration-500`}
        />
      ) : m.media ? (
        <div
          className={`relative mb-3 h-24 w-full overflow-hidden rounded-2xl border transition-all duration-500 lg:h-28 ${
            isActive ? 'border-[#E71919]/45 shadow-[0_0_28px_rgba(231,25,25,0.22)]' : 'border-[#26354D]'
          }`}
        >
          <img src={m.media} alt={m.title} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B16] via-[#060B16]/40 to-transparent" />
        </div>
      ) : null}

      <div className="flex items-center gap-2">
        <Icon className={`h-4 w-4 ${isFinal ? 'text-[#FF7A00]' : 'text-[#E71919]'}`} />
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A5B0C3]">
          {m.step} · {m.stage}
        </span>
      </div>
      <h3
        className={`mt-1.5 text-lg font-extrabold tracking-tight ${
          isFinal ? 'bg-gradient-to-r from-[#E71919] to-[#FF7A00] bg-clip-text text-transparent' : 'text-[#F8FAFC]'
        }`}
      >
        {m.title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[#A5B0C3]">{m.copy}</p>
      <p
        className={`overflow-hidden text-xs leading-relaxed text-[#A5B0C3]/70 transition-all duration-500 ${
          isActive ? 'mt-2 max-h-24 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {m.detail}
      </p>
    </div>
  );
}
