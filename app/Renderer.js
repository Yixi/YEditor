/**
 *
 * the main virtual renderer
 *
 * Created by Yixi on 1/5/15.
 */
define(
    [
        "require",
        "jquery",
        "libs/eventEmitter",
        "libs/oop",
        "layer/Text",
        "layer/Cursor"
    ],
    function (require,$,eventEmitter,oop,TextLayer,CursorLayer) {

        var editorCss = require.toUrl('css/editor.css');
        $("<link>")
            .attr({ rel: "stylesheet",
                type: "text/css",
                href: editorCss
            })
            .appendTo("head");

        var Renderer = function (selector) {
            this.$container = $(selector);

            this.$container.addClass("yEditor-editor");



            //set main content text layer
            this._textLayer = new TextLayer(this.$container);
            this.canvas = this._textLayer.$element;

            this._cursorLayer = new CursorLayer(this.$container);

            this.layers = [this._textLayer,this._cursorLayer];

        };


        (function(){

            oop.implement(this,eventEmitter);



            this.getContainerElement = function(){
                return this.$container;
            };

            this.getContentElement = function(){
                return this.canvas;
            };

            this.posToTextCoordinates = function(event){
                var currentEle = event.target;
                var currentTextInfo = this._textLayer.measureSizes(currentEle);

                var eleCanvas = $(currentEle).offset();
                

                console.log(currentTextInfo);

            };

        }).call(Renderer.prototype);


        return Renderer;
    }
);