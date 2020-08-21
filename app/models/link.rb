class Link < ApplicationRecord
  validates :title, presence: true
  validates :source_url, presence: true
  validates :source_url, format: URI::regexp(%w[http https])
end