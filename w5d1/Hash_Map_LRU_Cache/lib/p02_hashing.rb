class Integer
  # Integer#hash already implemented for you
end

class Array
  #iterate through arr, call .to_s on ele to get binary => XOR between ele & arr.length
  def hash
    self.each_with_index.inject(0) do |acc_hash, (ele, idx)|
      (ele.hash + idx.hash) ^ acc_hash
    end
  end
end

class String
  def hash
    char_array = self.split("")
    new_arr = char_array.map(&:ord)
    new_arr.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    self.to_a.sort_by(&:hash).hash
  end
end
