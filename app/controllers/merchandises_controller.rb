class MerchandisesController < ApplicationController
    def index
        merchandises = Merchandise.all
        render json: merchandises, status: :ok
    end
    def show
        merchandise = Merchandise.find(params[:id])
        render json: merchandise, status: :ok
    end
    def destroy
        merchandise = Merchandise.find(params[:id])
        merchandise.destroy
        head :no_content
    end
    def create
        merchandise = Merchandise.create(merchandise_params)
        render json: merchandise, status: :created
    end
    def merch
        merchandises= Merchandise.find_by(vendor_id: params[:id])
        render json: merchandises, status: :ok
    end
    private
    def merchandise_params
        params.permit(:vendor_id, :item_name, :price, :description, :inventory, :is_sold_out, :merch)
      end
end
