class ProfilepicsController < ApplicationController
    def create
        profilepic = Profilepic.create(profilepic_params)
        render json: profilepic, status: :created
    end
    def index
        profilepics = Profilepic.all
        render json: profilepics, status: :ok
    end
    private
    def profilepic_params
        params.permit(:user_id, :avatar)
    end
end
 