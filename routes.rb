require "sinatra"
require "pry"
require "csv"
# enable :sessions

# creates a blank webpage, converts the data imported from script.js, converts it to CSV and saves it in data.csv
get "/moving" do
	frack = params
	holding = frack.values
	# binding.pry
	# holding= holding.join(",")
	# holding = holding + "\"\n"
	# binding.pry
	CSV.open("data.csv", "a") do |csv| 
		csv << holding 
	end
	
	erb :moving
end