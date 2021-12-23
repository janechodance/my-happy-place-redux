class Vendor < ApplicationRecord
    has_many :subscriptions
    belongs_to :user
    has_many :users, through: :subscriptions
    has_one_attached :logo
    has_many :merchandises
end
