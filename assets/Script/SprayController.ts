

const {ccclass, property} = cc._decorator;

/** Controller for Spray(喷) */
@ccclass
export default class SprayController extends cc.Component {
    preview() {
        this.maskSprite.node.active = false;
        this.maskInverse.node.active = false;
    }
    endPreview() {
        if(this.ready && this.activeDraw){
            this.maskSprite.node.active = true;
            this.maskInverse.node.active = true;
        }
    }
    playerStart(onComplete: () => void) {
        this.activeDraw = true;
        cc.tween(this.maskOffset).to(0.5, {x: 0, y: 0}).call(() => {
            this.ready = true;
            onComplete();
        }).start();
    }
    playerEnd(onComplete: () => void) {
        this.ready = false;
        this.activeDraw = false;
        cc.tween(this.maskOffset).to(0.5, {x: -750, y: 500}).call(() => {
            this.maskSprite.node.active = false;
            this.maskInverse.node.active = false;
            this.scheduleOnce(() => {
                onComplete();
            }, 0.5);
        }).start();
    }
    clear(){
        this.graphics.clear();
        this.maskGraphics.clear();
        this.maskGraphics2.clear();
        this.maskSprite.node.active = true;
        this.maskInverse.node.active = true;
        this.drawTime = 0;
    }
    simulateComplete() {
        this.graphics.rect(-this.node.width / 2, -this.node.height / 2, this.node.width, this.node.height);
        this.graphics.fillColor = this.Color;
        this.graphics.fill();
        this.maskSprite.node.active = false;
        this.maskInverse.node.active = false;
    }

    public getComplete(): boolean {
        return this.complete;
    }

    @property(cc.Sprite)
    maskSprite: cc.Sprite = null;

    @property(cc.Graphics)
    graphics: cc.Graphics = null;

    @property(cc.Mask)
    mask: cc.Mask = null;

    @property(cc.Graphics)
    maskGraphics: cc.Graphics = null;

    @property(cc.Mask)
    maskInverse: cc.Mask = null;

    @property(cc.Node)
    maskContainer: cc.Node = null;

    @property(cc.Graphics)
    maskGraphics2: cc.Graphics = null;

    @property(cc.Node)
    maskOffset: cc.Node = null;

    private pos: cc.Vec2 = cc.Vec2.ZERO;
    private area: number = 60;
    private speed: number = 150; // 每秒
    private sprayRadius: number = 12;
    private activeDraw: boolean = false;
    private progress: number = 0;
    private complete: boolean = false;
    private drawTime: number = 0;
    private ready: boolean = false;

    private offset: cc.Vec2 = cc.Vec2.ZERO;
    private sprayId: string = null;

    public getReady(): boolean{
        return this.ready;
    }

    public get DrawTime(): number{
        return this.drawTime;
    }

    public get Progress(): number{
        return this.progress;
    }

    public get Color(): cc.Color{
        return this.graphics.fillColor;
    }

    public set Color(color: cc.Color){
        this.graphics.fillColor = color;
        let maskColor = new cc.Color(color.r * 0.8 + 0.2 * 0.643 * 255, color.g * 0.8 + 0.2 * 0.475 * 255, color.b * 0.8 + 0.2 * 0.247 * 255, color.a);
        this.maskGraphics.fillColor = maskColor;
        this.maskGraphics2.fillColor = maskColor;
    }

    public get Mask(): cc.SpriteFrame{
        return this.mask.spriteFrame;
    }

    public set Mask(mask: cc.SpriteFrame){
        this.mask.spriteFrame = mask;
        this.maskInverse.spriteFrame = mask;
        this.maskSprite.spriteFrame = mask;
    }

    public get Offset(): cc.Vec2{
        return this.offset;
    }

    public set Offset(offset: cc.Vec2){
        this.offset = offset;
        this.maskContainer.x += offset.x;
        this.maskContainer.y += offset.y;
        this.maskSprite.node.x += offset.x;
        this.maskSprite.node.y += offset.y;
    }

    public get SprayId(): string{
        return this.sprayId;
    }

    public set SprayId(sprayId: string){
        this.sprayId = sprayId;
    }

    onLoad(){
        this.maskOffset.x = 750;
        this.maskOffset.y = 500;
    }

    start(){

    }

    private deltaTime: number = 0;
    update(dt){
        if(this.progress >= 1){
            this.drawTime += dt;
            this.deltaTime += dt;
            this.draw();
        }else{
            this.progress += dt*2;
        }
    }

    public setProperty(sprayId: string, mask: cc.SpriteFrame, color: cc.Color, offset: cc.Vec2){
        this.Mask = mask;
        this.Color = color;
        this.Offset = offset;
        this.SprayId = sprayId;
    }

    public updatePos(pos: cc.Vec2){
        this.pos = pos;
    }



    private draw(){
        var nodePos = this.pos

        let posX = nodePos.x;
        let posY = nodePos.y;

        let random = 35
        this.graphics.circle(posX, posY, random);
        this.maskGraphics.circle(posX, posY, random);
        this.maskGraphics2.circle(posX, posY, random);
        let count: number = this.deltaTime / (1 / this.speed);
        let areaCount: number = count / 3 * 2;
        while(count > 0){
            let randomVec2: cc.Vec2 = cc.Vec2.ZERO;
            if(areaCount > 0){
                randomVec2 = this.randomRange(this.area);
            }else{
                randomVec2 = this.randomRange(this.area / 2);
            }
            let randomX = posX + randomVec2.x;
            let randomY = posY + randomVec2.y;
            let sizeRandom = 0;
            if(areaCount > 0){
                sizeRandom = 0
            }else{
                sizeRandom = 0
            }
            this.graphics.circle(randomX, randomY, this.sprayRadius + sizeRandom);
            this.graphics.fill();
            this.maskGraphics.circle(randomX, randomY, this.sprayRadius + sizeRandom);
            this.maskGraphics.fill();
            this.maskGraphics2.circle(randomX, randomY, this.sprayRadius + sizeRandom);
            this.maskGraphics2.fill();
            --count;
            --areaCount;
        }
        this.deltaTime %= (1 / this.speed);
        this.complete = true;
    }

    /** 圆形范围等概率随机(接受-拒绝采样) */
    private randomRange(radius: number): cc.Vec2{
        let count: number = 0;

        while(count < 2){
            let randomX = 0;
            let randomY = 0;
            if(randomX * randomX + randomY * randomY <= radius * radius){
                return new cc.Vec2(randomX, randomY);
            }
            ++count;
        }

        // fallback 圆内接正方形
        return new cc.Vec2(0, 0);
    }
}