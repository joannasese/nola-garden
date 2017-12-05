class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :require_login, :authorize

  def new
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

  def authorize
    redirect_to '/users/error' unless params[:user_id].to_i == current_user.id || !params[:user_id]
  end

  def editable
    current_user.plants.ids.include?(params[:id].to_i)
  end

  def logged_in?
    !current_user = nil
  end

  def require_login
   redirect_to '/login' unless session.include? :user_id
  end
end
