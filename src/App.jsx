import { motion } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin } from "lucide-react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const scrollRafRef = useRef(null);

  const smoothScrollTo = (targetY, duration = 600) => {
    if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);

    const startY = window.pageYOffset;
    const diff = targetY - startY;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const time = timestamp - startTime;
      const t = Math.min(1, time / duration);
      const eased = easeInOutCubic(t);
      window.scrollTo(0, Math.round(startY + diff * eased));
      if (time < duration) {
        scrollRafRef.current = requestAnimationFrame(step);
      } else {
        scrollRafRef.current = null;
      }
    };

    scrollRafRef.current = requestAnimationFrame(step);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 80; // fallback

    const targetY = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
    smoothScrollTo(targetY, 600);
  };

  return (
    <div
      className="min-h-screen
        bg-gradient-to-b from-blue-950 via-slate-900 to-gray-950
        text-gray-100"
    >
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 bg-gray-950/70 backdrop-blur border-b border-gray-800">
        <nav className="mx-auto max-w-7xl flex justify-between items-center py-4 px-6">
          <button
            onClick={() => smoothScrollTo(0, 600)}
            className="text-2xl font-bold tracking-tight hover:text-blue-400 transition"
          >
            Matt.T
          </button>

          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:text-blue-400 transition">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")} className="hover:text-blue-400 transition">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("skills")} className="hover:text-blue-400 transition">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400 transition">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-4 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-blue-400">Mateusz Turowski</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl text-lg text-gray-300 mb-6 leading-relaxed text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          A passionate software dev who loves nightmarish coding sessions.
        </motion.p>

        <motion.button
          onClick={() => scrollToSection("projects")}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          View My Work
        </motion.button>
      </section>

      {/* Main Sections */}
      <main className="mx-auto max-w-7xl px-4 py-16 space-y-24">
        {[
          { id: "about", Component: About },
          { id: "projects", Component: Projects },
          { id: "skills", Component: Skills },
          { id: "contact", Component: Contact },
        ].map(({ id, Component }) => (
          <motion.section
            key={id}
            id={id}
            className="rounded-2xl p-[1px] bg-gradient-to-r from-slate-800 to-indigo-950"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-gray-900 p-8 shadow-md">
              <Component />
            </div>
          </motion.section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950/70 border-t border-gray-800 py-6 mt-16 backdrop-blur">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Mateusz Turowski. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com/Matt-T-123" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mateusz-turowski-2a1259250/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
