Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :users, only: [:index, :show, :create, :update]
  resources :subscriptions, only: [:index, :show]
  resources :vendors, only: [:index, :show]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post '/rails/active_storage/direct_uploads', to: 'direct_uploads#create'
end
