class MaxIntSet
  attr_reader :store

  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    raise "Out of bounds" unless is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    validate!(num)
  end

  private

  def is_valid?(num)
    return true if num.between?(0, @store.length)
    false
  end

  def validate!(num)
    @store[num]
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end
  
  def remove(num)
    self[num].delete(num)
  end
  
  def include?(num)
    return true if self[num].include?(num)
    false
  end
  
  private
  
  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end
  
  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count
  
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end
  
  def insert(num)
    if !self.include?(num)
      self[num] << num 
      @count += 1
    end
    
    resize! if @count == num_buckets
  end
  
  def remove(num)
    if self.include?(num)
      self[num].delete(num) 
      @count -= 1
    end
  end
  
  def include?(num)
    return true if self[num].include?(num)
    false
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
    @store += Array.new(prev_num_buckets) {Array.new} #double size of @store
    @store.each do |bucket| # go over every subarr in @store
      if bucket            # if subarr exists
        bucket.each do |num|
          self.remove(num)
          self.insert(num)
        end
      end
    end
    @count -= (prev_num_buckets / 2)
  end
end
