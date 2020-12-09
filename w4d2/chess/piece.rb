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
        (0..7).each do |row|
            (0..7).each do |col|
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

    private
    def move_into_check?(end_pos)
        board_dup = @board.dup 
        board_dup.move_piece(self.pos, end_pos)
        possible_moves = board_dup[end_pos].moves 
        possible_moves.any? do |move|
            board_dup[move].class == King && board_dup[move].color != self.color
        end
    end

end

class NullPiece < Piece
    include Singleton

    def initialize
        super('', nil, nil)
    end
end

class Bishop < Piece
    include Slideable

    def initialize(color, board, position)
        super
    end

    def symbol
        "♗" if self.color == :white
        "♝" if self.color == :black
    end

    private
    def move_dirs
        self.diag_dirs
    end
end

class King < Piece
    include Stepable

    def initialize(color, board, position)
        super
    end

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

class Knight < Piece
    include Stepable

    def initialize(color, board, position)
        super
    end

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

class Queen < Piece
    include Slideable

    def initialize(color, board, position)
        super
    end

    def symbol
        "♕" if self.color == :white
        "♛" if self.color == :black
    end

    private
    def move_dirs
        self.hor_ver_dirs + self.diag_dirs
    end
end

class Rook < Piece
    include Slideable

    def initialize(color, board, position)
        super
    end

    def symbol
        "♖" if self.color == :white
        "♜" if self.color == :black
    end

    private
    def move_dirs
        hor_ver_dirs
    end
end

class Pawn < Piece

    # def initialize(color, board, position)
    #     super
    # end

    def symbol
        "♙" if self.color == :white
        "♟︎" if self.color == :black
    end

    def move
        forward_steps + side_attacks
    end

    private

    def at_start_row?
        if self.color == :white 
            return true if self.pos[0] == 1
        else
            return true if self.pos[0] == 6
        end
        false
    end
    
    def forward_dir
        self.color == :white ? 1 : -1
    end

    def forward_steps
        #return array of all possible forward steps you can do
        f_steps = []
        dx = self.pos[0] + forward_dir
        f_steps << [dx, self.pos[1]] if self.valid_moves.include?([dx, self.pos[1]]) #@board[[dx, self.pos[1]]].is_a?(NullPiece)
        if at_start_row?
            dx_two = self.pos[0] + 2*forward_dir 
            f_steps << [dx_two, self.pos[1]] if self.valid_moves.include?([dx_two, self.pos[1]]) #@board[[dx, self.pos[1]]].is_a?(NullPiece)
        end
        f_steps
    end

    def side_attacks
        s_moves = []
        x, y = self.pos

        if self.color == :white
            dir = [[1,1], [1,-1]]
            dir.each do |d|
                dx, dy = d
                new_pos = x+dx, y+dy
                if !@board[new_pos].is_a?(NullPiece) && @board[new_pos].color != self.color
                    s_moves << new_pos
                end
            end
        else
            dir = [[-1,1], [-1,-1]]
            dir.each do |d|
                dx, dy = d
                new_pos = x+dx, y+dy
                if !@board[new_pos].is_a?(NullPiece) && @board[new_pos].color != self.color
                    s_moves << new_pos
                end
            end
        end
        s_moves
    end

end
