/**
 * Created by Yixi on 1/5/15.
 */
define(
    [
        "jquery",
        "libs/oop",
        "libs/eventEmitter"
    ],

    function ($,oop,eventEmitter) {

        var Text = function($parentEl){

            this.$element = $('<div class="yEditor-layer yEditor-text-layer"></div>');
            $parentEl.append(this.$element);
        };


        (function(){


        }).call(Text.prototype);



        return Text;

    }
);
