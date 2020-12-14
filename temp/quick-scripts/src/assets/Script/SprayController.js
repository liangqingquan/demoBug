"use strict";
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