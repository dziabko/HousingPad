class Api::RecommendationEngineController < ApplicationController
  def get_user_recommendation
    @user = current_user[:id]
    puts @user
    homeObj = []
    @recommendations = RecommendationEngine.get_recommendation(@user)
    
    @recommendations.each do |homeids|
      get_home = Home.find(homeids)
      homeObj << get_home
    end
    # byebug
    render json: homeObj
  end 
end
