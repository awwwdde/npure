import { useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import videoBg from '../content/npure.mp4';
const PETAL_COUNT = 22;

function Petals() {
  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }).map((_, i) => {
        const left = Math.random() * 100;
        const duration = 9 + Math.random() * 10;
        const delay = -Math.random() * duration;
        const size = i % 6 === 0 ? 'petal--lg' : i % 3 === 0 ? 'petal--sm' : '';
        const drift = (Math.random() - 0.5) * 120;
        const rot = Math.random() * 360;
        return { left, duration, delay, size, drift, rot, id: i };
      }),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className={`petal ${p.size}`}
          style={
            {
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              ['--drift' as string]: `${p.drift}px`,
              transform: `rotate(${p.rot}deg)`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const smoothStopNearEnd = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;

    const remaining = video.duration - video.currentTime;
    if (remaining <= 0.9) {
      const progress = Math.max(0, Math.min(1, remaining / 0.9));
      video.playbackRate = Math.max(0.2, progress);
    } else if (video.playbackRate !== 1) {
      video.playbackRate = 1;
    }
  };

  const freezeLastFrame = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    video.currentTime = Math.max(0, video.duration - 0.04);
    video.playbackRate = 1;
    video.pause();
  };

  return (
    <section className="relative h-[100svh] w-full">
      <div className="relative h-[100svh] w-full overflow-hidden bg-ink-900">
        <motion.div
          className="absolute inset-0 cinema"
          initial={{ scale: 1.08, opacity: 0.75 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={videoBg}
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={smoothStopNearEnd}
            onEnded={freezeLastFrame}
            onLoadedData={() => {
              const video = videoRef.current;
              if (!video) return;
              video.play().catch(() => {
                // In restrictive autoplay environments keep first available frame.
                video.pause();
              });
            }}
          />
        </motion.div>

        <div style={{ opacity: 0.1 }} className="pointer-events-none absolute inset-0 bloom" />
        <div style={{ opacity: 0.35 }} className="pointer-events-none absolute inset-0 vignette" />
        <div className="ambient-orb breathe-slow pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full blur-3xl" />
        <div className="ambient-orb breathe pointer-events-none absolute -right-16 bottom-20 h-60 w-60 rounded-full blur-3xl" />

        {/* Colour wash — deep + soft gradient over the footage */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/25 via-transparent to-ink-900" />

        {/* Drifting petals */}
        <Petals />

        {/* Top meta strip */}
        <motion.div
          className="container-edge absolute inset-x-0 top-28 z-10 flex items-center justify-between text-bone-100/70"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="micro-label">NeoPure · Est. 2014</span>
          <span className="hidden items-center gap-3 md:flex">
            <span className="h-1 w-1 rounded-full bg-bone-100" />
            <span className="micro-label !text-bone-100/60">Москва · Санкт-Петербург</span>
          </span>
        </motion.div>

        <motion.div
          className="container-edge absolute inset-x-0 bottom-14 z-10 md:bottom-24"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h1 className="display max-w-[11ch] text-[56px] text-bone-50 sm:text-[88px] md:text-[128px] lg:text-[152px]">
              Живое<br />
              <span className="italic text-bone-100/85">в&nbsp;стекле.</span>
            </h1>
            <div className="flex max-w-sm flex-col gap-6">
              <p className="text-[15px] leading-[1.7] text-bone-100/80">
                Замкнутые экосистемы — миниатюрные сады, которые живут годами
                при минимальном уходе.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="/catalog" className="btn-primary">Каталог</a>
                <a href="/about" className="btn-outline">О студии</a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex items-center gap-6">
            <span className="micro-label">01 / Intro</span>
            <div className="hairline flex-1" />
            <span className="micro-label">Scroll</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
