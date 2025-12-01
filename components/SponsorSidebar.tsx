import React from 'react';
import { SPONSORS } from '../constants';

const SponsorSidebar = () => {
  return (
    <div className="sticky top-24 space-y-8">
      <div className="text-center mb-4">
        <span className="bg-white text-black text-xs font-bold px-2 py-1 transform -rotate-2 inline-block shadow-sm">
          SPONSORS
        </span>
      </div>

      {/* Featured SONY Banner */}
      <div className="relative group animate-float cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-black rounded-lg transform rotate-1 blur-sm opacity-50"></div>
        <div className="relative bg-black border-2 border-white rounded-lg overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <div className="relative h-48 bg-gradient-to-b from-gray-900 to-black p-4 flex flex-col items-center justify-center overflow-hidden">
                {/* Simulated Sony Logo & Camera */}
                <h3 className="text-2xl font-serif text-white font-bold tracking-widest mb-2 z-10">SONY</h3>
                <div className="relative z-10 w-32 h-32">
                    <img 
                        src="https://m.media-amazon.com/images/I/81x+9uJ-eIL._AC_SL1500_.jpg" 
                        alt="Sony Alpha 7R IV" 
                        className="w-full h-full object-contain rounded-md drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                </div>
                {/* Stylized Text Overlay mimicking the ad style */}
                <div className="absolute top-1/2 left-0 w-full text-center pointer-events-none opacity-10">
                   <span className="text-6xl font-bold text-white">α7R</span>
                </div>
            </div>
            
            <div className="bg-white p-3 text-center border-t-4 border-mat-tape">
                <h4 className="text-black font-bold text-lg leading-none mb-1">Alpha 7R IV</h4>
                <p className="text-mat-tape-dark text-xs font-bold uppercase tracking-wide animate-pulse">
                    Disponible a nivel nacional en las Sony Store
                </p>
            </div>
        </div>
        {/* 'New' Badge */}
        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg transform rotate-12 z-20">
            NUEVO
        </div>
      </div>

      {/* Featured GODOX Banner */}
      <div className="relative group animate-float cursor-pointer" style={{ animationDelay: '1.5s' }}>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-700 to-black rounded-lg transform -rotate-1 blur-sm opacity-40"></div>
        <div className="relative bg-zinc-900 border-2 border-yellow-400 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(250,204,21,0.2)]">
            <div className="relative h-48 bg-gradient-to-b from-gray-900 to-black p-4 flex flex-col items-center justify-center overflow-hidden">
                {/* Simulated Godox Logo */}
                <h3 className="text-2xl font-sans text-white font-bold tracking-widest mb-2 z-10">Godox</h3>
                <div className="relative z-10 w-32 h-32">
                    {/* Specific product image for Godox FV150 */}
                    <img 
                        src="https://m.media-amazon.com/images/I/71wY3X0+1EL._AC_SX679_.jpg" 
                        alt="Godox FV150" 
                        className="w-full h-full object-contain rounded-md drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-2"
                    />
                </div>
                {/* Stylized Text Overlay */}
                <div className="absolute top-1/2 right-0 w-full text-center pointer-events-none opacity-10">
                   <span className="text-5xl font-bold text-yellow-500">FV150</span>
                </div>
            </div>
            
            <div className="bg-yellow-400 p-3 text-center border-t-4 border-black">
                <h4 className="text-black font-bold text-lg leading-none mb-1">Godox FV150</h4>
                <p className="text-black text-xs font-bold uppercase tracking-wide animate-pulse">
                    Disponible a nivel nacional en las Godox Store
                </p>
            </div>
        </div>
        {/* 'Hybrid' Badge */}
        <div className="absolute -top-2 -left-2 bg-black text-yellow-400 border border-yellow-400 text-xs font-bold px-2 py-1 rounded-full shadow-lg transform -rotate-12 z-20">
            HÍBRIDO
        </div>
      </div>
      
      {/* Regular Sponsors */}
      {SPONSORS.map((sponsor) => (
        <div key={sponsor.id} className="relative group">
          {/* Tape Effect */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-mat-tape opacity-80 z-10 rotate-1 shadow-sm"></div>
          
          <a href={sponsor.link} className="block transform transition-transform duration-300 hover:scale-[1.02] hover:rotate-1">
            <div className="bg-white p-2 rounded shadow-lg border-2 border-zinc-800">
              <div className="relative w-full aspect-[1/2] overflow-hidden bg-gray-200">
                <img 
                  src={sponsor.imageUrl} 
                  alt={sponsor.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 w-full bg-black/70 p-2 text-center">
                  <p className="text-white text-sm font-bold">{sponsor.name}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
      
      <div className="bg-zinc-900 border-2 border-dashed border-zinc-700 p-4 rounded text-center text-gray-500 text-sm">
        <p>Tu marca aquí</p>
        <p className="text-xs mt-1">contactanos@cajachica.com</p>
      </div>
    </div>
  );
};

export default SponsorSidebar;