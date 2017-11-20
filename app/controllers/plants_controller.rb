class PlantsController < ApplicationController
  before_action :require_login

  def index
    @plants = Plant.all
  end

  def new
    @plant = Plant.new
  end

  def create
    @plant = Plant.new(plant_params)
    @plant.user_id = current_user.id
    # @plant.save
    # binding.pry

    if @plant.save
      redirect_to plant_path(@plant)
    else
      render :new
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
      :spacing,
      :days_to_maturity,
      season_ids:[]
    )
  end
end
