require 'sinatra'
require 'securerandom'
# require 'faye-websocket'

#routes
# get '/' do
#   erb :index

# get '/newcall' do
# 	erb :newcall

# get '/about' do
# 	erb :about
# 	end
# 	end
# end
	# $redis = Redis.new

get('/') { erb :index }
# get('/apps') { @apps = Dumbstore::Text.apps.merge(Dumbstore::Voice.apps).values.uniq; erb :apps }
get('/newcall') { erb :newcall }
get('/about') { erb :about }

# @random_url = SecureRandom.urlsafe_base64(20);
