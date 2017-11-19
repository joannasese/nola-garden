class PlantsController < ApplicationController
  before_action :require_login

  def new
    @plant = Plant.new
  end

  def create

  end

  def edit
  end

  def show
    @plant = Plant.find_by(id: params[:id])
    # @user = User.find_by(id: params[:id])
  end

  def update
  end
end
