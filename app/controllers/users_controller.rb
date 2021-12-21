class UsersController < ApplicationController
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    def index
        users = User.all
        render json: users, include: :vendors, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, include: :vendor, status: :ok
    end
    private

    def user_params
      params.permit(:username, :password, :name, :email, :phone, :address, :DOB, :is_vendor)
    end
end
