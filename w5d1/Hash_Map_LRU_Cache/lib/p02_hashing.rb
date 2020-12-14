class Integer
  # Integer#hash already implemented for you
end

class Array
  #iterate through arr, call .to_s on ele to get binary => XOR between ele & arr.length
  def hash
    self.inject {|acc, ele| acc ^ ele }
  end
end

class String
  def hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
