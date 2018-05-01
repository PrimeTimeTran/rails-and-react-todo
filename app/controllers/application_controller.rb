class ApplicationController < ActionController::API
  def current_user
    session[:user_id] = 1 unless @current_user
    @current_user ||= User.find(session[:user_id])
  end
end
