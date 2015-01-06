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
        "layer/Cursor",
        "Loop"
    ],
    function (require,$,eventEmitter,oop,TextLayer,CursorLayer,Loop) {

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



            this._loop = new Loop(this._renderChanges.bind(this));



        };


        (function(){

            this.CHANGE_CURSOR = 1;

            oop.implement(this,eventEmitter);


            this.setDocument = function(doc){
                this.doc = doc;
                this._cursorLayer.setDocument(doc);
            };

            this.getContainerElement = function(){
                return this.$container;
            };

            this.getContentElement = function(){
                return this.canvas;
            };

            this.posToTextCoordinates = function(event){
                var currentEle = event.target;
                var currentTextInfo = this._textLayer.measureSizes(currentEle);

                var eleCanvasOffset = $(currentEle).offset();

                var charIndexInCurrentEle = Math.round((event.pageX - eleCanvasOffset.left) / currentTextInfo.width);

                if(currentEle.textContent.length < charIndexInCurrentEle) charIndexInCurrentEle = 0;

                return {
                    ele:currentEle,
                    charIndex:charIndexInCurrentEle,
                    charInfo:currentTextInfo
                };
            };


            this._renderChanges = function(changes){
                if(!changes) return;


                if (changes & this.CHANGE_CURSOR){
                    this._cursorLayer.update();
                }
            };



            this.updateCursor = function(pos){
                this._cursorLayer.setCursor(pos);
                this._loop.schedule(this.CHANGE_CURSOR);
            };


            this.textToPosCoordinates = function(info){

            };

        }).call(Renderer.prototype);


        return Renderer;
    }
);
