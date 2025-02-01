const { regClass, property } = Laya;

@regClass()
export class MusicManager extends Laya.Script {
    // 静态属性，用于存储单例实例
    private static _instance: MusicManager;
    private _IsNotGoodSound: Laya.SoundNode;
    private _presumptuousSound: Laya.SoundNode;
    private _TiredSound: Laya.SoundNode;
    private _whySound: Laya.SoundNode;

    // 私有构造函数，防止外部实例化
    private constructor() {
        super();
        this._IsNotGoodSound = new Laya.SoundNode();
        this._IsNotGoodSound.source = "./resources/music/IsNotGood.MP3";
        this._IsNotGoodSound.loop = 1;
        Laya.stage.addChild(this._IsNotGoodSound);
        this._presumptuousSound = new Laya.SoundNode();
        this._presumptuousSound.source = "./resources/music/presumptuous.WAV";
        this._presumptuousSound.loop = 1;
        Laya.stage.addChild(this._presumptuousSound);
        this._TiredSound = new Laya.SoundNode();
        this._TiredSound.source = "./resources/music/Tired.mp3";
        this._TiredSound.loop = 1;
        Laya.stage.addChild(this._TiredSound);
        this._whySound = new Laya.SoundNode();
        this._whySound.source = "./resources/music/why.MP3";
        this._whySound.loop = 1;
        Laya.stage.addChild(this._whySound);
    }
    public static getInstance(): MusicManager {
        if (!this._instance) {
            this._instance = new MusicManager();
        }
        return this._instance;
    }
    private _musicManager: Laya.SoundChannel;
    public playGameHomeMusic(): void {
        this._musicManager = Laya.SoundManager.playMusic("./resources/music/ChallengeNewPeaks.mp4", 0);
    }

    public playGameMainMusic(): void {
        this._musicManager = Laya.SoundManager.playMusic("./resources/music/ThrowOnions.mp3", 0);
    }

    public musicPause(): void {
        this._musicManager.pause();
    }
    public musicContinue(): void {
        this._musicManager.resume();
    }
    public playRandomSound(): void {
        let random = Math.floor(Math.random() * 4);
        switch (random) {
            case 0:
                this._IsNotGoodSound.play();
                break;
            case 1:
                this._presumptuousSound.play();
                break;
            case 2:
                this._TiredSound.play();
                break;
            case 3:
                this._whySound.play();
                break;
        }
    }
}
