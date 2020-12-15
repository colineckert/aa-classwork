class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    # self[num] => self[key.hash]
    self[key.hash] << key
    @count += 1
    resize! if @count == num_buckets
  end

  def include?(key)
    self[key.hash].include?(key)
  end

  def remove(key)
    if self.include?(key)
      self[key.hash].delete(key)
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    prev_num_buckets = num_buckets
    @store += Array.new(prev_num_buckets) { Array.new }
    @store.each do |bucket|
      if bucket 
        bucket.each do |key|
          self.remove(key)
          self.insert(key)
        end
      end
    end
    @count -= (prev_num_buckets / 2)
  end
end
