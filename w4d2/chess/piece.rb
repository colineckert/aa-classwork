require 'singleton'

class Piece

    attr_reader :color, :board, :piece
    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end

    def to_s
        self.color.to_s
    end

    def empty?
        return true if pos == nil
        false
    end

    def valid_moves
        positions = []
        grid = @board.grid
        grid.each do |row|
            row.each do |col|
                piece = grid[row][col]
                if piece.color != self.color || piece.is_a?(NullPiece) 
                    positions << [row, col]
                end
            end
        end
        positions
    end

    def pos=(val)
        @pos = val
    end
end

class NullPiece < Piece
    include Singleton

    def initialize
        super('', nil, nil)
    end
end

