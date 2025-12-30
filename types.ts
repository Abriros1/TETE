
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  role: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
