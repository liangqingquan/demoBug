
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Bug.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNRO0lBUlQsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQXNEdkI7SUFBRCxVQUFDO0NBdERELEFBc0RDLENBdERnQyxFQUFFLENBQUMsU0FBUyxHQXNENUM7a0JBdERvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVnIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXG4gICAgY2FwdHVyZUNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhKVxuICAgIHBsYXRlQ2FtZXJhOiBjYy5DYW1lcmEgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVuZGVyTm9kZTogY2MuTm9kZSA9IG51bGxcblxuICAgIHByaXZhdGUgdGV4dHVyZTogY2MuUmVuZGVyVGV4dHVyZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwbGF0ZVRleHR1cmU6IGNjLlJlbmRlclRleHR1cmUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGxhdGVUZXh0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXRlVGV4dHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXRlVGV4dHVyZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsYXRlVGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XG4gICAgICAgIHRoaXMucGxhdGVUZXh0dXJlLmluaXRXaXRoU2l6ZShjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGgsIGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQsIGNjLlJlbmRlclRleHR1cmUuRGVwdGhTdGVuY2lsRm9ybWF0LlJCX0ZNVF9TOCk7XG4gICAgICAgIHRoaXMucGxhdGVDYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRoaXMucGxhdGVUZXh0dXJlO1xuXG4gICAgICAgIGlmICh0aGlzLnRleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcbiAgICAgICAgdGhpcy50ZXh0dXJlLmluaXRXaXRoU2l6ZShjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGgsIGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKS5oZWlnaHQsIGNjLlJlbmRlclRleHR1cmUuRGVwdGhTdGVuY2lsRm9ybWF0LlJCX0ZNVF9TOCk7XG4gICAgICAgIHRoaXMuY2FwdHVyZUNhbWVyYS50YXJnZXRUZXh0dXJlID0gdGhpcy50ZXh0dXJlO1xuXG5cbiAgICAgICAgdGhpcy5jYXB0dXJlQ2FtZXJhLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLnBsYXRlQ2FtZXJhLmVuYWJsZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgdGhpcy5jYXB0dXJlUGxhdGVOb2RlKHRoaXMucmVuZGVyTm9kZSk7XG4gICAgICAgIHRoaXMuY2FwdHVyZU5vZGUodGhpcy5yZW5kZXJOb2RlKVxuICAgIH1cblxuICAgIHB1YmxpYyBjYXB0dXJlUGxhdGVOb2RlKG5vZGU6IGNjLk5vZGUpe1xuXG4gICAgICAgIHRoaXMucGxhdGVDYW1lcmEucmVuZGVyKG5vZGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYXB0dXJlTm9kZShub2RlOiBjYy5Ob2RlKXtcbiAgICAgICAgdGhpcy5jYXB0dXJlQ2FtZXJhLnJlbmRlcihub2RlKTtcbiAgICB9XG59XG4iXX0=