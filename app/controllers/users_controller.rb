class UsersController < ApplicationController
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        avatar = rails_blob_path(user.avatar)
        render json: {user: user, avatar: avatar}, include: [:vendor, :vendors], status: :ok
    end
    def update
        user = User.find(params[:id])
        user.update(avatar: params[:avatar])
        avatar_url = rails.blob_path(user.avatar)
        render render json: {user: user, avatar_url: avatar_url}
    end
    private

    def user_params
      params.permit(:username, :password, :name, :email, :phone, :address, :DOB, :is_vendor)
    end
end
