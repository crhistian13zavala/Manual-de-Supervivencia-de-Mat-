import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Clapperboard } from 'lucide-react';
import Home from './pages/Home';
import News from './pages/News';
import Episodes from './pages/Episodes';
import Forum from './pages/Forum';
import SponsorSidebar from './components/SponsorSidebar';
import { SOCIAL_LINKS } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Noticias y Consejos', path: '/noticias' },
    { name: 'Capítulos', path: '/capitulos' },
    { name: 'Foro', path: '/foro' },
  ];

  return (
    <header className="bg-mat-black border-b-2 border-mat-tape sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-white p-2 rounded transform -rotate-2 border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.2)]">
               <Clapperboard className="h-8 w-8 text-black" />
            </div>
            <div className="hidden md:block">
              <span className="block text-xl font-hand font-bold text-white tracking-wider">
                MANUAL DE SUPERVIVENCIA
              </span>
              <span className="block text-sm font-bold text-mat-tape uppercase tracking-widest">
                AUDIOVISUAL DE MAT
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-mat-tape ${
                    isActive ? 'text-mat-tape font-bold scale-110' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-mat-tape transform -rotate-1 skew-x-12 rounded"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-mat-tape text-white'
                    : 'text-gray-300 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Caja Chica Films</h3>
            <p className="text-gray-400 text-sm">Creando contenido para futuros cineastas.</p>
            <p className="text-gray-500 text-xs mt-1">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1"
              >
                <div className="bg-zinc-800 p-3 rounded-full group-hover:bg-mat-tape transition-colors duration-300">
                  <social.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs text-gray-500 group-hover:text-mat-tape">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-mat-black bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-mat-black to-mat-black">
        <Header />
        
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Main Content Area */}
            <div className="flex-1 w-full lg:w-3/4 min-h-[600px]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/noticias" element={<News />} />
                <Route path="/capitulos" element={<Episodes />} />
                <Route path="/foro" element={<Forum />} />
              </Routes>
            </div>

            {/* Sponsor Sidebar - Always Visible */}
            <aside className="w-full lg:w-1/4">
               <SponsorSidebar />
            </aside>
            
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;