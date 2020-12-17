require_relative "database"
require_relative "user"
require_relative "reply"

class Question
    attr_accessor :id, :title, :body, :user_id

    def self.find_by_id(id)
        question = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT *
            FROM questions
            WHERE id = ?
        SQL
        return nil unless question.length > 0
        Question.new(question.first)
    end

    def self.find_by_user_id(user_id)
        question = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT *
            FROM questions
            WHERE user_id = ?
        SQL
        return nil unless question.length > 0
        Question.new(question.first)
    end

    def initialize(options)
        @id = options["id"]
        @title = options["title"]
        @body = options["body"]
        @user_id = options["user_id"]
    end

    def author 
        raise "#{self} not in database" unless self.id
        User.find_by_id(self.user_id)
    end

    def replies
        Reply.find_by_question_id(self.id)
    end


end