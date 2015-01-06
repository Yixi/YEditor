/**
 *
 * use this module do the main rich format
 *
 * Created by Yixi on 1/6/15.
 */


define(
    [
        'libs/oop',
        'libs/eventEmitter',
        'Selection'


    ],
    function(oop,eventEmitter,Selection){

        function Document(){

            this.selection = new Selection(this);


        }


        (function(){

            oop.implement(this,eventEmitter);


            this.getSelection = function(){
                return this.selection;
            };


        }).call(Document.prototype);


        return Document;

    }
);
