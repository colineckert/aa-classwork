require_relative "database"
require_relative "question"
require_relative "reply"

class User
    attr_accessor :id, :fname, :lname 

    def self.find_by_id(id)
        person = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT *
            FROM users
            WHERE id = ?
        SQL
        return nil unless person.length > 0
        User.new(person.first)
    end

    def self.find_by_name(fname, lname)
        person = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
            SELECT *
            FROM users
            WHERE fname = ?, lname = ?
        SQL
        return nil unless person.length > 0
        User.new(person.first)
    end

    def initialize(options)
        @id = options["id"]
        @fname = options["fname"]
        @lname = options["lname"]
    end

    def authored_questions
        Question.find_by_user_id(self.id)
    end

    def authored_replies
        Reply.find_by_user_id(self.id)
    end


end