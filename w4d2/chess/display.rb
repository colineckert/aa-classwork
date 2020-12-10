require 'byebug'

require 'colorize'
require_relative 'cursor'
require_relative 'board'

class Display

    def initialize(board)
        @cursor = Cursor.new([0,0], board)
        @board = board
    end
    
    def render
        @board.grid.each_with_index do |row, i|
            row.map! do |piece|
                if @cursor.cursor_pos == piece.pos
                    piece.symbol.colorize({ background: :red }) 
                else
                    piece.symbol if piece.class != NullPiece
                end
            end
            puts row.join(" ")
        end
    end
end