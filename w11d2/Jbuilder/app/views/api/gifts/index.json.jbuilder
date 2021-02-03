json.array! @gifts.each do |gift|

  json.extract! gift, :id, :title, :description

end