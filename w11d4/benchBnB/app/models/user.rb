class User < ApplicationRecord

  attr_reader :password 
  validates :username, :session_token, presence: true, uniqueness: true
  # validates :password, length: { mininum: 6, allow_nil: true}
  validates :password, length: { minimum: 6 }, allow_nil: true
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password) 
    user = User.find_by(username: username)

    user && user.is_password?(password) ? (user) : (nil)
  end

  def password=(pw)
    self.password_digest = BCrypt::Password.create(pw)
    @password = pw
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save! 
    self.session_token 
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
