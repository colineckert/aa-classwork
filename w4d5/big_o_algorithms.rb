require "byebug"

# my_min

def my_min1(arr)
    (0...arr.length - 1).each do |i|
        return arr[i] if (i+1...arr.length).all? { |j| arr[i] < arr[j] }
    end
end

def my_min2(arr)
    arr.inject { |acc, el| el < acc ? el : acc }
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min1(list)  # =>  -5
# p my_min2(list)  # =>  -5

# largest contiguous sub-sum

def largest_contiguous_subsum1(list)
    sub_sums = []
    (0...list.length).each do |i|
        sub_sums << [list[i]]
        (i+1...list.length).each do |j|
            sub_sums << list[i..j]
        end
    end
    # debugger
    (1...sub_sums.length).inject(sub_sums[0].sum) { |acc, el| sub_sums[el].sum > acc ? sub_sums[el].sum : acc }
end

list = [5, 3, -7]
p largest_contiguous_subsum1(list) # => 8