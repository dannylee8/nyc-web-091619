class Api::V1::ListingsController < ApplicationController

  def index
    listings = Listing.all
    render json: listings
  end

  def create
    listing = Listing.create(listing_params)

    if listing.valid?
      render json: listing
    else
      render json: {errors: listing.errors.full_messages}
    end
    
  end


  private

  def listing_params
    params.permit(:name, :address, :age, :scare_level, :image, :hot_tub, :victim_count)
  end


end
