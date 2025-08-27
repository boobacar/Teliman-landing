import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Wrench, PhoneCall, Mail, MapPin } from "lucide-react";

// Assets locaux (tu les as déjà ajoutés)
import camions from "./assets/camions.jpeg";
import logo from "./assets/logo.png";

export default function TelimanMaintenanceLanding() {
  // SEO: garde false pendant la maintenance
  const ALLOW_INDEXING = true;

  // Couleurs extraites du logo (dominante brun + fond beige) + accent vert
  const COLORS = {
    primary: "#8d603b",
    background: "#efeeea",
    accent: "#0d6b3a",
    text: "#1f2937",
  };

  // Renseigne ton domaine final ici
  const SITE_URL = "https://telimanlogistique.com";
  // Pour les metas OG/JSON-LD, place une copie du logo dans /public/teliman-logo.png
  // et une image sociale /public/og-image.jpg (1200x630)
  const LOGO_URL = SITE_URL + "/logo.png";
  const OG_IMAGE = SITE_URL + "/og-image.jpg";

  // Données structurées (Organization + Service)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Teliman Logistique",
        url: SITE_URL,
        logo: LOGO_URL,
        address: {
          "@type": "PostalAddress",
          addressCountry: "CI",
          addressLocality: "Côte d’Ivoire",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+2250704446683",
            email: "contact@teliman-logistique.com",
            contactType: "customer service",
            availableLanguage: ["fr"],
          },
        ],
      },
      {
        "@type": "Service",
        name: "Transport de sables, granulats et logistique minière",
        provider: { "@type": "Organization", name: "Teliman Logistique" },
        areaServed: "CI",
        serviceType: "Logistique minière",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <title>Teliman Logistique — Site en maintenance</title>
        <meta
          name="description"
          content="Teliman Logistique — Transport et logistique minière. Site en maintenance, contactez‑nous par email ou téléphone."
        />
        <meta
          name="robots"
          content={ALLOW_INDEXING ? "index,follow" : "noindex,nofollow"}
        />
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content={COLORS.primary} />
        {/* Open Graph / Twitter */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Teliman Logistique" />
        <meta
          property="og:description"
          content="Transport de sables, granulats et logistique minière."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teliman Logistique" />
        <meta
          name="twitter:description"
          content="Transport de sables, granulats et logistique minière."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div
        className="min-h-screen flex flex-col"
        style={{ background: COLORS.background, color: COLORS.text }}
      >
        {/* Header */}
        <header className="w-full border-b sticky top-0 z-40 bg-green-800">
          <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Teliman Logistique — logo"
                className="h-10 w-auto object-contain rounded-lg"
              />
            </div>
            <div className=" font-bold text-white">Transport & logistique</div>
          </div>
        </header>

        {/* Hero plein écran */}
        <section className="relative flex-1">
          <div className="absolute inset-0">
            <img
              src={camions}
              alt="Camions sur site minier"
              className="w-full h-full object-cover"
            />
            <div className="bg-gradient-to-r from-amber-900/50 to-green-800/50 absolute inset-0" />
          </div>

          <div className="relative z-10 mt-20 mx-auto h-full max-w-6xl px-4 py-28 md:py-40 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                <span style={{ color: COLORS.accent }}>Teliman</span>{" "}
                <span style={{ color: COLORS.primary }}>Logistique</span>
              </h1>
              <div
                className="mt-10 inline-flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold md:text-4xl"
                style={{ background: "#ffffff", color: COLORS.text }}
              >
                <Wrench
                  className="md:h-10 md:w-10"
                  style={{ color: COLORS.accent }}
                />
                <span style={{ color: COLORS.primary }}>
                  Site web en maintenance
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t font-bold bg-amber-900">
          <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Teliman Logistique — logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="text-sm text-white md:text-center">
              © Teliman Logistique — Tous droits réservés
            </div>
            <div className="flex flex-col gap-2 md:items-end text-sm text-white">
              <a
                href="mailto:contact@telimanlogistique.com"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <Mail className="h-4 w-4" style={{ color: COLORS.accent }} />{" "}
                contact@telimanlogistique.com
              </a>
              <a
                href="tel:+2250704446683"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <PhoneCall
                  className="h-4 w-4"
                  style={{ color: COLORS.accent }}
                />{" "}
                +225 07 04 44 66 83
              </a>
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" style={{ color: COLORS.accent }} />{" "}
                Côte d’Ivoire
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
