"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SocialMediaComponents from "./social-media";
import Image from "next/image";

const HeaderComponent = () => {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  const NAVIGATION = [
    { href: "/", label: "Home" },
    { href: "/personal-training", label: "Personal Training" },
    { href: "/about-us", label: "About" },
    { href: "/blogs", label: "Blog" },
    { href: "/from-abroad", label: "From Abroad" },
    { href: "/for-employers", label: "For Employers" },
    { href: "/contact", label: "Contact" },
  ];
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setHidden(y > lastY.current && y > 80); // hide when scrolling down past 80px
          setAtTop(y < 10); // lighter bg at top
          lastY.current = y;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50",
          // glass/blur background
          "backdrop-blur-md supports-[backdrop-filter]:bg-black/15",
          atTop ? "bg-black/10" : "bg-black/40",
          "border-b border-white/10",
          // show/hide transitions
          "transition-all duration-300 ease-out",
          hidden ? "opacity-0" : "opacity-100",
        ].join(" ")}
      >
        <div className="mx-auto max-w-screen-xl grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-3">
          {/* Left: Logo */}
          <div className="justify-self-start">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/images/relysian-logo-2.png" alt="Relysian" width={184} height={36} priority />
            </Link>
          </div>

          {/* Center: Nav (hidden on <md) */}
          <nav className="hidden md:flex gap-6 justify-self-center">
            {NAVIGATION.map((item) => (
              <Link key={item.href} href={item.href} className="uppercase text-xs tracking-widest text-zinc-200 hover:text-white transition">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA + Socials */}
          <div className="justify-self-end flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-wide text-white hover:border-white/40 transition"
            >
              Waiting List
            </Link>

            <SocialMediaComponents />
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from sitting under the fixed header */}
      <div className="h-14 md:h-14" />
    </>
  );
};

export default HeaderComponent;
