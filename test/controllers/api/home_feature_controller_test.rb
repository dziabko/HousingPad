require 'test_helper'

class Api::HomeFeatureControllerTest < ActionDispatch::IntegrationTest
  test "should get home_liked" do
    get api_home_feature_home_liked_url
    assert_response :success
  end

end
