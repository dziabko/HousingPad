require 'test_helper'

class HomeFeatureControllerTest < ActionDispatch::IntegrationTest
  test "should get home_liked" do
    get home_feature_home_liked_url
    assert_response :success
  end

end
