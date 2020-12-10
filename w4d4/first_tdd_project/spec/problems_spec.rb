require 'rspec'
require 'problems'

describe "#my_uniq" do
    subject(:test_array) { [1, 2, 3, 3, 3, 4, 4] }
    it "should only return unique elements" do
        expect(my_uniq(test_array)).to eq([1,2,3,4])
    end
    it "should return a new array" do 
        expect(my_uniq(test_array)).to_not be(test_array)
    end

    it "should return an empty array if given array is empty" do 
        expect(my_uniq([])).to eq([])
    end
end

describe "#my_two_sum" do
    it "should return indices of pairs that sum to zero" do
        expect(my_two_sum([0, 2, -2])).to eq([[1,2]])
    end

    it "should return multiple pairs" do
        expect(my_two_sum([-1, 0, 2, -2, 1])).to eq([[0,4], [2,3]])
    end

    it "should not return a pair of the same indices" do
        expect(my_two_sum([0, 2, -2])).to_not eq([[0,0], [1,2]])
    end
end

describe "#my_transpose" do 
    subject(:test_matrix) { [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
    ] }
    it "should transpose the matrix" do 
        expect(my_transpose(test_matrix)).to eq(test_matrix.transpose)
    end
    it "should return a new matrix" do 
        expect(my_transpose(test_matrix)).to_not be(test_matrix)
    end
end