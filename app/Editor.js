/**
 * Created by liuyixi on 1/4/15.
 */


define(
    [
        "libs/oop",
        "libs/eventEmitter",
        "TextInput",
        "Document"
    ],
    function (oop, eventEmitter,TextInput,Document) {


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




            this.setDocument(new Document(""));
        }


        (function () {

            oop.implement(this,eventEmitter);


            this.focus = function(){
                this.textInput.focus();
            };


            /**
             * mouse down click on main editor area , will calculate the cursor location ,width and height. then render to view.
             * @param event
             */
            this.onMouseDown = function(event){
                var pos = this.renderer.posToTextCoordinates(event);

                this.moveCursorToPosition(pos);



            };

            this.onCursorChange = function(){
                this.renderer.updateCursor(this.getCursorPosition());
            };

            this.onTextInput = function(text){
                console.log(text);
                var cursor = this.getCursorPosition();
                console.log(cursor);

                var end = this.doc.insert(cursor,text);
                console.log(end);
                this.moveCursorToPosition(end);
            };


            /**
             * set the editor document ,we will hold some document customize event and other things.
             * @param doc
             */
            this.setDocument = function(doc){
                if(this.doc == doc) return;

                if(this.doc){
                    //reset the document need remove the older event listener;

                    var selection = this.doc.getSelection();

                    selection.off('cursorChange',this._onCursorChange);


                }

                this.doc = doc;


                this.renderer.setDocument(doc);

                this.selection = doc.getSelection();


                this._onCursorChange = this.onCursorChange.bind(this);
                this.selection.on('cursorChange',this._onCursorChange);



            };

            /**
             * move the cursor with the editor position.
             * @param pos
             */
            this.moveCursorToPosition = function(pos){
                this.selection.moveCursorToPosition(pos);
            };
            this.getCursorPosition = function() {
                return this.selection.getCursor();
            };


        }).call(Editor.prototype);


        return Editor;


    }
);
