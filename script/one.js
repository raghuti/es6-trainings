"use strict";
var myfun = function (val1, val2, val3) {
    if (val1 === void 0) { val1 = 0; }
    if (val2 === void 0) { val2 = 0; }
    if (val3) {
        return val1 + val2 + val3;
    }
    else {
        return val1 + val2;
    }
};
alert(myfun(1, 2));
//# sourceMappingURL=one.js.map