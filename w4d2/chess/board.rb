require_relative 'piece'

class Board 

    attr_accessor :grid

    def initialize
        @null_piece = NullPiece.instance
        @grid = Array.new(8){Array.new(8)}

        @grid.each_with_index do |row, row_idx|
            row.each_with_index do |col, col_idx|
                pos = [row_idx, col_idx]
                if row_idx < 2
                    @grid[row_idx][col_idx] = Piece.new(:white, self, pos)
                elsif row_idx > 5
                    @grid[row_idx][col_idx] = Piece.new(:black, self, pos)
                else
                    @grid[row_idx][col_idx] = @null_piece
                end
            end
        end
    end
    
    def [](pos)
        row, col = pos
        @grid[row][col]
    end

    def []=(pos, val)
        # self[pos] = val
        row, col = pos
        @grid[row][col] = val
    end

    def move_piece(start_pos, end_pos)
        raise 'No piece at entered position.' if self[start_pos] == @null_piece
        raise 'Not a valid move.' if !self[start_pos].valid_moves.include?(end_pos)

        self[end_pos] = self[start_pos]
        self[start_pos] = @null_piece
    end

    
    
    
    private

    attr_reader :null_piece

end