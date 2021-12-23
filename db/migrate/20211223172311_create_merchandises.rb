class CreateMerchandises < ActiveRecord::Migration[6.1]
  def change
    create_table :merchandises do |t|
      t.integer :vendor_id
      t.string :item_name
      t.integer :price
      t.string :description
      t.integer :inventory
      t.boolean :is_sold_out

      t.timestamps
    end
  end
end
