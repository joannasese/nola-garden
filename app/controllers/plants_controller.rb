class PlantsController < ApplicationController
  before_action :require_login

  def index
    @seasons = Season.all

    if !params[:season].blank? #if season selected from dropdown menu selected, show plants by season
      if params[:user_id]
        @plants = Plant.by_season_with_user(params[:season], params[:user_id]) #invoke scope method from Plant model
      else
        @plants = Plant.by_season(params[:season])
      end
    elsif params[:user_id] #if accessing plant index thru nested resource users/:id/plants, show user's plants only
      @plants = User.find_by(id: params[:user_id]).plants
    else #otherwise, show all the plants
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
    @user = User.find_by(id: params[:id])
  end

  def edit
    @plant = Plant.find_by(id: params[:id])
  end

  def update
    @plant = Plant.find_by(id: params[:id])
    if @plant.update_attributes(plant_params)
      redirect_to plant_path(@plant)
    else
      render :edit
    end
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
