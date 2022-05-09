class SubscriptionsController < ApplicationController
    def index
        subscriptions = Subscription.all
        render json: subscriptions, status: :ok
    end
    def create
        subscription = Subscription.create!(subscription_params)
        render json: subscription, status: :created
    end
    def destroy
        subscription = Subscription.find(subscription_params)
        subscription.destroy
        head :no_content
    end
    private
    def subscription_params
        params.permit(:vendor_id, :user_id)
    end
    
end
