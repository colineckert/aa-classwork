class SessionsController < ApplicationController
  before_action :require_current_user!, except: [:create, :new]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:user_name], 
      params[:user][:password])
    
    if @user.nil?
      render :new
    else
      login_user!(@user)
      redirect_to cats_url
    end
  end

  def destroy
    logout_user!
    redirect_to new_session_url
  end
end
