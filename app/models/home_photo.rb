class Upload < ApplicationRecord
    # put table relations here

    # ActiveRecord validations
    validates :file, presence: true
    #validates :user_id, presence: true

    # this allows carrierwave to read the file, save the reference to the database
    # and pass the file over to fog which uploads the image to Amazon or another
    # CDN in production
    mount_uploader :file, FileUploader
end
