require "byebug"

# my_min

def my_min1(arr)
    (0...arr.length - 1).each do |i| # range is length of array
        return arr[i] if (i+1...arr.length).all? { |j| arr[i] < arr[j] }
    end
    # try with arr.each
end

def my_min2(arr)
    arr.inject { |acc, el| el < acc ? el : acc }
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min1(list)  # =>  -5
# p my_min2(list)  # =>  -5

# largest contiguous sub-sum

def largest_contiguous_subsum1(list)
    # space & time n^3
    sub_sums = [] # space N^3
    [1 2 3]
    (0...list.length).each do |i|
        sub_sums << [list[i]]
        (i+1...list.length).each do |j|
            sub_sums << list[i..j] # O(n)
        end
    end
    # debugger
    (1...sub_sums.length).inject(sub_sums[0].sum) { |acc, el| sub_sums[el].sum > acc ? sub_sums[el].sum : acc } # n^3
end

def largest_contiguous_subsum2(list)
    max = list[0] # takes into account every number is negative
    current = list[0]
    (1...list.length).each do |i|
        if current + list[i] < 0
            current = list[i]
        else
            current += list[i]
        end
        
        if current > max
            max = current
        end
    end
    max




    # v1
    # debugger
    # (1...list.length).each do |i|
    #     if current[0] + list[i] > current.sum
    #         current << list[i]
    #     else
    #         current = [list[i]]
    #     end

    #     max = current if current.sum > max.sum
    # end
    # max.sum
    # max = current if current.sum == max.sum
end

# 2 3 5 -7 10 -20 3 5 7 15
# 2 3 5 [-7] 10 [-20 #set our being to -20index + 1] 
# begin variable to track beginning of sublist
#                 current = 3
#                             8, 15, 15= > 30
#     max sum10 [-3-] [15]
#     [13]
# 2 3 5 -7 10 -20 3 5 7 15
# max = 2
# current = 2
# current = 5
# max <=> current max = 5
# 10
# 3
# 13
# -20 => -7
# reset our current



#  2 3 -7 => -2
list = [5, 3, -7]
# p largest_contiguous_subsum1(list) # => 8
p largest_contiguous_subsum2(list) # => 8

arr = %w{2 3 5 -7 10 -20 3 5 7 15}.map {|ele| ele.to_i}
p largest_contiguous_subsum2(arr)