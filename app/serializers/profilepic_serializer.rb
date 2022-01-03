class ProfilepicSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :user_id, :avatar
  has_one :user
  def avatar
    rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
  end
end
