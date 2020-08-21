class AddSourceUrlToLinks < ActiveRecord::Migration[6.0]
  def change
    add_column :links, :source_url, :string, null: false
  end
end
