

const {ccclass, property} = cc._decorator;

/** Controller for Spiral(射???) */
@ccclass
export default class SpiralController extends cc.Component {
    preview() {
    }
    endPreview() {
    }
    playerStart(onComplete: () => void) {
        this.activeDraw = true;
        this.ready = true;
        onComplete();
    }
    playerEnd(onComplete: () => void) {
        this.ready = false;
        this.activeDraw = false;
        onComplete();
    }
    clear(){
        this.graphics.clear();
        this.progress = 0;
    }
    simulateComplete() {
        let angle: number = 0;
        let progress: number = 0;
        this.graphics.moveTo(0, 0);
        let step: number = 0.02; // 1 / (1 * 0.1 * 0.02) = 500 步

        // 预计算LUT
        let cosArray: number[] = [
            1, 0.9848231136790973, 0.9397531304731841, 0.866158094405463, 0.7662718924682989, 0.6431264477253459, 0.5004596890082058, 0.34260209067452174, 0.17434522637389618, 0.0007963267107332633, -0.17277674447235586, -0.34110538963593995, -0.4990801993556198, -0.6419060421740327, -0.7652476149308935, -0.8653610355694579, -0.9392074840812698, -0.9845454421577965, -0.9999987317275395, -0.9850982871523309, -0.9402963931390685, -0.8669529561925531, -0.7672942263226271, -0.6443452219575347, -0.5018379092223095, -0.3440979226875114, -0.17591326604093807, -0.0023889781122815386, 0.17120782431484233, 0.3396078233682144, 0.49769944376368924, 0.6406840083992087, 0.7642213963085372, 0.8645617817063134, 0.9386594553473822, 0.9842652732927549
        ];
        let sinArray: number[] = [
            0, -0.17356104045380674, -0.34185384854620343, -0.4997701026431024, -0.6425164486712008, -0.7657599964977133, -0.8657598394923444, -0.9394806051566189, -0.9846845901305833, -0.9999996829318346, -0.9849610127154954, -0.9400250598581474, -0.8665558000562658, -0.7667833025180381, -0.6437360389496449, -0.5011489580136382, -0.3433501155464075, -0.1751293017353433, -0.0015926529164868282, 0.17199233892689444, 0.34035671441835597, 0.4983899795832508, 0.6412952286209223, 0.7647347480927589, 0.8649616828896994, 0.9389337674203327, 0.9844056698489755, 0.999997146387718, 0.9852349369025533, 0.9405671301438849, 0.8673495625624736, 0.767804663558071, 0.6449539963627092, 0.50252654219733, 0.3448455116236195, 0.17669711879354022
        ];

        if(cosArray.length <= 0 || sinArray.length <= 0){
            let xString: string = "";
            let yString: string = "";
            // 500 * 0.02 = 10
            for(var i = 0; i < 36; ++i){
                if(i > 0){
                    xString += ", ";
                    yString += ", ";
                }
                xString += Math.cos(-angle * 3.14 / 180);
                yString += Math.sin(-angle * 3.14 / 180);

                angle +=10;
            }
            console.log(xString);
            console.log(yString);
            return;
        }
        let index: number = 0;
        while(progress < 1 / 2){
            let cos = cosArray[index % cosArray.length];
            let sin = sinArray[index % sinArray.length];
            let x = cos * progress * this.node.width;
            let y = sin * progress * this.node.height;
            this.graphics.lineTo(x, y);
            this.graphics.stroke();
            this.graphics.moveTo(x, y);
            progress += this.speed * 0.1 * step;
            ++index;
        }
    }

    public getComplete(): boolean {
        return this.complete;
    }

    @property(cc.Graphics)
    graphics: cc.Graphics = null;

    private deltaAngle: number = 0;
    private tempAngle: number = 0;
    private activeDraw: boolean = false;
    private complete: boolean = false;
    private ready: boolean = false;

    private speed: number = 0;
    private progress: number = 0;

    public getReady(): boolean{
        return this.ready;
    }

    public get Progress(): number{
        return this.progress;
    }

    public get Color(): cc.Color{
        return this.graphics.strokeColor;
    }

    public set Color(color: cc.Color){
        this.graphics.strokeColor = color;
    }

    public get LineWidth(): number{
        return this.graphics.lineWidth;
    }

    public set LineWidth(lineWidth: number){
        this.graphics.lineWidth = lineWidth;
    }

    public get Speed(): number{
        return this.speed;
    }

    public set Speed(speed: number){
        this.speed = speed;
    }

    onLoad(){

    }

    start(){
        let pos = this.calculatePosition();
        this.graphics.moveTo(pos.x, pos.y);
    }

    update(dt){
        this.progress += this.speed * dt * 0.1;
        this.draw();
    }

    public setProperty(color: cc.Color, speed: number, width: number){
        this.Color = color;
        this.LineWidth = width;
        this.Speed = speed; // 速度越小需要的步骤越多(反比)，等于1时需要500步
    }

    private draw(){
        let pos = this.calculatePosition();
        this.graphics.lineTo(pos.x, pos.y);
        this.graphics.stroke();
        this.graphics.moveTo(pos.x, pos.y);
        this.complete = true;
    }

    public calculatePosition(): cc.Vec2{
        let cos = Math.cos(-this.tempAngle * 3.14 / 180);
        let sin = Math.sin(-this.tempAngle * 3.14 / 180);
        let x = cos * this.progress * this.node.width;
        let y = sin * this.progress * this.node.height;
        return new cc.Vec2(x, y);
    }

    public get DeltaAngle(): number{
        return this.deltaAngle;
    }
}