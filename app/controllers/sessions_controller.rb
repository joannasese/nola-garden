class SessionsController < ApplicationController
  # before_action :require_login
  # skip_before_action :require_login, only: [:new]

  def new
    if current_user
      redirect_to user_path(current_user)
    end
  end

  def create
    @user = User.find_by(id: params[:id])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      redirect_to '/login'
    end
  end

  def destroy
    # reset_session
    session[:user_id] = nil
    redirect_to '/login'
  end

end
