class AddCurlIdToLinks < ActiveRecord::Migration[6.0]
  def change
    add_column :links, :curl_id, :string, null: false
  end
end
