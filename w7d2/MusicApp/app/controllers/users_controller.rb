class UsersController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(params[:user][:email], params[:user][:password])

        if @user.save
            redirect_to user_url(@user)
        else
            render :new
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

end
