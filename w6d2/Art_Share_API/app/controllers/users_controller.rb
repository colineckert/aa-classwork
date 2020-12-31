class UsersController < ApplicationController

    def index
        debugger
        if request.query_string.present?
            query = request.query_string.split('=').last

            user = User.where(username: query)
            render json: user
        else
             render json: User.all
          
        end 
    end 

    def show 
        render json: User.find(params[:id])
    end 

    def create
       user = User.new(user_params)
       if user.save
        render json: user
       else
        render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end 

    def update 
        debugger
        user = User.find(params[:id])

        if user.update(user_params)
            redirect_to user_url(user)
        else 
            render json: user.errors.full_messages, status: 422
        end 

    end 

    def destroy
        user = User.find(params[:id])
        user.destroy 
        render json: user

    end 

    private 
    def user_params
        params.require(:user).permit(:username)
    end 

end
