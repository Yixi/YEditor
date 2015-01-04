/**
 * Created by liuyixi on 1/4/15.
 */
define(function(require, exports, module){
  "use strict";

  exports.mixin = function(obj, mixin) {
    for (var key in mixin) {
      obj[key] = mixin[key];
    }
    return obj;
  };


  exports.implement = function(proto, mixin) {
    exports.mixin(proto, mixin);
  };


});
