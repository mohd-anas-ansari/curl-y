class MakeTitleNotNullable < ActiveRecord::Migration[6.0]
  def change
    change_column_null :links, :title, false
  end
end
