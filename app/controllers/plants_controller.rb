class PlantsController < ApplicationController
  before_action :require_login

  def index
    @seasons = Season.all

    if !params[:season].blank?

      # @plants = Plant.where(seasons: params[:season])
      # @plants = Plants where season is season chosen from drop down
      # @plants = Plant.by_season(params[:season])

      # @plants = Plant.where("common_name = ?", "Zinnia")
      # @plants = Plant.joins(:plant_seasons).where("plant_seasons.season_id", params[:season])
      @plants = Plant.joins(:plant_seasons).where("season_id = ?", params[:season])

    else
      @plants = Plant.all
      # User.joins(:posts).where("posts.created_at < ?", Time.now)
      # User.where(["name = ? and email = ?", "Joe", "joe@example.com"])
      # Client.where("orders_count = '2'")

      # @plants.each do |plant|
      #   if plant.season_ids.include?(params[:season].to_i)
      #     @plants = Array.new
      #     @plants << plant
      #     link_to "#{plant.common_name}, #{plant.variety}", plant_path(plant)
      #     puts "Success"
      #   else
      #     puts "Sorry, no results."
      #   end
      # end
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
