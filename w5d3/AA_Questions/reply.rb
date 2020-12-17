require_relative "database"
require_relative "question"
require_relative "user"

class Reply
    attr_accessor :id, :body, :user_id, :question_id, :reply_id

    def self.find_by_id(id)
        reply = QuestionsDatabase.instance.execute(<<-SQL, id)
            SELECT *
            FROM replies
            WHERE id = ?
        SQL
        return nil unless reply.length > 0
        Reply.new(reply.first)
    end

    def self.find_by_user_id(user_id)
        reply = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT *
            FROM replies
            WHERE user_id = ?
        SQL
        return nil unless reply.length > 0
        Reply.new(reply.first)
    end

    def self.find_by_question_id(question_id)
        reply = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT *
            FROM replies
            WHERE question_id = ?
        SQL
        return nil unless reply.length > 0
        Reply.new(reply.first)
    end

    def initialize(options)
        @id = options["id"]
        @body = options["body"]
        @user_id = options["user_id"]
        @question_id = options["question_id"]
        @reply_id = options["reply_id"]
    end

    def author
        User.find_by_id(self.user_id)
    end

    def question
        Question.find_by_id(self.question_id)
    end

    def parent_reply
        Reply.find_by_id(self.reply_id)
    end

    def child_replies(question_id, id)
        replies = QuestionsDatabase.instance.execute(<<-SQL, self.question_id, self.id)
            SELECT *
            FROM replies
            WHERE self.question_id = question_id AND (self.id - 1) = id
        SQL
        return nil unless replies.length > 0
        Reply.new(replies.first)
    end

end