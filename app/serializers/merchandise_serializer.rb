class MerchandiseSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :vendor_id, :item_name, :price, :description, :inventory, :is_sold_out, :merch
  def merch
    rails_blob_path(object.merch, only_path: true) if object.merch.attached?
  end
end
