require 'singleton'

class Piece

    attr_reader :color, :board, :piece
    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end
end

class NullPiece < Piece
    include Singleton

    def initialize
        super('', nil, nil)
    end
end