# phase 1
# generate all possible anagrams
# check if second string is one of these
# ---------------------------------------
# arr.permutation.to_a => arr of all permutations
# string= > arr.permutation.to_a
# permutations = string.chars.permutation.to_a
# check permutations for match
# permutations.include?(string2.chars)

# phase 2
# iterates over first string
# each letter, delete at index in 2nd string
# index found for every letter and second string is empty
# recursive

# set first letter to str.first
# find index
# base case: return true if string2.length == 0
# set current char = string2.chars.first
# current idx = string1.index(current char)
# return false if current idx nil
# call method recursively, pass (string[currentidx + 1..-1], str2[1..-1]
# 