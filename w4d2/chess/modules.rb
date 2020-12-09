module Slideable

    HOR_VER_DIRS = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ]

    DIAG_DIRS = [
        [1,1],
        [1,-1],
        [-1, 1],
        [-1,-1]
    ]

    def hor_ver_dirs
        return HOR_VER_DIRS
    end

    def diag_dirs 
        return DIAG_DIRS
    end

    def moves
        possible_moves = []
        moves_dirs.each do |move|
            dx, dy = move
            possible_moves.concat(grow_unblocked_movesin_dir(dx, dy))
        end
        possible_moves
    end

    def moves_dirs
    end

    def grow_unblocked_movesin_dir(dx, dy)
        extended_moves = []
        pos_dup = [self.pos.dup[0] + dx,  self.pos.dup[1] + dy]
        
        until !self.valid_moves.include?(pos_dup)
            extended_moves << pos_dup
            break if self.board[pos_dup].color != self.color && !self.board[pos_dup].is_a?(NullPiece)
            x, y = pos_dup
            pos_dup = x + dx, y + dy
        end
        extended_moves
    end

end

module Stepable

    def moves
        possible_steps = []
        moves_diffs.each do |step|
            dx, dy = step
            x, y = self.pos
            new_pos = [x + dx, y + dy]
            possible_steps << new_pos if self.valid_moves.include?(new_pos)
        end
        possible_steps
    end

    def move_diffs
    end

end