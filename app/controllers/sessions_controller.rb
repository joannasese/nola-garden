class SessionsController < ApplicationController
  # before_action :require_login
  # skip_before_action :require_login, only: [:new]

  def new
    if current_user
      redirect_to user_path(current_user)
    end
  end

  def create_with_google
    @user = User.from_omniauth(request.env["omniauth.auth"])
    if @user
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      redirect_to '/login', flash: {notice: "Oops, something got tangled up. Please try again."}
    end
  end

  def create
    @user = User.find_by(name: params[:name])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      redirect_to '/login', flash: {notice: "Oops, a valid username and/or password is required. Please try again."}
    end
  end

  def destroy
    # reset_session
    session[:user_id] = nil
    redirect_to '/login'
  end

end
