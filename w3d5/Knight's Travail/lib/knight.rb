require_relative "00_tree_node"
require "byebug"

    #self.root_node(pos)  @root_node = PolyTreeNode.new(pos)
    #build_move_tree used to traverse the tree 
    #build_move_tree only used when #find_path is called
    #::valid_moves(pos) => returns an array, needs to check with @considered_positions

class KnightPathFinder

    self.valid_moves(pos)
        debugger
        x = pos[0]
        y = pos[1]

        possible_moves = [[2, 1], [1, 2], [-2, 1], [-2, -1], [-1, 2], [2, -1], [1, -2], [-1, -2]]

        possible_moves.map! do |pair|
            pair[0] += x
            pair[1] += y
            pair
        end 

        possible_moves.select! do |pair|
            (pair[0] >= 0 && pair[0] < 8) && (pair[1] >= 0 && pair[1] < 8)
        end
    end

    def initialize(pos)
        debugger
        @root_node = PolyTreeNode.new(pos)
        @considered_positions = [@root_node]

    end

    def new_moves_position(pos)
        if !@considered_positions.include?(pos)
    end

end

test = KnightPathFinder.new([0, 0])

p test