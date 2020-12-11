require "byebug"

def my_uniq(arr)
    new_arr = []
    arr.each do |ele|
        new_arr << ele if !new_arr.include?(ele)
    end
    new_arr
end

def my_two_sum(arr)
    new_arr = []
    (0...arr.length).each do |idx1|
        (idx1...arr.length).each do |idx2|
            new_arr << [idx1, idx2] if arr[idx1] + arr[idx2] == 0 && idx2 > idx1
        end
    end
    new_arr
end

def my_transpose(matrix)
    new_arr = []
    (0...matrix.length).each do |row|
        new_row = []
        (0...matrix.length).each do |col|
            new_row << matrix[col][row]
        end
        new_arr << new_row
    end
    new_arr
end

# Stock Picker
# Write a method that takes an array of stock prices (prices on days 0, 1, ...), and outputs the most profitable pair of days on which to first buy the stock and then sell the stock. Remember, you can't sell stock before you buy it!
#trying to find biggest delta
#array. ele = value. index = day
#return the pair of indices that are most profitable

def stock_picker(days)
    max = 0
    arr = []
    (0...days.length - 1).each do |i|
        (i...days.length).each do |j|
        # debugger
            delta = days[j] - days[i]
            if delta > max 
                max = delta 
                arr = [i, j] 
            end 
        end
    end
    arr
end