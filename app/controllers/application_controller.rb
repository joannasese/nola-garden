class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :require_login

  def new
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  # def authorize
  #   redirect_to '/login' unless current_user
  # end

  def logged_in?
    !current_user = nil
  end

  def require_login
   redirect_to '/login' unless session.include? :user_id
  end
end
