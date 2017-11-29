class PlantsController < ApplicationController
  before_action :require_login

  def index
    @seasons = Season.all

    if !params[:season].blank?
      #if season selected from dropdown menu selected, show plants by season
      @plants = Plant.by_season(params[:season])
    elsif params[:user_id]
      #if accessing plant index thru nested resource users/:id/plants,
      #show user's plants only
      @plants = User.find_by(id: params[:user_id]).plants
    else
      #otherwise, show all the plants
      @plants = Plant.all
    end
  end

  def new
    @plant = Plant.new
  end

  def create
    @plant = Plant.new(plant_params)
    @plant.user_id = current_user.id
    if @plant.save
      redirect_to user_plant_path(current_user, @plant)
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
      season_ids:[],
      tag_ids: [],
      tags_attributes: [:name]
    )
  end
end
