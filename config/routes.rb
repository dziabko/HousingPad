Rails.application.routes.draw do
  namespace :api do
    get 'recommendation_engine/get_recommendation'
  end
  namespace :api do
    get 'home_feature/home_liked'
  end
  get 'home_feature/home_liked'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :homes, only: [:index, :show, :create]
    resources :reviews, except: [:new, :edit]
    resources :reservations, except: [:new, :edit]
    get '/homes/get_homes_by_lat_long/:lat/:lng', :to => 'homes#get_homes',  :constraints => { :lat => /.*/, :lng => /.*/ }
    get '/user', :to => 'users#show_user'
    get '/recommendation', :to => 'homes#get_homes'
    # get '/recommendation', :to => 'recommendation_engine#get_user_recommendation'
    post '/updateuser', :to => 'users#update_user'
    post '/homepreferences', :to => 'home_feature#home_liked'
  end  
  root "static_pages#root"
end
