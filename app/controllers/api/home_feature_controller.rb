class Api::HomeFeatureController < ApplicationController
  def home_liked
    @homepref = HomePreference.new(home_preferences_params)
    @ifhomecreated = HomePreference.find(@homepref.home_id)
    
  rescue ActiveRecord::RecordNotFound
    if @homepref.save
        render json: @homepref
    else
        render json: @homepref, status: :unprocessable_entity
    end
  end

  private
	def home_preferences_params
	  params.require(:data).permit(:user_id, :home_id, :is_liked)
  end
end
