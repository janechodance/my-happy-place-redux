class DropTableprofilepics < ActiveRecord::Migration[6.1]
  def change
    drop_table :profilepics
  end
end
