require "byebug"

class PolyTreeNode
    attr_reader :parent, :children, :value
    def initialize(value)
        @parent = nil
        @children = []
        @value = value
    end

    def inspect
        # { 'value' => @value, 'children' => @children.each do }.inspect
        # @children.each do |child|
        #     puts "#{child.value}"
        # end
        "value: #{self.value}, children: #{@children.map { |child| child.value }}"
    end

    def parent=(value)

        if @parent != nil 
            @parent.children.delete(self)
        end

        @parent = value
        if value != nil
            if !@parent.children.include?(self)
                @parent.children << self
            end
        end

    end

    def add_child(child)
        child.parent = self
    end

    def remove_child(child)
        if !@children.include?(child)
            raise 'Not my child'
        end
        @children.delete(child)
        child.parent = nil
    end

    def dfs(target_value)
        return self if self.value == target_value
        return nil if self.children == []

        @children.each do |child|
            search_result = child.dfs(target_value)
            return search_result if search_result != nil
        end
        nil
    end

    def bfs(target_value)
        arr = [self]
        until arr.empty?
            ele = arr.shift
            return ele if ele.value == target_value
            arr.push(*ele.children)
        end
    end
    
end
