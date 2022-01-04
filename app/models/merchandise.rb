class Merchandise < ApplicationRecord
    belongs_to :vendor
    has_one_attached :merch, dependent: :destroy


end
