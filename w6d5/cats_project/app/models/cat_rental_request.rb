class CatRentalRequest < ApplicationRecord
  STATUS_STATES = %w(APPROVED DENIED PENDING).freeze

  validates :start_date, :end_date, :status, presence: true
  validates :status, inclusion: STATUS_STATES
  validate :does_not_overlap_approved_request

  belongs_to :cat,
    foreign_key: :cat_id,
    class_name: :Cat

  def approved?
    self.status == 'APPROVED'
  end

  def denied?
    self.status == 'DENIED'
  end

  def pending?
    self.status == 'PENDING'
  end

  def approve!
    raise 'not pending' unless self.status == 'PENDING'
    
    transaction do
      self.status = 'APPROVED'
      self.save!

      overlapping_pending_requests.each do |request|
        request.update!(status: 'DENIED')
      end
    end
  end

  def deny!
    self.status = 'DENIED'
    self.save!
  end
  
  private

  def overlapping_requests
    CatRentalRequest
      .where.not(id: self.id)
      .where(cat_id: cat_id)
      .where.not('start_date > :end_date OR end_date < :start_date', 
              start_date: start_date, end_date: end_date)
  end

  def overlapping_approved_requests
    overlapping_requests.where("status = 'APPROVED'")
  end

  def overlapping_pending_requests
    overlapping_requests.where("status = 'PENDING'")
  end

  def does_not_overlap_approved_request
    return if self.denied?

    unless overlapping_approved_requests.empty?
      errors[:base] << 'Request conflicts with existing approved request'
    end
  end

end
