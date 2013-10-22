require 'sinatra'
require 'securerandom'
# require 'faye-websocket'

#routes
get '/' do
  erb :index
end

get '/newcall' do
	erb :newcall
	random_url = SecureRandom.urlsafe_base64(20)
end

get '/about' do
	erb :about
end



	# $redis = Redis.new
