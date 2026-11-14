'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpLeft, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 38 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const reveal = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 22 };

  return (
    <main
      dir="rtl"
      className="launch-shell"
      style={{
        '--pointer-x': `${pointer.x}%`,
        '--pointer-y': `${pointer.y}%`,
      } as React.CSSProperties}
    >
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="frame-line frame-top" aria-hidden="true" />
      <div className="frame-line frame-side frame-side-right" aria-hidden="true" />
      <div className="frame-line frame-side frame-side-left" aria-hidden="true" />

      <header className="site-header">
        <div className="header-status">
          <span className="status-dot" />
          <span>رونمایی رسمی</span>
        </div>

        <div className="brand-lockup" dir="ltr">
          <span className="brand-mark">SM</span>
          <span className="brand-name">SARVE MANDEGAR</span>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <motion.div
          className="hero-copy"
          initial={reveal}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow"><span /> THE ETERNAL SIGNATURE</p>
          <h1 id="hero-title">به‌زودی</h1>
          <p className="hero-description">هنرِ ماندگار کردن افتخار</p>
        </motion.div>

        <motion.div
          className="logo-stage"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="logo-halo" aria-hidden="true" />
          <div className="logo-sweep" aria-hidden="true" />
          <div className="gold-frame">
            <Image
              src="/images/file_00000000292c8243af3cf25148e480ca.png"
              alt="نشان رسمی تندیس نگاران سرو ماندگار"
              width={896}
              height={1536}
              priority
              className="official-logo"
            />
          </div>
        </motion.div>

        <motion.div
          className="hero-details"
          initial={reveal}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="launch-line">به‌زودی رونمایی می‌شود.</p>
          <p className="service-line">طراحی و ساخت لوح تقدیر، تندیس و هدیه‌های سازمانی خاص</p>
          <a className="contact-button" href="tel:+989124470133">
            <span className="button-icon"><ArrowUpLeft size={17} strokeWidth={1.5} /></span>
            <span>تماس با ما</span>
          </a>
        </motion.div>
      </section>

      <footer className="site-footer" dir="ltr">
        <span>SARVE MANDEGAR — COMING SOON</span>
        <a href="tel:+989124470133" dir="ltr" aria-label="تماس با شماره ۰۹۱۲۴۴۷۰۱۳۳">
          <Phone size={14} strokeWidth={1.5} />
          ۰۹۱۲۴۴۷۰۱۳۳
        </a>
      </footer>
    </main>
  );
}
