class PlantsController < ApplicationController
  before_action :require_login, :authorize
  skip_before_action :authorize, except: [:index, :show, :edit]

  def index
    @user = current_user
    @seasons = Season.all
    if !params[:season].blank? #if season selected from dropdown menu selected, show plants by season
      if params[:user_id]
        @plants = Plant.by_season_with_user(params[:season], params[:user_id]) #invoke scope method from Plant model
      else
        @plants = Plant.by_season(params[:season])
      end
    elsif params[:user_id]
      @plants = User.find_by(id: params[:user_id]).plants
    else
      @plants = Plant.all
    end
    respond_to do |format|
     format.html
     format.json { render json: @plants}
    end
  end

  def new
    @plant = Plant.new
    @user = current_user
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
    @user = current_user
    @plant = Plant.find_by(id: params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @plant }
    end
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

  def details
    plant = Plant.find(params[:id])
    # render plain: plant.common_name
    # render json: PlantSerializer.serialize(plant)
    render json: plant.to_json
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
