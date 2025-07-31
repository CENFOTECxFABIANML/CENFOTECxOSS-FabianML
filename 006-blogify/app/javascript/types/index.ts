// Este archivo actúa como el punto de entrada para todos nuestros tipos.

export * from './home.types';
export * from './posts.types';

// También puedes añadir tipos compartidos aquí, como SharedProps
export interface LocaleData {
  en_url: string;
  es_url: string;
  current_locale: 'en' | 'es';
}

export interface SharedProps {
  locale_data: LocaleData;
}