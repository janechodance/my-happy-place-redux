class AddColumnsToProfilepic < ActiveRecord::Migration[6.1]
  def change
    add_column :profilepics, :avatar, :string  
  end
end
