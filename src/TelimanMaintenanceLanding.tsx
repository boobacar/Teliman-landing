import React from "react";
import { motion } from "framer-motion";
import { Wrench, PhoneCall, Mail, MapPin } from "lucide-react";
import camions from "./assets/camions.jpeg";
import logo from "./assets/logo.png";

// Couleurs extraites du logo (dominante brun + fond beige) + accent vert
// primaire (brun): #8d603b
// fond: #efeeea
// accent (vert suggéré pour rappeler la barre verte du logo): #0d6b3a

export default function TelimanMaintenanceLanding() {
  const COLORS = {
    primary: "#8d603b",
    background: "#efeeea",
    accent: "#0d6b3a",
    text: "#1f2937",
  } as const;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: COLORS.background, color: COLORS.text }}
    >
      {/* Header */}
      <header
        className="w-full border-b sticky top-0 z-40"
        style={{
          borderColor: COLORS.primary + "33",
          background: "rgba(255,255,255,0.7)",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 ">
            {/* Remplace le src ci-dessous par le chemin de ton logo dans /public (ex: /teliman-logo.png) */}
            <img
              src={logo}
              alt="Teliman Logistique"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div
            className="text-sm font-medium"
            style={{ color: COLORS.primary }}
          >
            Transport & logistique
          </div>
        </div>
      </header>

      {/* Hero plein écran */}
      <section className="relative flex-1">
        <div className="absolute inset-0">
          {/* Image d'arrière‑plan (camions) — remplace par ta photo si besoin */}
          <img
            src={camions}
            alt="Camions sur site minier"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55))",
            }}
          />
        </div>

        <div className="relative z-10 mt-20 mx-auto h-full max-w-6xl px-4 py-28 md:py-40 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Teliman Logistique
            </h1>

            <div
              className="mt-10 inline-flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold"
              style={{ background: "#ffffff", color: COLORS.text }}
            >
              <Wrench className="h-5 w-5" style={{ color: COLORS.accent }} />
              <span style={{ color: COLORS.primary }}>
                Site web en maintenance
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full border-t"
        style={{ borderColor: COLORS.primary + "33", background: "#fff" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Teliman Logistique"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="text-sm text-gray-600 md:text-center">
            © {new Date().getFullYear()} Teliman Logistique — Tous droits
            réservés
          </div>
          <div className="flex flex-col gap-2 md:items-end text-sm">
            <a
              href="mailto:contact@teliman-logistique.com"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <Mail className="h-4 w-4" style={{ color: COLORS.primary }} />{" "}
              marie@telimantologiste.com
            </a>
            <a
              href="tel:+221000000000"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <PhoneCall
                className="h-4 w-4"
                style={{ color: COLORS.primary }}
              />{" "}
              +225 07 04 44 66 83
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" style={{ color: COLORS.primary }} />{" "}
              Cote d'Ivoire
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
