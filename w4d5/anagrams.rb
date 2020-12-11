require 'byebug'
# phase 1
# generate all possible anagrams
# check if second string is one of these
# ---------------------------------------
# arr.permutation.to_a => arr of all permutations
# string= > arr.permutation.to_a
# permutations = string.chars.permutation.to_a
# check permutations for match
# permutations.include?(string2.chars)

def first_anagram?(str1, str2)
    permutations = str1.chars.permutation.to_a
    permutations.include?(str2.chars)
end
# Time: O(n!)
# Space: O(n!)

p first_anagram?("gizmo", "sally")    #=> false
p first_anagram?("elvis", "lives")    #=> true

# phase 2
# iterates over first string
# each letter, delete at index in 2nd string
# index found for every letter and second string is empty




def second_anagram?(str1, str2)
    # debugger
    # return false if str1.length != str2.length
    str1.chars.each do |char| # O(n)
        str2.delete!(char) unless str2.index(char).nil? # O(n)
    end
    str2.length == 0
end
# Time: O(n**2) ONLY if same string length, else O(n * m)
# Space: O(n)

p second_anagram?("gizmo", "sally")    #=> false
p second_anagram?("elvis", "lives")    #=> true

def third_anagram?(str1, str2)
    str1.chars.sort == str2.chars.sort
end
# Time: O(nlog(n))
# Space: O(n) dont worry

p third_anagram?("gizmo", "sally")    #=> false
p third_anagram?("elvis", "lives")    #=> true

def fourth_anagram?(str1, str2)
    # 2 hash method
    # count1 = Hash.new(0)
    # count2 = Hash.new(0)
    # str1.each_char do |char|
    #     count1[char] += 1
    # end
    # str2.each_char do |char|
    #     count2[char] += 1
    # end
    # count1 == count2

    # Time: O(n)
    # Space: O(n) # n + m cause could be different sizes

    
    count = Hash.new(0)
    str1.each_char do |char|
        count[char] += 1
    end
    str2.each_char do |char|
        count[char] -= 1
    end
    count.all? {|_k, v| v.zero?}

    # Time: O(n)
    # Space: O(n)* note its like n/2
end

p third_anagram?("gizmo", "sally")    #=> false
p third_anagram?("elvis", "lives")    #=> true