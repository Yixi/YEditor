/**
 *
 * the main virtual renderer
 *
 * Created by Yixi on 1/5/15.
 */
define(
    [
        "jquery",
        "libs/eventEmitter",
        "libs/oop",
        "layer/Text"
    ],
    function ($,eventEmitter,oop,TextLayer) {

        var Renderer = function (selector) {
            this.$container = $(selector);

            this.$container.addClass("yEditor-editor");



            //set main content text layer
            this._textLayer = new TextLayer(this.$container);
            this.canvas = this._textLayer.$element;

        };


        (function(){

            oop.implement(this,eventEmitter);


        }).call(Renderer.prototype);


        return Renderer;
    }
);
