import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12">
      
      {/* Hero Section using the user's image concept */}
      <div className="relative w-full aspect-video md:aspect-[21/9] bg-zinc-800 rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-1">
        {/* Placeholder for the user's specific image */}
        <img 
          src="https://picsum.photos/1200/600?grayscale" 
          alt="Manual de Supervivencia Banner" 
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
            {/* Title styled like the scrapbook image */}
            <div className="bg-white p-4 md:p-8 transform -rotate-2 shadow-xl max-w-2xl border-2 border-zinc-200 paper-texture">
                <h1 className="text-4xl md:text-6xl font-hand font-bold text-black leading-tight uppercase mb-2">
                    Manual de <br/>
                    <span className="text-5xl md:text-7xl block my-2">Supervivencia</span>
                </h1>
                <div className="bg-mat-tape text-white inline-block px-4 py-1 text-xl md:text-2xl font-bold transform rotate-1 mb-2 shadow-md">
                    AUDIOVISUAL DE MAT
                </div>
            </div>

            <p className="mt-8 text-xl md:text-2xl text-white font-bold drop-shadow-md max-w-xl">
                ¡Bienvenido a la guía definitiva para sobrevivir a la carrera de cine y TV!
            </p>

            <Link to="/capitulos" className="mt-8 bg-mat-tape hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(109,165,192,0.5)]">
                <Play className="fill-current" />
                VER SERIE
            </Link>
        </div>
      </div>

      {/* Objective Section - "Caja Chica Films" */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-white text-black p-8 rounded-sm shadow-xl relative paper-texture transform -rotate-1">
             {/* Pin element */}
            <div className="absolute -top-3 left-1/2 w-4 h-4 rounded-full bg-red-500 shadow-md border border-red-700"></div>
            
            <h2 className="text-2xl font-bold mb-4 font-hand uppercase border-b-2 border-black inline-block pb-1">Nuestro Objetivo</h2>
            <p className="text-lg leading-relaxed font-hand">
                En <strong>Caja Chica Films</strong>, sabemos que estudiar audiovisual es una locura. Rodajes eternos, renderizados fallidos y café frío.
                <br/><br/>
                Creamos este manual para darte los consejos que los profesores no te dicen. Queremos crear una comunidad donde podamos reírnos de nuestros errores y aprender juntos a no morir en el intento.
            </p>
        </div>

        <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg hover:border-mat-tape transition-colors group">
                <h3 className="text-xl font-bold text-mat-tape mb-2 group-hover:translate-x-2 transition-transform">🎓 Para Estudiantes</h3>
                <p className="text-gray-400">Tips reales para tus trabajos prácticos, tesis y primeros freelances.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg hover:border-mat-tape transition-colors group">
                <h3 className="text-xl font-bold text-mat-tape mb-2 group-hover:translate-x-2 transition-transform">🎬 Entretenimiento</h3>
                <p className="text-gray-400">Una serie web con situaciones con las que seguro te identificarás (y llorarás).</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg hover:border-mat-tape transition-colors group">
                <h3 className="text-xl font-bold text-mat-tape mb-2 group-hover:translate-x-2 transition-transform">🤝 Comunidad</h3>
                <p className="text-gray-400">Un espacio para conectar con otros locos por el cine.</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Home;