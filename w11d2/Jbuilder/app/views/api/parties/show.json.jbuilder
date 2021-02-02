json.extract! @party, :name, :location#, :guests



json.guests do
  
  p @party.guests
  json.array! @party.guests.each do |guest|
    json.name guest.name
    json.gifts do
      json.array! guest.gifts.each do |gift|
        json.title gift.title
      end
    end
  end
  
end
