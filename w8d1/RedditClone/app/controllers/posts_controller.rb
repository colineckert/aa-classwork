class PostsController < ApplicationController
  def new
    @post = Post.new
    render :new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.erros.full_messages
      render :new
    end
  end

  def destroy
    @post = current_user.posts.find_by(id: params[:id])
    if @post && @post.destroy
      redirect_to sub_url(@post.sub_id)
    end
  end


  private
  def post_params
    params.require(:post).permit(:title, :url, :content, :sub_id, :author_id)
  end
end
