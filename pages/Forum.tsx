import React, { useState } from 'react';
import { MOCK_COMMENTS } from '../constants';
import { Comment } from '../types';
import { MessageCircle, Send } from 'lucide-react';

const Forum = () => {
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      user: 'Usuario_Invitado', // Simplified for this demo
      text: newComment,
      date: 'Justo ahora',
      avatar: `https://picsum.photos/50/50?random=${Date.now()}`,
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="space-y-8">
      <div className="bg-white text-black p-8 rounded-sm shadow-xl paper-texture relative transform rotate-1 mb-12">
        {/* Decorative Tape */}
        <div className="absolute -top-4 left-10 w-32 h-8 bg-mat-tape opacity-90 transform -rotate-2 shadow-sm"></div>
        <div className="absolute -bottom-4 right-10 w-32 h-8 bg-mat-tape opacity-90 transform -rotate-2 shadow-sm"></div>

        <h1 className="text-3xl font-hand font-bold mb-4 flex items-center gap-3">
            <MessageCircle className="text-mat-tape-dark" />
            Foro de la Comunidad
        </h1>
        <p className="font-sans text-gray-700">
            ¿Tienes alguna duda sobre rodajes? ¿Quieres opinar sobre el último episodio? 
            ¡Deja tu comentario abajo!
        </p>
      </div>

      {/* Input Form */}
      <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-400 mb-2">
                    Tu comentario
                </label>
                <textarea
                    id="comment"
                    rows={3}
                    className="w-full bg-black border border-zinc-700 rounded p-3 text-white placeholder-gray-600 focus:outline-none focus:border-mat-tape focus:ring-1 focus:ring-mat-tape transition-all"
                    placeholder="Escribe aquí... (Se amable, estamos sensibles por el corte final)"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
            </div>
            <div className="flex justify-end">
                <button 
                    type="submit"
                    className="bg-mat-tape hover:bg-white hover:text-black text-white px-6 py-2 rounded-full font-bold transition-all duration-300 flex items-center gap-2"
                >
                    <Send size={18} />
                    Publicar
                </button>
            </div>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 p-4 border-b border-zinc-800 animate-fadeIn">
                <div className="flex-shrink-0">
                    <img 
                        src={comment.avatar} 
                        alt={comment.user} 
                        className="w-12 h-12 rounded-full border-2 border-mat-tape"
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-1">
                        <h4 className="text-white font-bold">{comment.user}</h4>
                        <span className="text-xs text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {comment.text}
                    </p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;