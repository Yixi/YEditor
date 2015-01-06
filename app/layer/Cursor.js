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

            this.cursor = document.createElement("div");
            this.cursor.className = 'yEditor-cursor';

            this.isVisible = false;

        };


        (function(){

            oop.implement(this,eventEmitter);

            this.setDocument = function(doc){
                this.doc = doc;
            };

            this.setCursor = function(pos){
                console.log(pos);

                this.position = {
                    charIndex:pos.charIndex,
                    ele:pos.ele
                };

            };


        }).call(Cursor.prototype);


        return Cursor;

    }
);
