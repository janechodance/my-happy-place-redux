class CreateVendors < ActiveRecord::Migration[6.1]
  def change
    create_table :vendors do |t|
      t.integer :user_id
      t.string :store_name
      t.string :category
      t.string :description

      t.timestamps
    end
  end
end
