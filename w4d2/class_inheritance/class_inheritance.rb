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

    def initialize(name, title, salary, boss, employees)
        super(name, title, salary, boss)
        @employees = []
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
            current_salary = current_person.salary
            current_person.employees.each do |employee|
                total_salary += employee.salary
                arr << employee
            end
        end
        total_salary
    end

end