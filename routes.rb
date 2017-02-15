require "sinatra"
require "pry"
require "csv"
enable :sessions
# creates a blank webpage, converts the data imported from script.js, converts it to CSV and saves it in data.csv
get "/moving" do
frack = params
CSV.open("data.csv", "wb") {|csv| frack.to_a.each {|elem| csv << elem} }
binding.pry
erb :moving
	end