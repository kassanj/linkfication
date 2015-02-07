require 'sinatra'

get '/' do
   File.read(File.join('public','link.html'))
end
	
