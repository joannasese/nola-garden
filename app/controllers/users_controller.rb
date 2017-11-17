class UsersController < ApplicationController

  def index
  end

  def new
    @user = User.new
  end

  def create
    #add if logged in logic
    @user = User.create(user_params)
  end

  def show
    @user = User.find_by(id: params[:id])
  end



  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
