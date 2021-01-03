require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  COLORS = ['Black', 'Brown', 'Orange'].freeze

  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: COLORS
  validates :sex, inclusion: { in: %w(M F), message: "%{value} is not a valid sex"}

  def age
    time_ago_in_words(self.birth_date)
  end

  has_many :rental_requests,
    foreign_key: :cat_id,
    class_name: :CatRentalRequest,
    dependent: :destroy

end
