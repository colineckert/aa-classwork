class ApplicationController < ActionController::Base

  helper_method :current_user

  def current_user
    return nil unless session[:session_token]
    User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in_user!(user)
    user.session_token = user.reset_session_token!
    session[:session_token] = user.session_token
  end

end
