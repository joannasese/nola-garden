class UsersController < ApplicationController
  before_action :require_login
  skip_before_action :require_login, except: [:show]

  def index
    if current_user
      redirect_to user_path(current_user)
    end
  end

  def new
    if current_user
      redirect_to user_path(current_user)
    else
      @user = User.new
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      redirect_to '/signup'
    end
  end

  def show
    if logged_in?
      @user = User.find_by(id: params[:id])
    else
      redirect_to '/login'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, plants_attributes: [:common_name])
  end

end
