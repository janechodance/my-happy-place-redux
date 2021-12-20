class Vendor < ApplicationRecord
    has_many :subscriptions
    belongs_to :user
    has_many :users, through: :subscriptions
end
