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