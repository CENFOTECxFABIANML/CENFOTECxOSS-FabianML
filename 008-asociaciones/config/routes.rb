Rails.application.routes.draw do
  #  El scope (:locale) hará que tus URLs tengan /es o /en
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    devise_for :users
    resources :posts
    root "home#index"
    get "home/index"
  end

  get "up" => "rails/health#show", as: :rails_health_check
end
