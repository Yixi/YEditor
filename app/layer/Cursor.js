/**
 * Created by liuyixi on 1/5/15.
 */

define(
    [
        "jquery",
        "libs/oop",
        "libs/eventEmitter"
    ],

    function ($,oop,eventEmitter) {
        "use strict";

        var Cursor = function($parentEl){

            this.$element = $('<div class="yEditor-layer yEditor-cursor-layer"></div>');
            $parentEl.append(this.$element);

        };


        (function(){

        }).call(Cursor.prototype);


        return Cursor;

    }
);
