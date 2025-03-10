import { 
  About, 
  Contact, 
  Experience, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas 
} from "./components";

const App = () => {
  return (
    <div className='relative z-0 bg-primary'>
      {/* Hero Section with Navbar */}
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>

      {/* About Me Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Technologies & Skills Section */}
      <Tech />

      {/* Projects Section (Replaced Works Title) */}
      <Works />

      {/* Contact & 3D Stars Effect */}
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;
