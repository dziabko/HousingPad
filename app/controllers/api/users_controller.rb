class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
 
  def show_user
    @user = current_user
    render json: @user
    #byebug
  end

  def update_user
    #byebug
    @user = User.update(update_user_params)
  end

  private
  
	def update_user_params
		params.require(:user).permit(:email, :first_name, :last_name, :safety_score, :food_score, :transit_score, :clean_score)
  end

  private
  
	def user_params
		params.require(:user).permit(:email, :password, :first_name, :last_name, :safety_score, :food_score, :transit_score, :clean_score)
  end
end
