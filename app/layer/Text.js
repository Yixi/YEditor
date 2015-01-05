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

            oop.implement(this,eventEmitter);


            this._fontStyles = {
                fontFamily : 1,
                fontSize : 1,
                fontWeight : 1,
                fontStyle : 1,
                lineHeight : 1
            };

            this.measureSizes = function(ele){
                var measureNode = document.createElement("div");
                var style = measureNode.style;

                style.width = style.height = "auto";
                style.left = style.top = "-1000px";
                style.visibility = "hidden";
                style.position = "absolute";
                style.overflow = "visible";


                for(var prop in this._fontStyles){
                    var value = window.getComputedStyle(ele,"")[prop] || "";
                    style[prop] = value;
                }

                measureNode.innerHTML = new Array(1000).join("Xy");
                document.body.insertBefore(measureNode, document.body.firstChild);
                var size = {
                    height: measureNode.offsetHeight,
                    width: measureNode.offsetWidth / 2000
                };
                document.body.removeChild(measureNode);
                return size;
            };


        }).call(Text.prototype);



        return Text;

    }
);
