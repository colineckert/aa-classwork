class Employee
    
    attr_reader :salary, :boss

    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end
    
    def bonus(multiplier)
        bonus = @salary*multiplier
    end
    
end



class Manager < Employee

    attr_reader :employees

    def initialize(name, title, salary, boss)
        super
        @employees = []
    end

    def add_employee(employee)
        @employees << employee if employee.boss == self
    end

    def bonus(multiplier)
        total_employees_salaries = self.bfs_salaries
        total_employees_salaries*multiplier
    end

    def bfs_salaries
        arr = [self]
        total_salary = 0

        until arr.empty?
            current_person = arr.shift
            if current_person.is_a?(Manager)
                current_person.employees.each do |employee|
                    total_salary += employee.salary
                    arr << employee
                end
            end
        end
        total_salary
    end

end

ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
david = Employee.new("Shawna", "TA", 10000, darren)
shawna = Employee.new("Shawna", "TA", 12000, darren)

ned.add_employee(darren)
darren.add_employee(david)
darren.add_employee(shawna)

p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000