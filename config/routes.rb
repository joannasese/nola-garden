Rails.application.routes.draw do
  resources :growing_seasons
  resources :users
  resources :plants

  get '/', to: 'users#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/signup', to: 'users#new'
  post '/users', to: 'users#create'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

end
