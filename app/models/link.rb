class Link < ApplicationRecord
  validates :title, presence: true
  validates :source_url, presence: true
  validates :source_url, format: URI::regexp(%w[http https])
  validates :source_url, format: { without: /\s/, message: "must contain no spaces" }
end