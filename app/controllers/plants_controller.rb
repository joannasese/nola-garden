class PlantsController < ApplicationController
  before_action :require_login

  def index
    @seasons = Season.all

    if !params[:season].blank? #if dropdown menu selected
      @plants = Plant.by_season(params[:season])
    elsif params[:user_id] #nested resource users/:id/plants
      @plants = User.find_by(id: params[:user_id]).plants
    else
      @plants = Plant.all #otherwise, show all the plants
    end
  end

  def new
    @plant = Plant.new
  end

  def create
    @plant = Plant.new(plant_params)
    @plant.user_id = current_user.id
    if @plant.save
      redirect_to plant_path(@plant)
    else
      render :new
    end
  end

  def show
    @plant = Plant.find_by(id: params[:id])
  end

  def edit
    @plant = Plant.find_by(id: params[:id])
  end

  def update
  end

  private

  def plant_params
    params.require(:plant).permit(
      :common_name,
      :latin_name,
      :variety,
      :height,
      :light,
      :lifecycle,
      :spacing,
      :days_to_maturity,
      :image,
      season_ids:[] #do we need this anymore?
    )
  end
end
