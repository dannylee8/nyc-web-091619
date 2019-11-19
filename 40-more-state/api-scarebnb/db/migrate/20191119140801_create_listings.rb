class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :name
      t.string :address
      t.float :scare_level
      t.integer :age
      t.integer :victim_count
      t.boolean :hot_tub
      t.string :image

      t.timestamps
    end
  end
end
