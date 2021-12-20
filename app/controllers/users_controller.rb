class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, includes: :vendors, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end
end
