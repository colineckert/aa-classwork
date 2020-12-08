require "byebug"
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
    #board is over
    #board.winner == oppnent
    # @board[@prev_move_pos]
    return true if @board.over? && @board.winner != evaluator
    false
  end

  def winning_node?(evaluator)
    return true if @board.over? && @board.winner == evaluator
    false
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    @next_mover_mark = (@next_mover_mark == :x ? :o : :x)
    
    arr= []
    @board.rows.each.with_index do |row, row_idx|
      row.each.with_index do |col, col_idx|
        pos = [row_idx, col_idx]
        if @board.empty?(pos)

          board_state = @board.dup
          board_state[pos] = @next_mover_mark
          @prev_move_pos = pos
          
          arr << TicTacToeNode.new(board_state, @next_mover_mark, @prev_move_pos)
        end
      end
    end
    arr
  end
end
