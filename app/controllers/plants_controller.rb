class PlantsController < ApplicationController
  before_action :require_login

  def new
    @plant = Plant.new
  end

  def create
    @plant = Plant.new(plant_params)
    @plant.user_id = current_user.id
    @plant.growing_season_id = @plant.growing_season.id
    if @plant.save

      redirect_to user_path(current_user)
    end
  end

  def edit
  end

  def show
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
      :spacing
    )
  end
end
