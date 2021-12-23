class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :email, :phone, :address, :DOB, :is_vendor
  has_many :vendors, through: :subscriptions
  has_one :vendor
end
