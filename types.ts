export interface Episode {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  description: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'consejo' | 'evento';
  author: string;
}

export interface Comment {
  id: string;
  user: string;
  text: string;
  date: string;
  avatar: string;
}

export interface Sponsor {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}