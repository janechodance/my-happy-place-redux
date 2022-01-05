class OrdersController < ApplicationController
    def index
        orders = Order.all
        render json: orders, status: :ok
    end
    def create
        order = Order.create!(order_params)
        render json: order, status: :created
    end
    def get_orders
        orders= Order.find_by(user_id: params[:id])
        render json: orders, status: :ok
    end
    private
    def order_params
        params.permit( :user_id, :total, :order_date)
    end
end
