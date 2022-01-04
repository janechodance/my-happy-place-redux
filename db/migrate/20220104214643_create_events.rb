class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :vendor_id
      t.text :title
      t.datetime :start
      t.datetime :end
      t.text :type
      t.text :description
      t.timestamps
    end
  end
end
