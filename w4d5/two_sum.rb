#Brute force
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
    sorted = arr.sort 
    
end