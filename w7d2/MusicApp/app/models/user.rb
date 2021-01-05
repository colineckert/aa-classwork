class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    # S
    # P
    # I
    # R
    # E

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

end
