/**
 * Created by liuyixi on 1/4/15.
 */


define(
    [
        "libs/oop",
        "libs/eventEmitter",
        "TextInput"
    ],
    function (oop, eventEmitter,TextInput) {


        function Editor(renderer) {
            this.$container = renderer.getContainerElement();
            this.renderer = renderer;

            this.textInput = new TextInput(this.$container,this);

            var z = this;

            this.$container
                .on('mousedown',function(e){
                    setTimeout(function(){z.focus()},0);
                    return e.preventDefault();
                });

            var $content = renderer.getContentElement();
            $content
                .on("mousedown",this.onMouseDown.bind(this));
        }


        (function () {

            oop.implement(this,eventEmitter);


            this.focus = function(){
                this.textInput.focus();
            };


            this.onMouseDown = function(event){
                var pos = this.renderer.posToTextCoordinates(event);

            };

            this.onTextInput = function(text){
                console.log(text);
            }


        }).call(Editor.prototype);


        return Editor;


    }
);
