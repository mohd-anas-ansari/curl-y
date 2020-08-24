Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root "links#index"
  resources :links, only: [:index, :new, :create, :show, :edit]
  get "/curls/:curl_id" => "links#update"

  get "/:curl_id" => "links#fetch_source_url"
end
