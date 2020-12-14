
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