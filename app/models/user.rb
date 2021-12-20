class User < ApplicationRecord
    has_secure_password
    has_many :subscriptions
    has_many :vendors, through: :subscriptions
    has_one :vendor
end
