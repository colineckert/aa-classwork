require_relative 'piece'

class Board 

    def initialize
        @null_piece = NullPiece.instance
        @rows = Array.new(8){Array.new(8)}

        @rows.each_with_index do |row, row_idx|
            row.each_with_index do |col, col_idx|
                pos = [row_idx, col_idx]
                if row_idx < 2
                    @rows[row_idx][col_idx] = Piece.new(:white, self, pos)
                elsif row_idx > 5
                    @rows[row_idx][col_idx] = Piece.new(:black, self, pos)
                else
                    @rows[row_idx][col_idx] = @null_piece
                end
            end
        end
    end
    

end