class EventsController < ApplicationController
    def index
        events = Event.all
        render json: events, status: :ok
    end
    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end
    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
    end
    def update
        event = Event.find(params[:id])
        event.update!(event_params)
        render json: event, status: :ok        
    end
    private
    def event_params
        params.permit(:vendor_id, :title, :start, :end, :description)
    end
end
