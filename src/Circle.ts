const { regClass, property } = Laya;

@regClass()
export class Circle extends Laya.Script {
    declare owner: Laya.Image;

    @property({ type: Number, default: 90, caption: "每秒旋转角度", tips: "控制圆盘旋转速度" })
    rotateSpeed: number = 90;

    private isRotate: boolean = true;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        // Laya.Stat.show(0, 0);
        Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;
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
    onUpdate(): void {
        if (this.isRotate == false) return;
        // // 将deltaTime 从毫秒转换为秒
        let deltaTime = Laya.timer.delta / 1000;
        // console.log("deltaTime: " + deltaTime);
        this.owner.rotation += this.rotateSpeed * deltaTime;
        this.owner.rotation %= 360;
    }
    stopRoatate() {
        this.isRotate = false;
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
