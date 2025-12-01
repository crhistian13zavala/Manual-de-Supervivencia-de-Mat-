import { Episode, Post, Comment, Sponsor } from './types';
import { Youtube, Instagram, Twitter } from 'lucide-react';

export const SOCIAL_LINKS = [
  { name: 'YouTube', url: 'https://youtube.com', icon: Youtube },
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  { name: 'TikTok', url: 'https://tiktok.com', icon: Twitter }, // Using Twitter icon as placeholder for TikTok if Lucide version doesn't have it, but usually standard lib has it. We will label it TikTok.
];

export const MOCK_EPISODES: Episode[] = [
  {
    id: '1',
    title: 'Capítulo 1: El Kit de Supervivencia',
    thumbnail: 'https://picsum.photos/800/450?random=1',
    duration: '12:30',
    description: '¿Qué necesitas realmente en tu mochila? Mat nos enseña lo básico.',
  },
  {
    id: '2',
    title: 'Capítulo 2: Pesadilla en el Rodaje',
    thumbnail: 'https://picsum.photos/800/450?random=2',
    duration: '14:15',
    description: 'Cómo manejar el estrés cuando todo sale mal en el set.',
  },
  {
    id: '3',
    title: 'Capítulo 3: La Edición Infinita',
    thumbnail: 'https://picsum.photos/800/450?random=3',
    duration: '10:45',
    description: 'Consejos para no volverte loco frente a Premiere Pro.',
  },
  {
    id: '4',
    title: 'Capítulo 4: Audio, el Olvidado',
    thumbnail: 'https://picsum.photos/800/450?random=4',
    duration: '11:20',
    description: 'Por qué el sonido es el 70% de tu cortometraje.',
  }
];

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: '5 Tips para iluminar con bajo presupuesto',
    content: 'No necesitas luces Arri para que se vea bien. Aquí te enseñamos a usar luces de trabajo y rebotadores caseros...',
    date: '10 Oct 2023',
    type: 'consejo',
    author: 'Mat',
  },
  {
    id: '2',
    title: 'Festival de Cine Universitario 2024',
    content: '¡Atención creadores! Se abren las inscripciones para el festival anual. Prepara tu corto.',
    date: '15 Oct 2023',
    type: 'evento',
    author: 'Caja Chica Films',
  },
  {
    id: '3',
    title: 'Nunca olvides formatear la tarjeta',
    content: 'Historia de terror: Llegar al set y tener la tarjeta llena. Formatea siempre antes de salir de casa.',
    date: '20 Oct 2023',
    type: 'consejo',
    author: 'Mat',
  },
];

export const MOCK_COMMENTS: Comment[] = [
  {
    id: '1',
    user: 'Camila_Cine',
    text: '¡El tip del gaffer tape me salvó la vida en mi último rodaje! Gracias Mat.',
    date: 'Hace 2 horas',
    avatar: 'https://picsum.photos/50/50?random=10',
  },
  {
    id: '2',
    user: 'DirectorFuturo',
    text: '¿Cuándo sale el próximo capítulo? Necesito saber sobre dirección de arte.',
    date: 'Hace 5 horas',
    avatar: 'https://picsum.photos/50/50?random=11',
  },
];

export const SPONSORS: Sponsor[] = [
  {
    id: '1',
    name: 'Tienda de Lentes',
    imageUrl: 'https://picsum.photos/200/400?random=20',
    link: '#',
  },
  {
    id: '2',
    name: 'Alquiler de Equipos',
    imageUrl: 'https://picsum.photos/200/400?random=21',
    link: '#',
  },
];