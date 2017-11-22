Rails.application.routes.draw do
  resources :growing_seasons
  resources :users
  resources :plants
  resources :sessions

  get '/', to: 'users#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/signup', to: 'users#new'
  post '/users', to: 'users#create'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  post '/logout', to: 'sessions#destroy'

  # get '/auth/google_oauth2/callback', to: 'sessions#create_with_google'
  get '/auth/:provider/callback', to: 'sessions#create_with_google'
  get '/auth/failure', to: 'users#index'

  # get '/plants/new', to: 'plants#new'
  # post '/plants', to: 'plants#create'



end
