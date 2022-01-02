Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :users, only: [:index, :show]
  resources :subscriptions, only: [:index, :show]
  resources :vendors, only: [:index, :show]
  post "/login", to: "sessions#create"
end
