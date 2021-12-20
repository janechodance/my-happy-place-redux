class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, include: :vendors, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, include: :vendor, status: :ok
    end
end
