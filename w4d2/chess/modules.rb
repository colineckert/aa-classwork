module Slideable

    HOR_VER_DIRS = [
        [1,0]
        [-1,0]
        [0,1]
        [0,-1]
    ]

    DIAG_DIRS = [
        [1,1]
        [1,-1]
        [-1, 1]
        [-1,-1]
    ]

    def hor_vir_dirs
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

    def grow_unblocked_movesin_dir(dx, dy)
    end
end

module Stepable
    
end