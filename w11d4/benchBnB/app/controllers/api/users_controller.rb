class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      render :show
    else
      render JSON: @user.errors.full_messages, status: 401
    end
  end

  # def update
  # end

  def show
    @user = selected_user
    render :show
  end
  
  # def index
  #   @users = User.all
  # end

  # def destroy
  #   @user = selected_user
  #   if @user
  #     @user.destroy
  #     render :show
  #   else
  #     render ["Couldn't find user :("]
  #   end
  # end

  private
  def selected_user
    User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
