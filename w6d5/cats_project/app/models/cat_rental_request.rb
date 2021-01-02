class CatRentalRequest < ApplicationRecord

  validates :start_date, :end_date, :status, presence: true
  validates :status, inclusion: { in: %w(PENDING APPROVED DENIED), 
    message: "%{value} is not a valid status"} 

  belongs_to :cat,
    foreign_key: :cat_id,
    class_name: :Cat

end
