
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