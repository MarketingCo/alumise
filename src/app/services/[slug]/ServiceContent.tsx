"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Thermometer,
  Shield,
  Wind,
  Layers,
  Sun,
  Lock,
  Ruler,
  Droplets,
  Volume2,
  Eye,
  Hammer,
  CheckCircle2,
  ArrowRight,
  Zap,
  Award,
  Clock,
  Wrench,
} from "lucide-react";
import type { Service } from "@/data/services";

const featureIcons = [
  Thermometer,
  Shield,
  Wind,
  Layers,
  Sun,
  Lock,
  Ruler,
  Droplets,
  Volume2,
  Eye,
  Hammer,
  Zap,
  Award,
  Clock,
  Wrench,
];

function getFeatureIcon(index: number) {
  return featureIcons[index % featureIcons.length];
}

export default function ServiceContent({ service }: { service: Service }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue block mb-4">
              Engineering Detail
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Key Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => {
              const Icon = getFeatureIcon(idx);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="group p-8 border border-gray-100 hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="mb-6">
                    <Icon className="w-8 h-8 text-brand-blue group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-sm font-bold text-brand-charcoal uppercase tracking-tight leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue block mb-4">
              Why Alumise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-6 bg-white border border-gray-100 hover:border-brand-blue/30 hover:shadow-md transition-all"
              >
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0" />
                </div>
                <p className="text-sm font-medium text-brand-charcoal leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-blue block mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {service.faq.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-bold text-brand-charcoal uppercase tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-blue flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-sm text-gray-500 font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
