"use strict";
cc._RF.push(module, '8d35fn9ss9A35aR5sOzND5w', 'Bug');
// Script/Bug.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bug = /** @class */ (function (_super) {
    __extends(Bug, _super);
    function Bug() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.captureCamera = null;
        _this.plateCamera = null;
        _this.renderNode = null;
        _this.texture = null;
        _this.plateTexture = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Bug.prototype.start = function () {
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
        this.captureCamera.enabled = false;
        this.plateCamera.enabled = false;
    };
    Bug.prototype.update = function (dt) {
        this.capturePlateNode(this.renderNode);
        this.captureNode(this.renderNode);
    };
    Bug.prototype.capturePlateNode = function (node) {
        this.plateCamera.render(node);
    };
    Bug.prototype.captureNode = function (node) {
        this.captureCamera.render(node);
    };
    __decorate([
        property(cc.Camera)
    ], Bug.prototype, "captureCamera", void 0);
    __decorate([
        property(cc.Camera)
    ], Bug.prototype, "plateCamera", void 0);
    __decorate([
        property(cc.Node)
    ], Bug.prototype, "renderNode", void 0);
    Bug = __decorate([
        ccclass
    ], Bug);
    return Bug;
}(cc.Component));
exports.default = Bug;

cc._RF.pop();