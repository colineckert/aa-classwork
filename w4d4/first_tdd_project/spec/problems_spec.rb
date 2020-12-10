require 'rspec'
require 'problems'

describe "#my_uniq" do
    let(:test_array) { [1, 2, 3, 3, 3, 4, 4] }
    it "should only return unique elements" do
        # test_array.each do |ele|

        # end
        expect(my_uniq(test_array)).to eq([1,2,3,4])
    end
    it "should return a new array" do 
        expect(my_uniq(test_array)).to_not be(test_array)
    end

    it "should return an empty array if given array is empty" do 
        expect(my_uniq([])).to eq([])
    end
end