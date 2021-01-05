class SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:email], params[:user][:password])

        if @user
            @user.session_token = @user.reset_session_token!
            session[:session_token] = @user.session_token
            redirect_to user_url(@user)
        else
            render :new
        end
    end
end
