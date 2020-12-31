class Artwork < ApplicationRecord
    validates :title, :image_url, presence: true
    validates :artist_id, uniqueness: { scope: :title}

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

    has_many :shares, 
    foreign_key: :artwork_id, 
    class_name: :Artworkshare

    has_many :comments, 
    foreign_key: :artwork_id, 
    class_name: :Comment, 
    dependent: :destroy

    has_many :shared_viewers, 
    through: :shares, 
    source: :viewer
end
