require 'singleton'
require_relative 'modules'

class Piece
    attr_reader :color, :board, :pos

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

class Bishop
    include Slideable

    def symbol
        "♗" if self.color == :white
        "♝" if self.color == :black
    end

    private
    def move_dirs
        self.diag_dirs
    end
end

class King
    include Stepable

    def symbol
        "♔" if self.color == :white
        "♚" if self.color == :black
    end

    protected 
    def move_diffs
        [[1,1],
        [1,-1],
        [-1, 1],
        [-1,-1],
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]]
    end
end

class Knight
    include Stepable

    def symbol
        "♘" if self.color == :white
        "♞" if self.color == :black
    end 

    protected
    def move_diffs
        [[2,1],
        [2,-1],
        [-2, 1],
        [-2,-1],
        [1,2],
        [-1,2],
        [1,-2],
        [-1,-2]]
    end
end

class Queen
    include Slideable

    def symbol
        "♕" if self.color == :white
        "♛" if self.color == :black
    end

    private
    def move_dirs
        self.hor_ver_dirs + self.diag_dirs
    end
end

class Rook
    include Slideable

    def symbol
        "♖" if self.color == :white
        "♜" if self.color == :black
    end

    private
    def move_dirs
        self.hor_ver_dirs
    end
end

class Pawn
    

    def symbol
        "♙" if self.color == :white
        "♟︎" if self.color == :black
    end
end