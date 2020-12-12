def windowed_max_range(array, window_size)
    current_max_range = nil
    (0..array.length - window_size).each do |idx|
        max = array[idx...idx + window_size].max
        min = array[idx...idx + window_size].min 
        range = max - min
        current_max_range = range if current_max_range.nil? || range > current_max_range
    end
    current_max_range
end

# p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
# p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
# p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
# p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

class MyQueue

    def initialize
        @store = []
    end

    def peek
        @store
    end

    def size 
        @store.length
    end

    def enqueue(ele)
        @store << ele
    end

    def dequeue
        @store.shift
    end

end

def queue_max_range(array, window_size)
    queue = MyQueue.new
    window_size.times do 
        queue.enqueue(array.shift)
    end
    
    current_max_range = nil
    until array.empty?
        queue.dequeue
        queue.enqueue(array.shift)
        min = queue.peek.min
        max = queue.peek.max
        range = max - min 
        current_max_range = range if current_max_range.nil? || range > current_max_range
    end

    current_max_range
end

# p queue_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
# p queue_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
# p queue_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
# p queue_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8


class MyStack
  
    def initialize
        @store = []
    end

    def peek
        @store
    end

    def size 
        @store.length
    end

    def empty?
        @store.empty?
    end

    def pop
        @store.pop 
    end

    def push(ele)
        @store << ele 
    end

end

class StackQueue < MyStack 

    def initialize
        @stack = MyStack.new 
        @queue = MyStack.new 
    end

    def size
        @stack.size
    end

    def empty?
        @stack.empty?
    end

    def enqueue
        @queue.push(dequeue)
    end

    def dequeue
        @stack.pop
    end

end