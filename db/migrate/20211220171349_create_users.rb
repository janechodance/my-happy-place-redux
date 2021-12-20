class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :address
      t.date :DOB
      t.boolean :is_vendor

      t.timestamps
    end
  end
end
