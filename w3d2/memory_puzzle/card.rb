class Card

  ALPHABET = ('a'..'z').to_a

  def self.shuffled_pairs(num_pairs)
    possible_values = ALPHABET.shuffle 
    cards = []

    num_pairs.times do 
      letter = possible_values.pop

      card_1 = Card.new(letter)
      card_2 = Card.new(letter)

      cards << card_1 << card_2
    end

    cards.shuffle!
  end

  attr_reader :value

  def initialize(value, revealed = false)
    @value = value
    @revealed = revealed
  end

  def hide
    @revealed = false
  end

  def reveal
    @revealed = true
  end

  def revealed?
    @revealed
  end

  def to_s
    revealed? ? value.to_s : " "
  end

  def ==(object)
    object.is_a?(self.class) && object.value == value
  end

end