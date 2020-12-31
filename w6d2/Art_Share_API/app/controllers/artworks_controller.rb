class ArtworksController < ApplicationController

    def index
        # if params.has_key?(:user_id)
            owned = Artwork.where(artist_id: params[:user_id])
        # elsif params.has_key?(:artist_id)
            shared = Artwork.joins(:shares).where(artworkshares: {viewer_id: params[:user_id]})
            render json: [owned, shared]
    end 

    def show 
        render json: Artwork.find(params[:id])
    end 

    def create
       artwork = Artwork.new(artwork_params)
       if artwork.save
        render json: artwork
       else
        render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end 

    def update 
        artwork = Artwork.find(params[:id])

        if artwork.update(artwork_params)
            redirect_to artwork_url(artwork)
        else 
            render json: artwork.errors.full_messages, status: 422
        end 

    end 

    def destroy
        artwork = Artwork.find(params[:id])
        artwork.destroy 
        render json: artwork
    end 

    private 
    def artwork_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end 

end
