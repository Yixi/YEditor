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
                    charInfo:pos.charInfo,
                    ele:pos.ele
                };

            };



            this.update = function(){
                console.log('update');

                var cursorLeft = Math.round(this.position.charIndex * this.position.charInfo.width) + $(this.position.ele).offset().left;
                var cursorTop = $(this.position.ele).offset().top;


                this.cursor.style.width = this.position.charInfo.width + 'px';
                this.cursor.style.height = this.position.charInfo.height + 'px';

                this.$element.append(this.cursor);
                $(this.cursor).offset({left:cursorLeft,top:cursorTop});

                console.log(cursorLeft,cursorTop);


            };

        }).call(Cursor.prototype);


        return Cursor;

    }
);
