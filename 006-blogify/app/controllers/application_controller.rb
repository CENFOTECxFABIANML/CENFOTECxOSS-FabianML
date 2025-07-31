class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  around_action :switch_locale
  before_action :set_shared_props

  private

  def switch_locale(&action)
    locale = params[:locale] || I18n.default_locale
    I18n.with_locale(locale, &action)
  end

  def default_url_options
    { locale: I18n.locale }
  end

  # Este método prepara los datos que estarán disponibles en todas las páginas
  def set_shared_props
    @shared_props = {
      locale_data: {
        current_locale: I18n.locale,
        # Genera URLs para la página actual en ambos idiomas
        en_url: url_for(params.to_unsafe_h.merge(locale: :en)),
        es_url: url_for(params.to_unsafe_h.merge(locale: :es))
      }
    }
  end
end
