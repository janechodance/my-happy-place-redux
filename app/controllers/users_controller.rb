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
        avatar = rails_blob_path(user.avatar)
        render json: {user: user, avatar: avatar}, include: :vendor, status: :ok
    end
    private

    def user_params
      params.permit(:username, :password, :name, :email, :phone, :address, :DOB, :is_vendor, :avatar)
    end
end
