require_relative 'piece'

class Board 

    attr_accessor :grid

    def initialize
        @null_piece = NullPiece.instance
        @grid = Array.new(8){Array.new(8)}

        @grid.each_with_index do |row, row_idx|
            row.each_with_index do |col, col_idx|
                pos = [row_idx, col_idx]
                if row_idx == 1
                    @grid[row_idx][col_idx] = Pawn.new(:white, self, pos)
                elsif row_idx ==6 
                    @grid[row_idx][col_idx] = Pawn.new(:black, self, pos)
                elsif row_idx == 0
                    back_row(:white)
                elsif row_idx == 7
                    back_row(:black)
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
        raise 'Not a valid move.' if !self[start_pos].moves.include?(end_pos)

        self[end_pos] = self[start_pos]
        self[start_pos] = @null_piece
    end

    def dup
        new_board = Board.new
        self.grid.each_with_index do |row, i|
            row.each_with_index do |piece, j|
                new_board[[i, j]] = piece.class.new(piece.color, new_board, [i, j])
            end
        end
        new_board
    end

    def valid_pos?(pos)
        x, y = pos
        return true if x.between?(0,7) && y.between?(0,7)
        false
    end

    
    private
    def back_row(color)
        filler = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook]

        if color == :white
            filler.each_with_index do |piece, i|
                @grid[0][i] = piece.new(color, self, [0,i])
            end
        else
            filler.each_with_index do |piece, i|
                @grid[7][i] = piece.new(color, self, [7,i])
            end
        end
    end
    
    

    attr_reader :null_piece

end