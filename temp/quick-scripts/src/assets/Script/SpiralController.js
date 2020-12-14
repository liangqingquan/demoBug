"use strict";
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