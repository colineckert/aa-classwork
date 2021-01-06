require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:testuser){FactoryBot.create(:user)}
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_uniqueness_of(:username) }

  describe 'password encryption' do 
    it 'does not save password to the database' do 
      FactoryBot.create(:user, username: 'Harry Potter' )
      user = User.find_by(username: 'Harry Potter' )
      expect( user.password ).not_to eq('password')
    end

    it 'ensure password is encrypted using BCrypt' do  
      expect(BCrypt::Password).to receive(:create).with('123456')
      FactoryBot.build(:user, password: '123456') 
    end
  end

  describe 'find users by credentials' do 
    context 'with a valid username and password' do 
      it 'should return the correct user' do 
        colin = User.create(username: 'Colin_Eckert', password: 'password') 
        user = User.find_by_credentials('Colin_Eckert', 'password')
        expect(user.username).to eq(colin.username)  
        expect(user.password_digest).to eq(colin.password_digest)
      end
    end

    context 'with a invalid username and password' do 
      it 'should return nil' do 
        jen = User.create(username: 'Jen_Eckert', password: 'abcdef') 
        user = User.find_by_credentials('Jen_Eckert', 'bad_password')
        expect(user).to be_nil 
      end
    end
  end
end 














