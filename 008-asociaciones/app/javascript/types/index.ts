// Este archivo actúa como el punto de entrada para todos nuestros tipos.

export * from './home.types';
export * from './posts.types';
export * from './devise.types';

// También puedes añadir tipos compartidos aquí, como SharedProps
export interface LocaleData {
  en_url: string;
  es_url: string;
  current_locale: 'en' | 'es';
}

export interface UserData {
  signed_in: boolean;
  email: string | null;
}

export interface NavbarI18n {
  brand: string;
  posts_link: string;
  log_out: string;
  log_in: string;
  sign_up: string;
}

export interface SharedProps {
  locale_data: LocaleData;
  user: UserData;
  i18n: {
    navbar: NavbarI18n;
  };
}