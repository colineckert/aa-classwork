class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    # render json: @pokemons
    render :index
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    render :show
  end
end
