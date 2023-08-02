require 'test_helper'

class Api::RecommendationEngineControllerTest < ActionDispatch::IntegrationTest
  test "should get get_recommendation" do
    get api_recommendation_engine_get_recommendation_url
    assert_response :success
  end

end
