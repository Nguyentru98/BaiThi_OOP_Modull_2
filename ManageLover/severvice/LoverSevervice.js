"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoverSevervice = void 0;
var readlineSync = require('readline-sync');
var LoverSevervice = /** @class */ (function () {
    function LoverSevervice() {
        this.listLover = [];
    }
    LoverSevervice.prototype.add = function (element) {
        this.listLover.push(element);
    };
    LoverSevervice.prototype.edit = function (code, element) {
        for (var i = 0; i < this.listLover.length; i++) {
            if (this.listLover[i].code == code) {
                this.listLover[i] = element;
                this.show();
            }
        }
    };
    LoverSevervice.prototype.delete = function (code) {
        this.listLover = this.listLover.filter(function (x) { return x.code !== code; });
        this.show();
    };
    LoverSevervice.prototype.show = function () {
        console.table(this.listLover);
    };
    LoverSevervice.prototype.search = function (code) {
        this.listLover = this.listLover.filter(function (x) { return x.code == code; });
        this.show();
    };
    return LoverSevervice;
}());
exports.LoverSevervice = LoverSevervice;
