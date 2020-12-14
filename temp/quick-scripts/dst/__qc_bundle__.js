
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Bug');
require('./assets/Script/SpiralController');
require('./assets/Script/SprayController');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SpiralController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '259d51AxDRH3JrUzSXFs0hr', 'SpiralController');
// Script/SpiralController.ts

"use strict";
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
/** Controller for Spiral(射???) */
var SpiralController = /** @class */ (function (_super) {
    __extends(SpiralController, _super);
    function SpiralController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.graphics = null;
        _this.deltaAngle = 0;
        _this.tempAngle = 0;
        _this.activeDraw = false;
        _this.complete = false;
        _this.ready = false;
        _this.speed = 0;
        _this.progress = 0;
        return _this;
    }
    SpiralController.prototype.preview = function () {
    };
    SpiralController.prototype.endPreview = function () {
    };
    SpiralController.prototype.playerStart = function (onComplete) {
        this.activeDraw = true;
        this.ready = true;
        onComplete();
    };
    SpiralController.prototype.playerEnd = function (onComplete) {
        this.ready = false;
        this.activeDraw = false;
        onComplete();
    };
    SpiralController.prototype.clear = function () {
        this.graphics.clear();
        this.progress = 0;
    };
    SpiralController.prototype.simulateComplete = function () {
        var angle = 0;
        var progress = 0;
        this.graphics.moveTo(0, 0);
        var step = 0.02; // 1 / (1 * 0.1 * 0.02) = 500 步
        // 预计算LUT
        var cosArray = [
            1, 0.9848231136790973, 0.9397531304731841, 0.866158094405463, 0.7662718924682989, 0.6431264477253459, 0.5004596890082058, 0.34260209067452174, 0.17434522637389618, 0.0007963267107332633, -0.17277674447235586, -0.34110538963593995, -0.4990801993556198, -0.6419060421740327, -0.7652476149308935, -0.8653610355694579, -0.9392074840812698, -0.9845454421577965, -0.9999987317275395, -0.9850982871523309, -0.9402963931390685, -0.8669529561925531, -0.7672942263226271, -0.6443452219575347, -0.5018379092223095, -0.3440979226875114, -0.17591326604093807, -0.0023889781122815386, 0.17120782431484233, 0.3396078233682144, 0.49769944376368924, 0.6406840083992087, 0.7642213963085372, 0.8645617817063134, 0.9386594553473822, 0.9842652732927549
        ];
        var sinArray = [
            0, -0.17356104045380674, -0.34185384854620343, -0.4997701026431024, -0.6425164486712008, -0.7657599964977133, -0.8657598394923444, -0.9394806051566189, -0.9846845901305833, -0.9999996829318346, -0.9849610127154954, -0.9400250598581474, -0.8665558000562658, -0.7667833025180381, -0.6437360389496449, -0.5011489580136382, -0.3433501155464075, -0.1751293017353433, -0.0015926529164868282, 0.17199233892689444, 0.34035671441835597, 0.4983899795832508, 0.6412952286209223, 0.7647347480927589, 0.8649616828896994, 0.9389337674203327, 0.9844056698489755, 0.999997146387718, 0.9852349369025533, 0.9405671301438849, 0.8673495625624736, 0.767804663558071, 0.6449539963627092, 0.50252654219733, 0.3448455116236195, 0.17669711879354022
        ];
        if (cosArray.length <= 0 || sinArray.length <= 0) {
            var xString = "";
            var yString = "";
            // 500 * 0.02 = 10
            for (var i = 0; i < 36; ++i) {
                if (i > 0) {
                    xString += ", ";
                    yString += ", ";
                }
                xString += Math.cos(-angle * 3.14 / 180);
                yString += Math.sin(-angle * 3.14 / 180);
                angle += 10;
            }
            console.log(xString);
            console.log(yString);
            return;
        }
        var index = 0;
        while (progress < 1 / 2) {
            var cos = cosArray[index % cosArray.length];
            var sin = sinArray[index % sinArray.length];
            var x = cos * progress * this.node.width;
            var y = sin * progress * this.node.height;
            this.graphics.lineTo(x, y);
            this.graphics.stroke();
            this.graphics.moveTo(x, y);
            progress += this.speed * 0.1 * step;
            ++index;
        }
    };
    SpiralController.prototype.getComplete = function () {
        return this.complete;
    };
    SpiralController.prototype.getReady = function () {
        return this.ready;
    };
    Object.defineProperty(SpiralController.prototype, "Progress", {
        get: function () {
            return this.progress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpiralController.prototype, "Color", {
        get: function () {
            return this.graphics.strokeColor;
        },
        set: function (color) {
            this.graphics.strokeColor = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpiralController.prototype, "LineWidth", {
        get: function () {
            return this.graphics.lineWidth;
        },
        set: function (lineWidth) {
            this.graphics.lineWidth = lineWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpiralController.prototype, "Speed", {
        get: function () {
            return this.speed;
        },
        set: function (speed) {
            this.speed = speed;
        },
        enumerable: false,
        configurable: true
    });
    SpiralController.prototype.onLoad = function () {
    };
    SpiralController.prototype.start = function () {
        var pos = this.calculatePosition();
        this.graphics.moveTo(pos.x, pos.y);
    };
    SpiralController.prototype.update = function (dt) {
        this.progress += this.speed * dt * 0.1;
        this.draw();
    };
    SpiralController.prototype.setProperty = function (color, speed, width) {
        this.Color = color;
        this.LineWidth = width;
        this.Speed = speed; // 速度越小需要的步骤越多(反比)，等于1时需要500步
    };
    SpiralController.prototype.draw = function () {
        var pos = this.calculatePosition();
        this.graphics.lineTo(pos.x, pos.y);
        this.graphics.stroke();
        this.graphics.moveTo(pos.x, pos.y);
        this.complete = true;
    };
    SpiralController.prototype.calculatePosition = function () {
        var cos = Math.cos(-this.tempAngle * 3.14 / 180);
        var sin = Math.sin(-this.tempAngle * 3.14 / 180);
        var x = cos * this.progress * this.node.width;
        var y = sin * this.progress * this.node.height;
        return new cc.Vec2(x, y);
    };
    Object.defineProperty(SpiralController.prototype, "DeltaAngle", {
        get: function () {
            return this.deltaAngle;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Graphics)
    ], SpiralController.prototype, "graphics", void 0);
    SpiralController = __decorate([
        ccclass
    ], SpiralController);
    return SpiralController;
}(cc.Component));
exports.default = SpiralController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3BpcmFsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQyxrQ0FBa0M7QUFFbEM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUF3SkM7UUFsRkcsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFFckIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQUssR0FBWSxLQUFLLENBQUM7UUFFdkIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQXlFakMsQ0FBQztJQXZKRyxrQ0FBTyxHQUFQO0lBQ0EsQ0FBQztJQUNELHFDQUFVLEdBQVY7SUFDQSxDQUFDO0lBQ0Qsc0NBQVcsR0FBWCxVQUFZLFVBQXNCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFVBQVUsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxvQ0FBUyxHQUFULFVBQVUsVUFBc0I7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsVUFBVSxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNELGdDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCwyQ0FBZ0IsR0FBaEI7UUFD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QUQsdUJBQUM7Q0F4SkQsQUF3SkMsQ0F4SjZDLEVBQUUsQ0FBQyxTQUFTLEdBd0p6RDtrQkF4Sm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqIENvbnRyb2xsZXIgZm9yIFNwaXJhbCjlsIQ/Pz8pICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BpcmFsQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJldmlldygpIHtcbiAgICB9XG4gICAgZW5kUHJldmlldygpIHtcbiAgICB9XG4gICAgcGxheWVyU3RhcnQob25Db21wbGV0ZTogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZURyYXcgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgIH1cbiAgICBwbGF5ZXJFbmQob25Db21wbGV0ZTogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlRHJhdyA9IGZhbHNlO1xuICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgfVxuICAgIGNsZWFyKCl7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgfVxuICAgIHNpbXVsYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIGxldCBhbmdsZTogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHByb2dyZXNzOiBudW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbygwLCAwKTtcbiAgICAgICAgbGV0IHN0ZXA6IG51bWJlciA9IDAuMDI7IC8vIDEgLyAoMSAqIDAuMSAqIDAuMDIpID0gNTAwIOatpVxuXG4gICAgICAgIC8vIOmihOiuoeeul0xVVFxuICAgICAgICBsZXQgY29zQXJyYXk6IG51bWJlcltdID0gW1xuICAgICAgICAgICAgMSwgMC45ODQ4MjMxMTM2NzkwOTczLCAwLjkzOTc1MzEzMDQ3MzE4NDEsIDAuODY2MTU4MDk0NDA1NDYzLCAwLjc2NjI3MTg5MjQ2ODI5ODksIDAuNjQzMTI2NDQ3NzI1MzQ1OSwgMC41MDA0NTk2ODkwMDgyMDU4LCAwLjM0MjYwMjA5MDY3NDUyMTc0LCAwLjE3NDM0NTIyNjM3Mzg5NjE4LCAwLjAwMDc5NjMyNjcxMDczMzI2MzMsIC0wLjE3Mjc3Njc0NDQ3MjM1NTg2LCAtMC4zNDExMDUzODk2MzU5Mzk5NSwgLTAuNDk5MDgwMTk5MzU1NjE5OCwgLTAuNjQxOTA2MDQyMTc0MDMyNywgLTAuNzY1MjQ3NjE0OTMwODkzNSwgLTAuODY1MzYxMDM1NTY5NDU3OSwgLTAuOTM5MjA3NDg0MDgxMjY5OCwgLTAuOTg0NTQ1NDQyMTU3Nzk2NSwgLTAuOTk5OTk4NzMxNzI3NTM5NSwgLTAuOTg1MDk4Mjg3MTUyMzMwOSwgLTAuOTQwMjk2MzkzMTM5MDY4NSwgLTAuODY2OTUyOTU2MTkyNTUzMSwgLTAuNzY3Mjk0MjI2MzIyNjI3MSwgLTAuNjQ0MzQ1MjIxOTU3NTM0NywgLTAuNTAxODM3OTA5MjIyMzA5NSwgLTAuMzQ0MDk3OTIyNjg3NTExNCwgLTAuMTc1OTEzMjY2MDQwOTM4MDcsIC0wLjAwMjM4ODk3ODExMjI4MTUzODYsIDAuMTcxMjA3ODI0MzE0ODQyMzMsIDAuMzM5NjA3ODIzMzY4MjE0NCwgMC40OTc2OTk0NDM3NjM2ODkyNCwgMC42NDA2ODQwMDgzOTkyMDg3LCAwLjc2NDIyMTM5NjMwODUzNzIsIDAuODY0NTYxNzgxNzA2MzEzNCwgMC45Mzg2NTk0NTUzNDczODIyLCAwLjk4NDI2NTI3MzI5Mjc1NDlcbiAgICAgICAgXTtcbiAgICAgICAgbGV0IHNpbkFycmF5OiBudW1iZXJbXSA9IFtcbiAgICAgICAgICAgIDAsIC0wLjE3MzU2MTA0MDQ1MzgwNjc0LCAtMC4zNDE4NTM4NDg1NDYyMDM0MywgLTAuNDk5NzcwMTAyNjQzMTAyNCwgLTAuNjQyNTE2NDQ4NjcxMjAwOCwgLTAuNzY1NzU5OTk2NDk3NzEzMywgLTAuODY1NzU5ODM5NDkyMzQ0NCwgLTAuOTM5NDgwNjA1MTU2NjE4OSwgLTAuOTg0Njg0NTkwMTMwNTgzMywgLTAuOTk5OTk5NjgyOTMxODM0NiwgLTAuOTg0OTYxMDEyNzE1NDk1NCwgLTAuOTQwMDI1MDU5ODU4MTQ3NCwgLTAuODY2NTU1ODAwMDU2MjY1OCwgLTAuNzY2NzgzMzAyNTE4MDM4MSwgLTAuNjQzNzM2MDM4OTQ5NjQ0OSwgLTAuNTAxMTQ4OTU4MDEzNjM4MiwgLTAuMzQzMzUwMTE1NTQ2NDA3NSwgLTAuMTc1MTI5MzAxNzM1MzQzMywgLTAuMDAxNTkyNjUyOTE2NDg2ODI4MiwgMC4xNzE5OTIzMzg5MjY4OTQ0NCwgMC4zNDAzNTY3MTQ0MTgzNTU5NywgMC40OTgzODk5Nzk1ODMyNTA4LCAwLjY0MTI5NTIyODYyMDkyMjMsIDAuNzY0NzM0NzQ4MDkyNzU4OSwgMC44NjQ5NjE2ODI4ODk2OTk0LCAwLjkzODkzMzc2NzQyMDMzMjcsIDAuOTg0NDA1NjY5ODQ4OTc1NSwgMC45OTk5OTcxNDYzODc3MTgsIDAuOTg1MjM0OTM2OTAyNTUzMywgMC45NDA1NjcxMzAxNDM4ODQ5LCAwLjg2NzM0OTU2MjU2MjQ3MzYsIDAuNzY3ODA0NjYzNTU4MDcxLCAwLjY0NDk1Mzk5NjM2MjcwOTIsIDAuNTAyNTI2NTQyMTk3MzMsIDAuMzQ0ODQ1NTExNjIzNjE5NSwgMC4xNzY2OTcxMTg3OTM1NDAyMlxuICAgICAgICBdO1xuXG4gICAgICAgIGlmKGNvc0FycmF5Lmxlbmd0aCA8PSAwIHx8IHNpbkFycmF5Lmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgIGxldCB4U3RyaW5nOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IHlTdHJpbmc6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAvLyA1MDAgKiAwLjAyID0gMTBcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAzNjsgKytpKXtcbiAgICAgICAgICAgICAgICBpZihpID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHhTdHJpbmcgKz0gXCIsIFwiO1xuICAgICAgICAgICAgICAgICAgICB5U3RyaW5nICs9IFwiLCBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeFN0cmluZyArPSBNYXRoLmNvcygtYW5nbGUgKiAzLjE0IC8gMTgwKTtcbiAgICAgICAgICAgICAgICB5U3RyaW5nICs9IE1hdGguc2luKC1hbmdsZSAqIDMuMTQgLyAxODApO1xuXG4gICAgICAgICAgICAgICAgYW5nbGUgKz0xMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHhTdHJpbmcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coeVN0cmluZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSAwO1xuICAgICAgICB3aGlsZShwcm9ncmVzcyA8IDEgLyAyKXtcbiAgICAgICAgICAgIGxldCBjb3MgPSBjb3NBcnJheVtpbmRleCAlIGNvc0FycmF5Lmxlbmd0aF07XG4gICAgICAgICAgICBsZXQgc2luID0gc2luQXJyYXlbaW5kZXggJSBzaW5BcnJheS5sZW5ndGhdO1xuICAgICAgICAgICAgbGV0IHggPSBjb3MgKiBwcm9ncmVzcyAqIHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgICAgIGxldCB5ID0gc2luICogcHJvZ3Jlc3MgKiB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oeCwgeSk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnN0cm9rZSgpO1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oeCwgeSk7XG4gICAgICAgICAgICBwcm9ncmVzcyArPSB0aGlzLnNwZWVkICogMC4xICogc3RlcDtcbiAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcbiAgICBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBkZWx0YUFuZ2xlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdGVtcEFuZ2xlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgYWN0aXZlRHJhdzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgY29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHJlYWR5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgZ2V0UmVhZHkoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZHk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBQcm9ncmVzcygpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgQ29sb3IoKTogY2MuQ29sb3J7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoaWNzLnN0cm9rZUNvbG9yO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgQ29sb3IoY29sb3I6IGNjLkNvbG9yKXtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2VDb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgTGluZVdpZHRoKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhpY3MubGluZVdpZHRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgTGluZVdpZHRoKGxpbmVXaWR0aDogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBTcGVlZCgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgU3BlZWQoc3BlZWQ6IG51bWJlcil7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB9XG5cbiAgICBvbkxvYWQoKXtcblxuICAgIH1cblxuICAgIHN0YXJ0KCl7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHBvcy54LCBwb3MueSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KXtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyArPSB0aGlzLnNwZWVkICogZHQgKiAwLjE7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQcm9wZXJ0eShjb2xvcjogY2MuQ29sb3IsIHNwZWVkOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpe1xuICAgICAgICB0aGlzLkNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuTGluZVdpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuU3BlZWQgPSBzcGVlZDsgLy8g6YCf5bqm6LaK5bCP6ZyA6KaB55qE5q2l6aqk6LaK5aSaKOWPjeavlCnvvIznrYnkuo4x5pe26ZyA6KaBNTAw5q2lXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3KCl7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHBvcy54LCBwb3MueSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHBvcy54LCBwb3MueSk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYWxjdWxhdGVQb3NpdGlvbigpOiBjYy5WZWMye1xuICAgICAgICBsZXQgY29zID0gTWF0aC5jb3MoLXRoaXMudGVtcEFuZ2xlICogMy4xNCAvIDE4MCk7XG4gICAgICAgIGxldCBzaW4gPSBNYXRoLnNpbigtdGhpcy50ZW1wQW5nbGUgKiAzLjE0IC8gMTgwKTtcbiAgICAgICAgbGV0IHggPSBjb3MgKiB0aGlzLnByb2dyZXNzICogdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICBsZXQgeSA9IHNpbiAqIHRoaXMucHJvZ3Jlc3MgKiB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIoeCwgeSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBEZWx0YUFuZ2xlKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsdGFBbmdsZTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/SprayController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5264tqrclMLq/vlGbEka/G', 'SprayController');
// Script/SprayController.ts

"use strict";
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
/** Controller for Spray(喷) */
var SprayController = /** @class */ (function (_super) {
    __extends(SprayController, _super);
    function SprayController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskSprite = null;
        _this.graphics = null;
        _this.mask = null;
        _this.maskGraphics = null;
        _this.maskInverse = null;
        _this.maskContainer = null;
        _this.maskGraphics2 = null;
        _this.maskOffset = null;
        _this.pos = cc.Vec2.ZERO;
        _this.area = 60;
        _this.speed = 150; // 每秒
        _this.sprayRadius = 12;
        _this.activeDraw = false;
        _this.progress = 0;
        _this.complete = false;
        _this.drawTime = 0;
        _this.ready = false;
        _this.offset = cc.Vec2.ZERO;
        _this.sprayId = null;
        _this.deltaTime = 0;
        return _this;
    }
    SprayController.prototype.preview = function () {
        this.maskSprite.node.active = false;
        this.maskInverse.node.active = false;
    };
    SprayController.prototype.endPreview = function () {
        if (this.ready && this.activeDraw) {
            this.maskSprite.node.active = true;
            this.maskInverse.node.active = true;
        }
    };
    SprayController.prototype.playerStart = function (onComplete) {
        var _this = this;
        this.activeDraw = true;
        cc.tween(this.maskOffset).to(0.5, { x: 0, y: 0 }).call(function () {
            _this.ready = true;
            onComplete();
        }).start();
    };
    SprayController.prototype.playerEnd = function (onComplete) {
        var _this = this;
        this.ready = false;
        this.activeDraw = false;
        cc.tween(this.maskOffset).to(0.5, { x: -750, y: 500 }).call(function () {
            _this.maskSprite.node.active = false;
            _this.maskInverse.node.active = false;
            _this.scheduleOnce(function () {
                onComplete();
            }, 0.5);
        }).start();
    };
    SprayController.prototype.clear = function () {
        this.graphics.clear();
        this.maskGraphics.clear();
        this.maskGraphics2.clear();
        this.maskSprite.node.active = true;
        this.maskInverse.node.active = true;
        this.drawTime = 0;
    };
    SprayController.prototype.simulateComplete = function () {
        this.graphics.rect(-this.node.width / 2, -this.node.height / 2, this.node.width, this.node.height);
        this.graphics.fillColor = this.Color;
        this.graphics.fill();
        this.maskSprite.node.active = false;
        this.maskInverse.node.active = false;
    };
    SprayController.prototype.getComplete = function () {
        return this.complete;
    };
    SprayController.prototype.getReady = function () {
        return this.ready;
    };
    Object.defineProperty(SprayController.prototype, "DrawTime", {
        get: function () {
            return this.drawTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SprayController.prototype, "Progress", {
        get: function () {
            return this.progress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SprayController.prototype, "Color", {
        get: function () {
            return this.graphics.fillColor;
        },
        set: function (color) {
            this.graphics.fillColor = color;
            var maskColor = new cc.Color(color.r * 0.8 + 0.2 * 0.643 * 255, color.g * 0.8 + 0.2 * 0.475 * 255, color.b * 0.8 + 0.2 * 0.247 * 255, color.a);
            this.maskGraphics.fillColor = maskColor;
            this.maskGraphics2.fillColor = maskColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SprayController.prototype, "Mask", {
        get: function () {
            return this.mask.spriteFrame;
        },
        set: function (mask) {
            this.mask.spriteFrame = mask;
            this.maskInverse.spriteFrame = mask;
            this.maskSprite.spriteFrame = mask;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SprayController.prototype, "Offset", {
        get: function () {
            return this.offset;
        },
        set: function (offset) {
            this.offset = offset;
            this.maskContainer.x += offset.x;
            this.maskContainer.y += offset.y;
            this.maskSprite.node.x += offset.x;
            this.maskSprite.node.y += offset.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SprayController.prototype, "SprayId", {
        get: function () {
            return this.sprayId;
        },
        set: function (sprayId) {
            this.sprayId = sprayId;
        },
        enumerable: false,
        configurable: true
    });
    SprayController.prototype.onLoad = function () {
        this.maskOffset.x = 750;
        this.maskOffset.y = 500;
    };
    SprayController.prototype.start = function () {
    };
    SprayController.prototype.update = function (dt) {
        if (this.progress >= 1) {
            this.drawTime += dt;
            this.deltaTime += dt;
            this.draw();
        }
        else {
            this.progress += dt * 2;
        }
    };
    SprayController.prototype.setProperty = function (sprayId, mask, color, offset) {
        this.Mask = mask;
        this.Color = color;
        this.Offset = offset;
        this.SprayId = sprayId;
    };
    SprayController.prototype.updatePos = function (pos) {
        this.pos = pos;
    };
    SprayController.prototype.draw = function () {
        var nodePos = this.pos;
        var posX = nodePos.x;
        var posY = nodePos.y;
        var random = 35;
        this.graphics.circle(posX, posY, random);
        this.maskGraphics.circle(posX, posY, random);
        this.maskGraphics2.circle(posX, posY, random);
        var count = this.deltaTime / (1 / this.speed);
        var areaCount = count / 3 * 2;
        while (count > 0) {
            var randomVec2 = cc.Vec2.ZERO;
            if (areaCount > 0) {
                randomVec2 = this.randomRange(this.area);
            }
            else {
                randomVec2 = this.randomRange(this.area / 2);
            }
            var randomX = posX + randomVec2.x;
            var randomY = posY + randomVec2.y;
            var sizeRandom = 0;
            if (areaCount > 0) {
                sizeRandom = 0;
            }
            else {
                sizeRandom = 0;
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
    };
    /** 圆形范围等概率随机(接受-拒绝采样) */
    SprayController.prototype.randomRange = function (radius) {
        var count = 0;
        while (count < 2) {
            var randomX = 0;
            var randomY = 0;
            if (randomX * randomX + randomY * randomY <= radius * radius) {
                return new cc.Vec2(randomX, randomY);
            }
            ++count;
        }
        // fallback 圆内接正方形
        return new cc.Vec2(0, 0);
    };
    __decorate([
        property(cc.Sprite)
    ], SprayController.prototype, "maskSprite", void 0);
    __decorate([
        property(cc.Graphics)
    ], SprayController.prototype, "graphics", void 0);
    __decorate([
        property(cc.Mask)
    ], SprayController.prototype, "mask", void 0);
    __decorate([
        property(cc.Graphics)
    ], SprayController.prototype, "maskGraphics", void 0);
    __decorate([
        property(cc.Mask)
    ], SprayController.prototype, "maskInverse", void 0);
    __decorate([
        property(cc.Node)
    ], SprayController.prototype, "maskContainer", void 0);
    __decorate([
        property(cc.Graphics)
    ], SprayController.prototype, "maskGraphics2", void 0);
    __decorate([
        property(cc.Node)
    ], SprayController.prototype, "maskOffset", void 0);
    SprayController = __decorate([
        ccclass
    ], SprayController);
    return SprayController;
}(cc.Component));
exports.default = SprayController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU3ByYXlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLDhCQUE4QjtBQUU5QjtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQW9PQztRQWxMRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixjQUFRLEdBQWdCLElBQUksQ0FBQztRQUc3QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLGtCQUFZLEdBQWdCLElBQUksQ0FBQztRQUdqQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixtQkFBYSxHQUFnQixJQUFJLENBQUM7UUFHbEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFbkIsU0FBRyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLFVBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsV0FBSyxHQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUs7UUFDMUIsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixZQUFNLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsYUFBTyxHQUFXLElBQUksQ0FBQztRQWdFdkIsZUFBUyxHQUFXLENBQUMsQ0FBQzs7SUFnRmxDLENBQUM7SUFuT0csaUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENB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RSxDQUFDLElBQUksQ0FBQzt1REFDUztJQXZFVixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBb09uQztJQUFELHNCQUFDO0NBcE9ELEFBb09DLENBcE80QyxFQUFFLENBQUMsU0FBUyxHQW9PeEQ7a0JBcE9vQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKiogQ29udHJvbGxlciBmb3IgU3ByYXko5Za3KSAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcmF5Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJldmlldygpIHtcbiAgICAgICAgdGhpcy5tYXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWFza0ludmVyc2Uubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgZW5kUHJldmlldygpIHtcbiAgICAgICAgaWYodGhpcy5yZWFkeSAmJiB0aGlzLmFjdGl2ZURyYXcpe1xuICAgICAgICAgICAgdGhpcy5tYXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWFza0ludmVyc2Uubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsYXllclN0YXJ0KG9uQ29tcGxldGU6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVEcmF3ID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYXNrT2Zmc2V0KS50bygwLjUsIHt4OiAwLCB5OiAwfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgcGxheWVyRW5kKG9uQ29tcGxldGU6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZURyYXcgPSBmYWxzZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYXNrT2Zmc2V0KS50bygwLjUsIHt4OiAtNzUwLCB5OiA1MDB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tYXNrSW52ZXJzZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIGNsZWFyKCl7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5tYXNrR3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5tYXNrR3JhcGhpY3MyLmNsZWFyKCk7XG4gICAgICAgIHRoaXMubWFza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubWFza0ludmVyc2Uubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRyYXdUaW1lID0gMDtcbiAgICB9XG4gICAgc2ltdWxhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5yZWN0KC10aGlzLm5vZGUud2lkdGggLyAyLCAtdGhpcy5ub2RlLmhlaWdodCAvIDIsIHRoaXMubm9kZS53aWR0aCwgdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZmlsbENvbG9yID0gdGhpcy5Db2xvcjtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsKCk7XG4gICAgICAgIHRoaXMubWFza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hc2tJbnZlcnNlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIG1hc2tTcHJpdGU6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXG4gICAgZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5NYXNrKVxuICAgIG1hc2s6IGNjLk1hc2sgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkdyYXBoaWNzKVxuICAgIG1hc2tHcmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk1hc2spXG4gICAgbWFza0ludmVyc2U6IGNjLk1hc2sgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFza0NvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXG4gICAgbWFza0dyYXBoaWNzMjogY2MuR3JhcGhpY3MgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWFza09mZnNldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHBvczogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcbiAgICBwcml2YXRlIGFyZWE6IG51bWJlciA9IDYwO1xuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDE1MDsgLy8g5q+P56eSXG4gICAgcHJpdmF0ZSBzcHJheVJhZGl1czogbnVtYmVyID0gMTI7XG4gICAgcHJpdmF0ZSBhY3RpdmVEcmF3OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBwcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkcmF3VGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHJlYWR5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIG9mZnNldDogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcbiAgICBwcml2YXRlIHNwcmF5SWQ6IHN0cmluZyA9IG51bGw7XG5cbiAgICBwdWJsaWMgZ2V0UmVhZHkoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZHk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBEcmF3VGltZSgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXdUaW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgUHJvZ3Jlc3MoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IENvbG9yKCk6IGNjLkNvbG9ye1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaGljcy5maWxsQ29sb3I7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBDb2xvcihjb2xvcjogY2MuQ29sb3Ipe1xuICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICBsZXQgbWFza0NvbG9yID0gbmV3IGNjLkNvbG9yKGNvbG9yLnIgKiAwLjggKyAwLjIgKiAwLjY0MyAqIDI1NSwgY29sb3IuZyAqIDAuOCArIDAuMiAqIDAuNDc1ICogMjU1LCBjb2xvci5iICogMC44ICsgMC4yICogMC4yNDcgKiAyNTUsIGNvbG9yLmEpO1xuICAgICAgICB0aGlzLm1hc2tHcmFwaGljcy5maWxsQ29sb3IgPSBtYXNrQ29sb3I7XG4gICAgICAgIHRoaXMubWFza0dyYXBoaWNzMi5maWxsQ29sb3IgPSBtYXNrQ29sb3I7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBNYXNrKCk6IGNjLlNwcml0ZUZyYW1le1xuICAgICAgICByZXR1cm4gdGhpcy5tYXNrLnNwcml0ZUZyYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgTWFzayhtYXNrOiBjYy5TcHJpdGVGcmFtZSl7XG4gICAgICAgIHRoaXMubWFzay5zcHJpdGVGcmFtZSA9IG1hc2s7XG4gICAgICAgIHRoaXMubWFza0ludmVyc2Uuc3ByaXRlRnJhbWUgPSBtYXNrO1xuICAgICAgICB0aGlzLm1hc2tTcHJpdGUuc3ByaXRlRnJhbWUgPSBtYXNrO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgT2Zmc2V0KCk6IGNjLlZlYzJ7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IE9mZnNldChvZmZzZXQ6IGNjLlZlYzIpe1xuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICAgICAgdGhpcy5tYXNrQ29udGFpbmVyLnggKz0gb2Zmc2V0Lng7XG4gICAgICAgIHRoaXMubWFza0NvbnRhaW5lci55ICs9IG9mZnNldC55O1xuICAgICAgICB0aGlzLm1hc2tTcHJpdGUubm9kZS54ICs9IG9mZnNldC54O1xuICAgICAgICB0aGlzLm1hc2tTcHJpdGUubm9kZS55ICs9IG9mZnNldC55O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgU3ByYXlJZCgpOiBzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLnNwcmF5SWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBTcHJheUlkKHNwcmF5SWQ6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuc3ByYXlJZCA9IHNwcmF5SWQ7XG4gICAgfVxuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIHRoaXMubWFza09mZnNldC54ID0gNzUwO1xuICAgICAgICB0aGlzLm1hc2tPZmZzZXQueSA9IDUwMDtcbiAgICB9XG5cbiAgICBzdGFydCgpe1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWx0YVRpbWU6IG51bWJlciA9IDA7XG4gICAgdXBkYXRlKGR0KXtcbiAgICAgICAgaWYodGhpcy5wcm9ncmVzcyA+PSAxKXtcbiAgICAgICAgICAgIHRoaXMuZHJhd1RpbWUgKz0gZHQ7XG4gICAgICAgICAgICB0aGlzLmRlbHRhVGltZSArPSBkdDtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgKz0gZHQqMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQcm9wZXJ0eShzcHJheUlkOiBzdHJpbmcsIG1hc2s6IGNjLlNwcml0ZUZyYW1lLCBjb2xvcjogY2MuQ29sb3IsIG9mZnNldDogY2MuVmVjMil7XG4gICAgICAgIHRoaXMuTWFzayA9IG1hc2s7XG4gICAgICAgIHRoaXMuQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5PZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMuU3ByYXlJZCA9IHNwcmF5SWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVBvcyhwb3M6IGNjLlZlYzIpe1xuICAgICAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBkcmF3KCl7XG4gICAgICAgIHZhciBub2RlUG9zID0gdGhpcy5wb3NcblxuICAgICAgICBsZXQgcG9zWCA9IG5vZGVQb3MueDtcbiAgICAgICAgbGV0IHBvc1kgPSBub2RlUG9zLnk7XG5cbiAgICAgICAgbGV0IHJhbmRvbSA9IDM1XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2lyY2xlKHBvc1gsIHBvc1ksIHJhbmRvbSk7XG4gICAgICAgIHRoaXMubWFza0dyYXBoaWNzLmNpcmNsZShwb3NYLCBwb3NZLCByYW5kb20pO1xuICAgICAgICB0aGlzLm1hc2tHcmFwaGljczIuY2lyY2xlKHBvc1gsIHBvc1ksIHJhbmRvbSk7XG4gICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gdGhpcy5kZWx0YVRpbWUgLyAoMSAvIHRoaXMuc3BlZWQpO1xuICAgICAgICBsZXQgYXJlYUNvdW50OiBudW1iZXIgPSBjb3VudCAvIDMgKiAyO1xuICAgICAgICB3aGlsZShjb3VudCA+IDApe1xuICAgICAgICAgICAgbGV0IHJhbmRvbVZlYzI6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XG4gICAgICAgICAgICBpZihhcmVhQ291bnQgPiAwKXtcbiAgICAgICAgICAgICAgICByYW5kb21WZWMyID0gdGhpcy5yYW5kb21SYW5nZSh0aGlzLmFyZWEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmFuZG9tVmVjMiA9IHRoaXMucmFuZG9tUmFuZ2UodGhpcy5hcmVhIC8gMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmFuZG9tWCA9IHBvc1ggKyByYW5kb21WZWMyLng7XG4gICAgICAgICAgICBsZXQgcmFuZG9tWSA9IHBvc1kgKyByYW5kb21WZWMyLnk7XG4gICAgICAgICAgICBsZXQgc2l6ZVJhbmRvbSA9IDA7XG4gICAgICAgICAgICBpZihhcmVhQ291bnQgPiAwKXtcbiAgICAgICAgICAgICAgICBzaXplUmFuZG9tID0gMFxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgc2l6ZVJhbmRvbSA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuY2lyY2xlKHJhbmRvbVgsIHJhbmRvbVksIHRoaXMuc3ByYXlSYWRpdXMgKyBzaXplUmFuZG9tKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5tYXNrR3JhcGhpY3MuY2lyY2xlKHJhbmRvbVgsIHJhbmRvbVksIHRoaXMuc3ByYXlSYWRpdXMgKyBzaXplUmFuZG9tKTtcbiAgICAgICAgICAgIHRoaXMubWFza0dyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMubWFza0dyYXBoaWNzMi5jaXJjbGUocmFuZG9tWCwgcmFuZG9tWSwgdGhpcy5zcHJheVJhZGl1cyArIHNpemVSYW5kb20pO1xuICAgICAgICAgICAgdGhpcy5tYXNrR3JhcGhpY3MyLmZpbGwoKTtcbiAgICAgICAgICAgIC0tY291bnQ7XG4gICAgICAgICAgICAtLWFyZWFDb3VudDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbHRhVGltZSAlPSAoMSAvIHRoaXMuc3BlZWQpO1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiog5ZyG5b2i6IyD5Zu0562J5qaC546H6ZqP5py6KOaOpeWPly3mi5Lnu53ph4fmoLcpICovXG4gICAgcHJpdmF0ZSByYW5kb21SYW5nZShyYWRpdXM6IG51bWJlcik6IGNjLlZlYzJ7XG4gICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMDtcblxuICAgICAgICB3aGlsZShjb3VudCA8IDIpe1xuICAgICAgICAgICAgbGV0IHJhbmRvbVggPSAwO1xuICAgICAgICAgICAgbGV0IHJhbmRvbVkgPSAwO1xuICAgICAgICAgICAgaWYocmFuZG9tWCAqIHJhbmRvbVggKyByYW5kb21ZICogcmFuZG9tWSA8PSByYWRpdXMgKiByYWRpdXMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgY2MuVmVjMihyYW5kb21YLCByYW5kb21ZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICsrY291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmYWxsYmFjayDlnIblhoXmjqXmraPmlrnlvaJcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5WZWMyKDAsIDApO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------
