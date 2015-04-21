require 'bundler'
Bundler.require()

ActiveRecord::Base.establish_connection(
	:adapter => 'postgresql',
	:database => 'backbone_dash',
	:host => 'localhost'
	)

require './models/card'


get '/' do
  erb :index
end

# get all the cards

get '/api/cards' do 
	content_type :json
	Card.all.to_json
end

# get one specific card

get '/api/cards/:id' do 
	content_type :json
	card = Card.find(params[:id]).to_i
	card.to_json
end

# alter a specific card (put)

put '/api/cards/:id' do 
	content_type :json
	card = Card.find(params[:id].to_i)
	card.update(params[:card]).to_json
end
# alter a specific card (patch)
patch '/api/cards/:id' do 
	content_type :json
	card = Card.find(params[:id].to_i)
	card.update(params[:card]).to_json
end

# delete a specific card

delete '/api/cards/:id' do 
	content_type :json
	card = Card.find(params[:id].to_i)
	card.delete
	{message: "Successfully deleted card"}.to_json
end
# create a new_card

post '/api/cards' do 
	content_type :json
	card = Card.create(params[:card])
	card.to_json
end
