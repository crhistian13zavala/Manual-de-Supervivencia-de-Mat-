import React from 'react';
import { MOCK_EPISODES } from '../constants';
import { PlayCircle, Clock } from 'lucide-react';

const Episodes = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-hand font-bold text-white mb-4">
          <span className="bg-mat-tape px-4 py-1 transform -rotate-1 inline-block shadow-lg text-black">
            Lista de Capítulos
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Sigue las desventuras de Mat y aprende lo que NO debes hacer en tu carrera audiovisual.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {MOCK_EPISODES.map((ep) => (
          <div key={ep.id} className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-mat-tape transition-all duration-300 hover:shadow-[0_0_15px_rgba(109,165,192,0.3)]">
            
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
                <img 
                    src={ep.thumbnail} 
                    alt={ep.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
                    <Clock size={12} /> {ep.duration}
                </div>
            </div>

            {/* Info */}
            <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 font-hand tracking-wide group-hover:text-mat-tape transition-colors">
                    {ep.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {ep.description}
                </p>
                <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-zinc-800 hover:bg-mat-tape hover:text-white text-gray-300 py-2 rounded font-bold transition-colors uppercase text-sm"
                >
                    Ver en YouTube
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;