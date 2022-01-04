class CreateEvent < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :vendor_id
      t.string :title
      t.datetime :start
      t.datetime :end
      t.string :type
      t.string :description
      t.timestamps
    end
  end
end
