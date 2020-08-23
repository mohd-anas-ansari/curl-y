class Link < ApplicationRecord
  validates :title, presence: true
  validates :source_url, presence: true
  validates :source_url, format: URI::regexp(%w[http https])
  validates :source_url, format: { without: /\s/, message: "must contain no spaces" }
  validates_uniqueness_of :source_url



  def assign_random_string_to_curl_id
    self.curl_id = generate_random_string
  end
  
  def generate_random_string
    loop do
      random_string = SecureRandom.alphanumeric(6)
      puts random_string, "CURL ID"
      break random_string unless Link.where(curl_id: random_string).exists?
    end
  end
end