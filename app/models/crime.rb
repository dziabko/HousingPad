class Crime < ApplicationRecord
    acts_as_geolocated lat: 'Lat', lng: 'Long'
end
