// Tipos para las vistas de Devise

export interface SignInI18n {
  title: string;
  description: string;
  email_label: string;
  password_label: string;
  remember_me_label: string;
  submit_button: string;
  sign_up_link: string;
  forgot_password_link: string;
}

export interface SignUpI18n {
  title: string;
  description: string;
  email_label: string;
  password_label: string;
  password_confirmation_label: string;
  submit_button: string;
  log_in_link: string;
}

export interface ForgotPasswordI18n {
  title: string;
  description: string;
  email_label: string;
  submit_button: string;
}
