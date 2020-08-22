class AddClickCountAndPinnedToLinks < ActiveRecord::Migration[6.0]
  def change
    add_column :links, :click_count, :integer, default: 0
    add_column :links, :is_pinned, :boolean, default: false
  end
end
