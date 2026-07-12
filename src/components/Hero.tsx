"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { hero } from "@/data/portfolio";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = useMemo(() => hero.roles, []);
  const focusAreas = useMemo(() => hero.focusAreas ?? [], []);
  const metrics = useMemo(() => hero.metrics ?? [], []);

  useEffect(() => {
    const currentRole = roles[index % roles.length];
    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setIsDeleting(true);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => window.clearTimeout(timer);
  }, [text, isDeleting, index, roles, typingSpeed]);

  useEffect(() => {
    setTypingSpeed(isDeleting ? 40 : 100);
  }, [isDeleting]);

  return (
    <section id="home" className="relative overflow-hidden px-6 py-12 md:px-8 md:py-20 lg:px-12 lg:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,255,0.12),_transparent_20%),radial-gradient(circle_at_80%_25%,_rgba(124,58,237,0.16),_transparent_15%)]" />
      <div className="absolute inset-x-0 top-10 h-[420px] bg-gradient-to-b from-[#00d4ff]/20 via-transparent to-transparent blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-20 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
        <div className="relative text-white">

          {/* Notebook Background */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_bottom,transparent_31px,#ffffff_32px)] bg-[length:100%_32px]" />

          {/* Date */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <p className="font-mono text-lg text-slate-300">
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </motion.div>

          {/* Top Area */}
          <div className="relative flex flex-col gap-8 lg:flex-row">
            {/* CONTENT */}
            <div className="flex-1">

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-5 py-2 text-xs uppercase tracking-[0.32em] text-slate-300"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                {hero.role}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-5xl font-black tracking-[-0.04em] leading-tight lg:text-7xl"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-white bg-clip-text text-transparent">
                  {hero.name}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-5 max-w-xl text-base leading-8 text-slate-400 font-light"
              >
                {hero.tagline}
              </motion.p>

              {/* Curved Arrow Note 1 */}
              <div className="absolute right-10 top-10 hidden xl:block">
                <svg width="120" height="90">
                  <path
                    d="M100 10 C30 0 40 70 50 80"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <p className="font-mono text-sm text-slate-400">
                  Always curious,
                  <br />
                  always learning.
                </p>
              </div>

              {/* Curved Arrow Note 2 */}
              {/* <div className="absolute left-0 top-[350px] hidden xl:block">
                <svg width="100" height="80">
                  <path
                    d="M20 10 C0 50 50 70 80 60"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <p className="font-mono text-sm text-slate-400">
                  People-first mindset,
                  <br />
                  tech-powered impact.
                </p>
              </div> */}

            </div>
          </div>

          {/* Digital Diary Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative mt-12 rounded-[2rem] border border-white/10 bg-[#0f1720]/70 p-8 backdrop-blur-xl"
          >
            <div className="absolute left-6 top-4 text-4xl text-slate-500">
              📎
            </div>

            <p className="mb-5 text-sm uppercase tracking-[0.34em] text-cyan-300">
              Current Focus
            </p>

            <div className="flex flex-wrap gap-3">
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-3xl font-semibold text-white">
                {text || roles[0]}
              </span>

              <span className="animate-pulse text-cyan-400">|</span>
            </div>

            <div className="mt-8 flex items-end justify-between">

              {/* Left Side Note */}
              <div className="flex items-center gap-4">
                <svg width="90" height="40">
                  <path
                    d="M5 20 C40 0 50 40 85 20"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                <p className="font-mono text-sm text-slate-400">
                  Building better AI solutions,
                  <br />
                  one commit at a time.
                </p>
              </div>

              {/* Right Side Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="ghost"
                  onClick={() => (location.hash = "#projects")}
                >
                  View My Work
                </Button>
              </div>

            </div>

          </motion.div>

          {/* Bottom Note */}
          <div className="mt-8 ml-4 hidden xl:flex items-center gap-3">
            <svg width="70" height="50">
              <path
                d="M50 45 C20 40 10 10 20 0"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
              />
            </svg>

            <p className="font-mono text-sm text-slate-400">
              Turning ideas into intelligent experiences.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b11]/80 p-4 md:p-6 shadow-glow backdrop-blur-3xl"
        >
          <div className="absolute -right-12 top-10 h-44 w-44 rounded-full bg-[#00d4ff]/15 blur-3xl" />
          <div className="absolute -left-10 bottom-8 h-36 w-36 rounded-full bg-[#7c3aed]/15 blur-3xl" />
          <div className="relative space-y-8">
            <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-inner">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Focus areas</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Engineering intelligent AI solutions.</p>
                </div>
                <div className="rounded-full border border-white/10 bg-[#0b1220]/90 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300">
                  Available
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-[2rem] border border-white/10 bg-[#06101f]/90 p-6 md:p-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-400">{metric.label}</p>
                  <p className="mt-4 text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-2 rounded-[2rem] border border-white/10 bg-[#06101f]/90 p-5 md:p-6 leading-[1.6]">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">System insight</p>
              <p className="mt-4 text-lg text-slate-200">
                I believe AI has the potential to reshape how we solve everyday problems. Inspired by that vision, I'm dedicated to learning, building, and creating intelligent applications that make technology more useful and accessible.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}