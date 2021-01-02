require 'action_view'


class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper

  COLORS = ['Black', 'Brown', 'Orange']
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: COLORS
  validates :sex, inclusion: { in: %w(M F), message: "%{value} is not a valid sex "}

  def age
    now = Time.now.utc.to_date
    bd = self.birth_date

    now.year - bd.year
  end

end
