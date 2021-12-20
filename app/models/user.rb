class User < ApplicationRecord
    has_many :subscriptions
    has_many :vendors, through: :subscriptions
    has_one :vendor
end
