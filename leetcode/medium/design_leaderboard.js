// O(nlog(n)) time | O(n) space
class Leaderboard {
    constructor() {
        this.playerScores = {};
    }
    
    addScore(playerId, score) {
        if (!(playerId in this.playerScores)) {
            this.playerScores[playerId] = score;
        } else {
            this.playerScores[playerId] += score;
        }
    };
    
    top(K) {
        const sortedScores = Object.values(this.playerScores)
            .sort((a, b) => b - a);
        
        let sum = 0;
        for (let i = 0; i < K; i++) {
            sum += sortedScores[i];
        }
        
        return sum;
    };
    
    reset(playerId) {
        this.playerScores[playerId] = 0;
    };
};
