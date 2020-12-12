#Brute force
require 'set'
require 'byebug'
def bad_two_sum?(arr, target)
    (0...arr.length - 1).each do |i|
        (i+1...arr.length).each do |j|
            return true if arr[i] + arr[j] == target
        end
    end
    false
end

# Time: O(n^2)
# Space: O(n^2) # Ryan told us that ranges count as O(n)

arr = [0, 1, 5, 7]
p bad_two_sum?(arr, 6) # => should be true
p bad_two_sum?(arr, 10) # => should be false


# Sorting
def okay_two_sum?(arr, target)
    sorted = arr.sort  # n log n => quicksort => is nlogn DOMINANT
    sorted.each_with_index do |num, i| # => O(n)
        # return true if sorted[i] + sorted[-1 - i] == target
        return true if sorted[i + 1 .. - 1].bsearch {|number| target - num <=> number} # => O(log(n))
        # ASK TA ABOUT BSEARCH
        # bsearch {|ele| pivot <=> ele}
    end
    false
end
# Time: nlgn

arr = [0, 1, 5, 7]
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 10) # => should be false

def two_sum?(arr, target)
    hash = {}
    arr.each do |ele|
        return true if hash[target - ele]
        hash[ele] = true
    end
    false
end
# Time: O(n)

arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false