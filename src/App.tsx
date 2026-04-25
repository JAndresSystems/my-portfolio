/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AppProvider } from './AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AISpecialization from './components/AISpecialization';
import Footer from './components/Footer';

export default function App() {
  return (
    <AppProvider>
      <main className="relative">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <AISpecialization />
        <Footer />
      </main>
    </AppProvider>
  );
}
