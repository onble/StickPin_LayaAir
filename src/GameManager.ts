import { Pin } from "./Pin";

const { regClass, property } = Laya;

@regClass()
export class GameManager extends Laya.Script {
    declare owner: Laya.Sprite;

    private static _inst: GameManager = null;

    public static get inst() {
        return this._inst;
    }

    @property({ type: Laya.Sprite, default: null })
    p1: Laya.Sprite = null;
    @property({ type: Laya.Sprite, default: null })
    p2: Laya.Sprite = null;
    @property({ type: Laya.Sprite, default: null })
    p3: Laya.Sprite = null;

    @property({ type: Laya.Prefab, default: null })
    pinPrefab: Laya.Prefab = null;

    @property(Number)
    moveDuration: number = 0.5;

    @property(Laya.Sprite)
    circleNode: Laya.Sprite = null;

    @property(Laya.Text)
    scoreLabel: Laya.Text = null;

    private curPin: Pin = null;
    private score: number = 0;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        GameManager._inst = this;
        this.pinSpawn();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTouchStart);
    }

    onTouchStart(e: Laya.Event) {
        this.curPin.moveTo(new Laya.Vector2(this.p3.x, this.p3.y), this.moveDuration, this.circleNode);
        this.pinSpawn();
    }
    updateScore() {
        this.score++;
        this.scoreLabel.text = this.score.toString();
    }

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    onDestroy(): void {
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onTouchStart);
    }

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}
    pinSpawn() {
        const pinNode = this.pinPrefab.create() as Laya.Sprite;
        pinNode.pos(this.p1.x, this.p1.y);
        this.owner.addChild(pinNode);

        this.curPin = pinNode.getComponent(Pin);
        if (this.curPin) {
            this.curPin.moveTo(new Laya.Vector2(this.p2.x, this.p2.y), this.moveDuration);
        } else {
            console.error("你实例化的针身上没有Pin组件，请检查。");
        }
    }

    gameOver() {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
