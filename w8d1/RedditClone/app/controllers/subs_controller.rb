class SubsController < ApplicationController
  before_action :require_moderator, only: [:edit, :update]

  def new
    @sub = Sub.new
    render :new
  end
  
  def create
    @sub = Sub.new(sub_params)

    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def index
    @subs = Sub.all 
    render :index
  end

  def show
    @sub = Sub.find_by(id: params[:id])
    render :show
  end

  def edit
    @sub = Sub.find_by(id: params[:id])
    render :edit
  end

  def update
    @sub = current_user.subs.find_by(id: params[:id])

    if @sub && @sub.update(sub_params)
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = ['You are not the moderator of this sub']
      render :edit
    end
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :description, :moderator_id)
  end
end
