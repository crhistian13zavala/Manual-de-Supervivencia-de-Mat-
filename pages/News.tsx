import React, { useState } from 'react';
import { MOCK_POSTS } from '../constants';
import { Pin, Calendar, Lightbulb } from 'lucide-react';

const News = () => {
  const [activeTab, setActiveTab] = useState<'consejo' | 'evento'>('consejo');

  const filteredPosts = MOCK_POSTS.filter(post => post.type === activeTab);

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-hand font-bold text-white uppercase tracking-wider">
          Publicaciones y Noticias
        </h1>
        
        {/* Custom Tabs */}
        <div className="flex space-x-4 bg-zinc-900 p-2 rounded-lg border border-zinc-800">
            <button
                onClick={() => setActiveTab('consejo')}
                className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all duration-300 ${
                    activeTab === 'consejo' 
                    ? 'bg-mat-tape text-white font-bold shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
            >
                <Lightbulb size={20} />
                Consejos de Mat
            </button>
            <button
                onClick={() => setActiveTab('evento')}
                className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all duration-300 ${
                    activeTab === 'evento' 
                    ? 'bg-mat-tape text-white font-bold shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
            >
                <Calendar size={20} />
                Eventos
            </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredPosts.map((post, index) => (
            <div 
                key={post.id} 
                className={`bg-white text-black p-6 relative paper-texture shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                    index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                }`}
            >
                {/* Visual elements */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-6 bg-mat-tape opacity-80 shadow-sm transform -rotate-2"></div>
                </div>
                {post.type === 'evento' && (
                    <div className="absolute top-2 right-2">
                        <Pin className="text-red-600 fill-red-600 h-6 w-6 transform rotate-12" />
                    </div>
                )}

                <div className="mt-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide border-b border-gray-300 pb-1">
                        {post.date} • {post.author}
                    </span>
                    <h3 className="text-2xl font-bold font-hand mt-3 mb-2 leading-tight">
                        {post.title}
                    </h3>
                    <p className="text-gray-800 font-sans leading-relaxed">
                        {post.content}
                    </p>
                    <button className="mt-4 text-mat-tape-dark font-bold hover:underline text-sm uppercase">
                        Leer más &rarr;
                    </button>
                </div>
            </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-zinc-900 rounded border border-dashed border-zinc-700">
              <p className="text-gray-400 font-hand text-xl">No hay publicaciones en esta sección por ahora.</p>
          </div>
      )}
    </div>
  );
};

export default News;