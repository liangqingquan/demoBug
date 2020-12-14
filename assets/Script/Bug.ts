// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bug extends cc.Component {

    @property(cc.Camera)
    captureCamera: cc.Camera = null;
    @property(cc.Camera)
    plateCamera: cc.Camera = null;

    @property(cc.Node)
    renderNode: cc.Node = null

    private texture: cc.RenderTexture = null;
    private plateTexture: cc.RenderTexture = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        if (this.plateTexture) {
            this.plateTexture.destroy();
            this.plateTexture = null;
        }

        this.plateTexture = new cc.RenderTexture();
        this.plateTexture.initWithSize(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height, cc.RenderTexture.DepthStencilFormat.RB_FMT_S8);
        this.plateCamera.targetTexture = this.plateTexture;

        if (this.texture) {
            this.texture.destroy();
            this.texture = null;
        }

        this.texture = new cc.RenderTexture();
        this.texture.initWithSize(cc.view.getVisibleSize().width, cc.view.getVisibleSize().height, cc.RenderTexture.DepthStencilFormat.RB_FMT_S8);
        this.captureCamera.targetTexture = this.texture;


        this.captureCamera.enabled = false
        this.plateCamera.enabled = false
    }

    update (dt) {
        this.capturePlateNode(this.renderNode);
        this.captureNode(this.renderNode)
    }

    public capturePlateNode(node: cc.Node){

        this.plateCamera.render(node);
    }

    public captureNode(node: cc.Node){
        this.captureCamera.render(node);
    }
}
