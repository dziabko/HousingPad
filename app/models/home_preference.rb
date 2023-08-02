# == Schema Information
#
# Table name: homepreferences
#
#  id             :bigint(8)        not null, primary key
#  user_id       :integer          not null
#  home_id        :integer          not null
#  is_liked  :boolean          not null

#

class HomePreference < ApplicationRecord
    validates :is_liked, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :home,
        foreign_key: :home_id,
        class_name: :Home
end
