class Integer
  # Integer#hash already implemented for you
end

class Array
  #iterate through arr, call .to_s on ele to get binary => XOR between ele & arr.length
  def hash
    if self.empty?
      self.object_id.hash 
    else
      self.inject {|acc, ele| acc ^ self.index(ele) }.hash
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
    0
  end
end
