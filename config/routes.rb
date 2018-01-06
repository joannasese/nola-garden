Rails.application.routes.draw do
  resources :tags
  resources :growing_seasons
  resources :plants
  resources :sessions
  resources :users

  # nested resource for plants /users/:id/plants
  resources :users do
    resources :plants
  end

  get '/', to: 'users#index'
  get '/signup', to: 'users#new'
  post '/users', to: 'users#create'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  post '/logout', to: 'sessions#destroy'

  # get '/auth/google_oauth2/callback', to: 'sessions#create_with_google'
  get '/auth/:provider/callback', to: 'sessions#create_with_google'
  get '/auth/failure', to: 'users#index'

  # plant JSON
  get '/plants/:id/details', to: 'plants#details'
  get '/plants/:id/seasons', to: 'plants#seasons'
  get '/plants/:id/tags', to: 'plants#tags'
  get '/users/:id/plants', to: 'plants#index'
  # user JSON
  get '/plants/:id', to: 'plants#show'
  # get '/users/:id/plants/:id', to: 'plants#show'
  # get '/users/:id/plants/:id/edit', to: 'plants#edit'
  get '/plants', to: 'plants#index'

end
