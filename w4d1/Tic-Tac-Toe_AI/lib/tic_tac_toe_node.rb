require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board
  attr_accessor :prev_move_pos, :next_mover_mark

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
    @board = board
  end

  def losing_node?(evaluator)
  end

  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    @board.rows.each.with_index do |row, row_idx|
      row.each.with_index do |col, col_idx|
        pos = [row_idx, col_idx]
        if @board.empty?(pos)
          board_state = @board.dup
          board_state[pos] = @next_mover_mark
          TicTacToeNode.new(board_state, @prev_move_pos)
        end
      end
    end
  end
end
