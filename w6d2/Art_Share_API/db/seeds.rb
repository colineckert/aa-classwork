# This file should contain all the record creation needed to seed the database with its default values.

# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

#

# Examples:

#

# movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])

# Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create(username: 'testuser1')
user2 = User.create(username: 'testuser2')
user3 = User.create(username: 'testuser3')
  
Artwork.destroy_all

art1 = Artwork.create(title: 'Painting', image_url: 'google.com', artist_id: user1.id)
art2 = Artwork.create(title: 'Sculpture', image_url: 'art.com', artist_id: user2.id)
art3 = Artwork.create(title: 'Drawing', image_url: 'amazon.com', artist_id: user3.id)

Artworkshare.destroy_all

Artworkshare.create(artwork_id: art1.id, viewer_id: user2.id)
Artworkshare.create(artwork_id: art2.id, viewer_id: user3.id)
Artworkshare.create(artwork_id: art3.id, viewer_id: user1.id)

Comment.destroy_all

Comment.create(user_id: user1.id, artwork_id: art2.id, body: "WOWWWW!")
Comment.create(user_id: user2.id, artwork_id: art3.id, body: "This sucks!")
Comment.create(user_id: user3.id, artwork_id: art1.id, body: "I love this piece.")