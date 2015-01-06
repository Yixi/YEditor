/**
 * Created by Yixi on 1/6/15.
 */
define(
    [
        'libs/oop',
        'libs/eventEmitter'
    ],
    function (oop,eventEmitter) {

        var Selection = function(doc){
            this.doc = doc;


            this.selectionLead = {
                ele:null,
                charIndex:0
            }

        };



        (function(){

            oop.implement(this, eventEmitter);

            this.getCursor = function(){
                return this.selectionLead;
            };

            /**
             * dispatch the cursor change event
             */
            this.moveCursorTo = function(pos){

                this.selectionLead = pos;
                this.dispatch('cursorChange',{data: this.getCursor()});
            };







            this.moveCursorToPosition = function(pos){
                this.moveCursorTo(pos);
            };


        }).call(Selection.prototype);


        return Selection;

    }
);
