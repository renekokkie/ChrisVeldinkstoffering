/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  Layers,
  Home,
  Maximize,
  Grid,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

import logoUrl from './assets/logo.jpg';
import project1Url from './assets/Project 1.jpeg';
import project2Url from './assets/Project 2.jpeg';
import project3Url from './assets/Project 3.jpeg';
import project5Url from './assets/Project 5.jpeg';
import project6Url from './assets/Project 6.jpg';

const LOGO_URL = logoUrl;
// Using reliable high-quality Unsplash images for a chic interior design look
const HERO_IMAGE = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920";

const SERVICES = [
  { name: "PVC Vloeren", icon: Layers, description: "Duurzame en onderhoudsvriendelijke PVC vloeren voor elk project." },
  { name: "Vinyl & Laminaat", icon: Grid, description: "Kwalitatieve vinyl en laminaat vloeren in diverse stijlen." },
  { name: "Tapijt & Matten", icon: Maximize, description: "Zacht tapijt en functionele matten voor een warme uitstraling." },
  { name: "Trappen", icon: ArrowRight, description: "Professionele traprenovatie en stoffering." },
  { name: "Raamdecoratie", icon: Home, description: "Stijlvolle raambekleding, van gordijnen tot jaloezieën." },
  { name: "Horren & Deuren", icon: CheckCircle2, description: "Maatwerk horren en deuren voor optimaal comfort." },
];

const TESTIMONIALS = [
  {
    text: "Wat een vakman is Chris Veldink! Hij heeft bij ons een schitterende vloer gelegd en super strak gewerkt. CVS levert echt fantastisch werk en komt al zijn afspraken na. Een dikke tien!",
    author: "René"
  },
  {
    text: "Als je een perfect gelegde, mooie vloer zoekt, moet je bij CVS zijn. Chris is een absolute topper in zijn vakgebied. Hij werkt snel, netjes en het eindresultaat is werkelijk fantastisch. Heel blij mee!",
    author: "Dennis"
  },
  {
    text: "Onze ruimte heeft een compleet nieuwe uitstraling gekregen dankzij de prachtige vloer van CVS. Chris levert echt fantastisch vakwerk en is bovendien een fijne vent om over de vloer te hebben. Absoluut een aanrader!",
    author: "Bianca"
  }
];

