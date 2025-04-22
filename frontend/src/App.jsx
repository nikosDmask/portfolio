import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import Tape from './components/Tape';
import TestimonialsSection from './components/Testimonials';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {


  return (
    <div className="bg-gray-900 text-white antialiased font-inter">
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <TestimonialsSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
