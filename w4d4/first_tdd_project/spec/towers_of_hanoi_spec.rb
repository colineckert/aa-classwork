require 'rspec'
require 'towers_of_hanoi'

describe TowerOfHanoi do
    subject(:stack) {TowerOfHanoi.new}

    describe "#initialize" do
        it "creates stacks" do
            expect(stack.stacks).to eq(stack.stacks)  
        end
    end

    describe "#valid_move?" do
        it "should return true if you're moving disc to a valid position" do
            expect(stack.valid_move?(stack.stacks[0], stack.stacks[1])).to be true
        end

        it "should return false if you're moving a disc to an invalid position" do
            expect(stack.valid_move?(stack.stacks[1], stack.stacks[0])).to be false
        end
    end

    describe "#won?" do
        before do
            stack.stacks = [[], [], [6,5,4,3,2,1]]
        end
        it "should return true if all discs are in one stack" do
            expect(stack.won?).to be true
        end
    end

    describe "#move" do
        it "calls #won?" do
            allow(stack).to receive(:won?)
        end

        it "calls #render" do
            allow(stack).to receive(:render)
        end

    end
end