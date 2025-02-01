// 定义排行榜数据结构
export type Leaderboard = number[];
export class GameDate {
    // 静态属性，用于存储单例实例
    private static _instance: GameDate;
    public static getInstance(): GameDate {
        if (!this._instance) {
            this._instance = new GameDate();
        }
        return this._instance;
    }
    // 私有构造函数，防止外部实例化
    private constructor() {}

    // 获取当前排行榜数据
    getCurrentLeaderboard(): Leaderboard {
        return getLeaderboardFromLocalStorage();
    }
    // 更新排行榜数据
    updateLeaderboard(newScore: number): void {
        // 从 localStorage 中获取当前排行榜数据
        let leaderboard = getLeaderboardFromLocalStorage();
        // 将新分数添加到排行榜数组中
        leaderboard.push(newScore);
        // 对排行榜数组进行降序排序
        leaderboard.sort((a, b) => b - a);
        // 截取前三个分数作为新的排行榜数据
        leaderboard = leaderboard.slice(0, 3);
        // 将更新后的排行榜数据保存到 localStorage 中
        saveLeaderboardToLocalStorage(leaderboard);
    }
}

// 从 localStorage 中获取排行榜数据
function getLeaderboardFromLocalStorage(): Leaderboard {
    const leaderboardData = localStorage.getItem("gameLeaderboard");
    if (leaderboardData) {
        return JSON.parse(leaderboardData) as Leaderboard;
    }
    // 如果 localStorage 中没有数据，初始化排行榜为 [0, 0, 0]
    return [0, 0, 0];
}

// 将排行榜数据保存到 localStorage 中
function saveLeaderboardToLocalStorage(leaderboard: Leaderboard): void {
    localStorage.setItem("gameLeaderboard", JSON.stringify(leaderboard));
}
