class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true

    has_many :artworks, 
    foreign_key: :artist_id, 
    class_name: :Artwork,
    dependent: :destroy

    has_many :shares, 
    foreign_key: :viewer_id, 
    class_name: :Artworkshare, 
    dependent: :destroy

    has_many :comments, 
    foreign_key: :user_id, 
    class_name: :Comment, 
    dependent: :destroy

    has_many :shared_artworks, 
    through: :shares, 
    source: :artwork
end
