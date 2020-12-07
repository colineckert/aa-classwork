require_relative "card"

class Board

  attr_reader :size

  def initialize(size = 4)
    @size = size
    @grid = Array.new(size) { Array.new(size) }
    populate
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, val)
    row, col = pos
    @grid[row][col] = val
  end

  def populate
    num_pairs = (self.size ** 2) / 2

    cards = Card.shuffled_pairs(num_pairs)

    @grid.each_with_index do |row, row_idx|
      row.each_with_index do |_cell, col_idx|
        pos = [row_idx, col_idx]
        self[pos] = cards.pop
      end
    end
  end

  def render
    system("clear")
    puts "  #{(0...size).to_a.join(' ')}"
    @grid.each_with_index do |row, idx|
      puts "#{idx} #{row.join(' ')}"
    end
  end

  def hide(pos)
    self[pos].hide
  end

  def revealed?(pos)
    self[pos].revealed?
  end

  def reveal(pos)
    if revealed?(pos)
      puts "You can't reveal and card that's already face-up"
    else
      self[pos].reveal
    end
    self[pos].value
  end

  def won?
    @grid.all? do |row|
      row.all?(&:revealed?)
    end
  end

end