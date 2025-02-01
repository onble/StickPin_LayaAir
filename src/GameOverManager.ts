import { GameDate } from "./Instance/GameDate";
import { MusicManager } from "./Instance/MusicManager";
import { Assert } from "./utils/Assert";

const { regClass, property } = Laya;

@regClass()
export class GameOverManager extends Laya.Script {
    declare owner: Laya.Box;

    /** 黑色背景 */
    private _blackBackground: Laya.Box;
    /** 按钮盒子 */
    private _ButtonGroup: Laya.Box;
    /** 排行榜对象 */
    private _LeaderBoard: Laya.Image;
    /** 分数1 */
    private score1: Laya.Text;
    /** 分数2 */
    private score2: Laya.Text;
    /** 分数3 */
    private score3: Laya.Text;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this._blackBackground = (this.owner.getChildByName("blackBackground") as Laya.Box) || Assert.ChildNotNull;
        this._ButtonGroup = (this.owner.getChildByName("ButtonGroup") as Laya.Box) || Assert.ChildNotNull;
        const Reset = (this._ButtonGroup.getChildByName("Reset") as Laya.Image) || Assert.ChildNotNull;
        const BackHome = (this._ButtonGroup.getChildByName("BackHome") as Laya.Image) || Assert.ChildNotNull;
        this._LeaderBoard = (this.owner.getChildByName("LeaderBoard") as Laya.Image) || Assert.ChildNotNull;
        this.score1 = (this._LeaderBoard.getChildByName("score1") as Laya.Text) || Assert.ChildNotNull;
        this.score2 = (this._LeaderBoard.getChildByName("score2") as Laya.Text) || Assert.ChildNotNull;
        this.score3 = (this._LeaderBoard.getChildByName("score3") as Laya.Text) || Assert.ChildNotNull;
        Reset.on(Laya.Event.CLICK, this, () => {
            MusicManager.getInstance().playRandomSound();
            Laya.Scene.open("./resources/scenes/01-Main.ls", true);
        });
        BackHome.on(Laya.Event.CLICK, this, () => {
            MusicManager.getInstance().playRandomSound();
            Laya.Scene.open("./resources/scenes/GameHome.ls", true);
        });
    }
    public showGameOver() {
        let leaderBoardInfo = GameDate.getInstance().getCurrentLeaderboard();
        this.score1.text = leaderBoardInfo[0].toString();
        this.score2.text = leaderBoardInfo[1].toString();
        this.score3.text = leaderBoardInfo[2].toString();
        this._LeaderBoard.y = 1400;
        this._ButtonGroup.visible = false;
        this.owner.visible = true;
        this._blackBackground.alpha = 0;
        Laya.Tween.to(this._blackBackground, { alpha: 1 }, 500);
        Laya.Tween.to(
            this._LeaderBoard,
            { y: 91 },
            1000,
            null,
            new Laya.Handler(this, () => {
                this._ButtonGroup.visible = true;
            })
        );
    }

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
