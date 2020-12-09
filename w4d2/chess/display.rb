require 'colorize'
require_relative 'cursor'

class Display

    def initialize(board)
        @cursor = Cursor.new([0,0], board)
        @board = board
    end
    
    def render
        @board.each_with_index do |row, i|
            row.each_with_index do |piece, j|
                print piece.symbol
            end
        end
    end
end