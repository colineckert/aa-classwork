class Post < ApplicationRecord
  validates :title, :author_id, presence: true
  #attr_accessor :sub_ids <--- same as def sub_ids=()

  belongs_to :author, 
  foreign_key: :author_id, 
  class_name: :User

  has_many :post_subs,
  foreign_key: :post_id,
  class_name: :PostSub

  has_many :subs,
  through: :post_subs,
  source: :sub

  def sub_ids=(sub_ids)
    @sub_ids = sub_ids
  end
end