const GALLERY = [
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800", // Hardwood floor (Keep first image)
  project1Url,
  project2Url,
  project3Url,
  project5Url,
  project6Url,
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-chic-bg font-sans text-chic-dark selection:bg-chic-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-chic-dark/5 bg-chic-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src={LOGO_URL} 
              alt="Chris Veldink Stoffering Logo" 
              className="h-16 w-auto object-contain mix-blend-multiply opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden space-x-10 md:flex">
            <a href="#diensten" className="text-xs font-medium uppercase tracking-[0.1em] text-chic-dark hover:text-chic-accent transition-colors">Diensten</a>
            <a href="#waarom" className="text-xs font-medium uppercase tracking-[0.1em] text-chic-dark hover:text-chic-accent transition-colors">Waarom CVS</a>
            <a href="#projecten" className="text-xs font-medium uppercase tracking-[0.1em] text-chic-dark hover:text-chic-accent transition-colors">Projecten</a>
            <a href="#contact" className="text-xs font-medium uppercase tracking-[0.1em] text-chic-dark hover:text-chic-accent transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a 
              href="tel:0655393796" 
              className="inline-flex items-center rounded-none border border-chic-dark bg-chic-dark px-6 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-white hover:bg-transparent hover:text-chic-dark transition-all duration-300"
            >
              Bel Nu
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-chic-dark hover:text-chic-accent focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-chic-dark/5 bg-chic-bg px-6 pt-4 pb-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <a href="#diensten" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.1em] text-chic-dark">Diensten</a>
              <a href="#waarom" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.1em] text-chic-dark">Waarom CVS</a>
              <a href="#projecten" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.1em] text-chic-dark">Projecten</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.1em] text-chic-dark">Contact</a>
              <a 
                href="tel:0655393796" 
                className="inline-flex items-center justify-center rounded-none border border-chic-dark bg-chic-dark px-6 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white"
              >
                Bel Nu
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="font-serif text-5xl font-medium tracking-tight text-chic-dark sm:text-7xl leading-[1.1]">
                Vakmanschap in <br/>
                <span className="italic text-chic-accent">Projectstoffering</span>
              </h1>
              <p className="mt-8 text-lg font-light leading-relaxed text-chic-muted">
                Chris Veldink Stoffering (CVS) is uw specialist in Noord Holland voor hoogwaardige vloeren, raamdecoratie en traprenovatie. Waar kwaliteit en esthetiek samenkomen.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a
                  href="tel:0655393796"
                  className="inline-flex items-center justify-center rounded-none border border-chic-dark bg-chic-dark px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-transparent hover:text-chic-dark w-full sm:w-auto"
                >
                  Bel Nu
                </a>
                <a 
                  href="#diensten" 
                  className="inline-flex items-center justify-center rounded-none border border-chic-dark/20 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-chic-dark transition-all duration-300 hover:border-chic-dark w-full sm:w-auto"
                >
                  Ontdek Diensten
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={HERO_IMAGE}
                  alt="Luxe vloer stoffering"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 h-48 w-48 border border-chic-accent/30 -z-10 hidden lg:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-24 sm:py-32 bg-chic-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-chic-accent uppercase">Onze Expertise</h2>
            <p className="mt-4 font-serif text-4xl font-medium tracking-tight text-chic-dark sm:text-5xl">
              Alles voor een perfect interieur
            </p>
            <div className="mt-8 mx-auto h-px w-24 bg-chic-accent/50"></div>
          </div>
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group flex flex-col border border-chic-dark/5 bg-chic-bg p-10 transition-all duration-500 hover:border-chic-accent/50 hover:shadow-xl hover:shadow-chic-accent/5"
              >
                <service.icon className="h-8 w-8 text-chic-accent mb-8 stroke-[1.5]" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-medium text-chic-dark mb-4">{service.name}</h3>
                <p className="flex-auto text-sm font-light leading-relaxed text-chic-muted">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="waarom" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img 
                  src={project2Url} 
                  alt="Vakmanschap" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 h-48 w-48 border border-chic-accent/30 -z-10 hidden lg:block"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xs font-semibold tracking-[0.2em] text-chic-accent uppercase">Waarom CVS</h2>
              <h3 className="mt-4 font-serif text-4xl font-medium tracking-tight text-chic-dark sm:text-5xl">
                Oog voor detail, <br/><span className="italic text-chic-muted">hart voor het vak.</span>
              </h3>
              <p className="mt-8 text-lg font-light leading-relaxed text-chic-muted">
                Met jarenlange ervaring in woning- en projectstoffering weten we precies wat er nodig is voor een perfect en duurzaam resultaat.
              </p>
              <ul className="mt-12 space-y-6">
                {[
                  "Persoonlijk advies op locatie",
                  "Hoogwaardige materialen van topmerken",
                  "Snelle, nette en vakkundige uitvoering",
                  "Transparante communicatie en afspraken",
                  "Gespecialiseerd in zowel woning als project"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-chic-accent/30">
                      <div className="h-1.5 w-1.5 rounded-full bg-chic-accent"></div>
                    </div>
                    <span className="text-chic-dark font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-14">
                <a
                  href="https://wa.me/31655393796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-none border border-chic-dark bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.1em] text-chic-dark transition-all duration-300 hover:bg-chic-dark hover:text-white"
                >
                  <MessageCircle className="h-5 w-5 stroke-[1.5]" />
                  Stuur een WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-chic-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-chic-accent uppercase">Recensies</h2>
            <p className="mt-4 font-serif text-4xl font-medium tracking-tight text-chic-dark sm:text-5xl">
              Wat onze klanten zeggen
            </p>
            <div className="mt-8 mx-auto h-px w-24 bg-chic-accent/50"></div>
          </div>
          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col justify-between"
              >
                <div className="mb-8 text-chic-accent">
                  <svg className="h-8 w-8 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <blockquote className="font-serif text-xl italic text-chic-dark leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="mt-8 flex items-center gap-x-4">
                  <div className="h-px w-8 bg-chic-accent"></div>
                  <div className="text-sm">
                    <p className="font-semibold uppercase tracking-widest text-chic-dark">{testimonial.author}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="projecten" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-chic-accent uppercase">Portfolio</h2>
            <p className="mt-4 font-serif text-4xl font-medium tracking-tight text-chic-dark sm:text-5xl">
              Onze Recente Projecten
            </p>
            <div className="mt-8 mx-auto h-px w-24 bg-chic-accent/50"></div>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-chic-surface"
              >
                <img 
                  src={img} 
                  alt={`Project ${idx + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-chic-dark/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 bg-chic-dark text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold tracking-[0.2em] text-chic-accent uppercase">Contact</h2>
              <h3 className="mt-4 font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl">
                Laten we samenwerken
              </h3>
              <p className="mt-8 text-lg font-light leading-relaxed text-gray-400">
                Heeft u vragen of wilt u een vrijblijvende offerte ontvangen? Wij staan voor u klaar met persoonlijk advies.
              </p>
              
              <div className="mt-14 space-y-10">
                <div className="flex gap-x-6">
                  <MapPin className="h-6 w-6 text-chic-accent shrink-0 stroke-[1.5]" />
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-widest text-white">Adres</h4>
                    <p className="mt-2 font-light text-gray-400">Oosteinde 32<br/>1647 AB Berkhout</p>
                  </div>
                </div>
                <div className="flex gap-x-6">
                  <Phone className="h-6 w-6 text-chic-accent shrink-0 stroke-[1.5]" />
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-widest text-white">Telefoon / WhatsApp</h4>
                    <p className="mt-2 font-light text-gray-400">06-55 39 37 96</p>
                  </div>
                </div>
                <div className="flex gap-x-6">
                  <Mail className="h-6 w-6 text-chic-accent shrink-0 stroke-[1.5]" />
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-widest text-white">E-mail</h4>
                    <p className="mt-2 font-light text-gray-400">info@cvs.nu</p>
                  </div>
                </div>
                <div className="flex gap-x-6">
                  <Clock className="h-6 w-6 text-chic-accent shrink-0 stroke-[1.5]" />
                  <div>
                    <h4 className="text-sm font-medium uppercase tracking-widest text-white">Openingstijden</h4>
                    <p className="mt-2 font-light text-gray-400">Maandag t/m Vrijdag<br/>07.00 - 18.00 uur</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] w-full overflow-hidden rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.782862025174!2d4.9806493!3d52.6277883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c8a67999999999%3A0x6999999999999999!2sOosteinde%2032%2C%201647%20AB%20Berkhout!5e0!3m2!1snl!2snl!4v1711555555555!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] py-16 text-white border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <p className="text-xs font-light tracking-widest text-gray-500 uppercase">
              © {new Date().getFullYear()} Chris Veldink Stoffering.
            </p>
            <div className="flex gap-8">
              <a href="https://wa.me/31655393796" className="text-gray-500 hover:text-chic-accent transition-colors">
                <MessageCircle className="h-5 w-5 stroke-[1.5]" />
              </a>
              <a href="mailto:info@cvs.nu" className="text-gray-500 hover:text-chic-accent transition-colors">
                <Mail className="h-5 w-5 stroke-[1.5]" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="tel:0655393796"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-chic-dark text-chic-accent shadow-2xl border border-chic-accent/20 hover:bg-chic-accent hover:text-white transition-all active:scale-95"
        >
          <Phone className="h-6 w-6 stroke-[1.5]" />
        </a>
      </div>
    </div>
  );
}
