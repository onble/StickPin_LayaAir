import { GameManager } from "./GameManager";

const { regClass, property } = Laya;

@regClass()
export class Pin extends Laya.Script {
    declare owner: Laya.Sprite;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.owner.on(Laya.Event.TRIGGER_ENTER, this, this.onBeginContact);
    }

    onBeginContact() {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    onDestroy(): void {
        this.owner.off(Laya.Event.TRIGGER_ENTER, this, this.onBeginContact);
    }

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    moveTo(target: Laya.Vector2, duration: number, parentNode: Laya.Sprite = null) {
        Laya.Tween.to(
            this.owner,
            { x: target.x, y: target.y },
            duration * 1000,
            null,
            Laya.Handler.create(this, () => {
                if (parentNode != null) {
                    parentNode.addChild(this.owner);
                    if (parentNode.rotation <= 180) {
                        this.owner.x = 150 - 150 * Math.sin((-parentNode.rotation * Math.PI) / 180);
                        this.owner.y = 150 + 150 * Math.cos((-parentNode.rotation * Math.PI) / 180);
                    } else {
                        this.owner.x = 150 - 150 * Math.sin((-parentNode.rotation * Math.PI) / 180);
                        this.owner.y = 150 + 150 * Math.cos(-(parentNode.rotation * Math.PI) / 180);
                    }
                    this.owner.rotation = -parentNode.rotation;

                    GameManager.inst.updateScore();
                }
            })
        );
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
