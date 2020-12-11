class TowerOfHanoi
    attr_accessor :stacks

    STACKS = [
    [1,2],
    [3,4],
    [6,5]
    ]

    def initialize
        @stacks = STACKS.each { |stack| stack.shuffle! }
    end

    def move
        until self.won?
            self.render

            puts "What tower do you want to grab from? (0-2)"
            old_tower = gets.chomp.to_i
            puts "What tower do you want to move the disc to? (0-2)"
            new_tower = gets.chomp.to_i 

            if valid_move?(@stacks[old_tower], @stacks[new_tower])
                disc = @stacks[old_tower].pop
                @stacks[new_tower].push(disc)
            end
        end
    end

    def valid_move?(start_tower, end_tower)
        return true if end_tower.empty? || (start_tower.last < end_tower.last)
        false
    end

    def render
        @stacks.each do |stack|
            puts "#{stack}"
        end
    end

    def won?
        if @stacks.count(&:empty?) == 2
            puts "You win!"
            return true
        else
            false
        end
    end

end

