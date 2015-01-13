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

            this.insert = function(position,text){
                console.log(position,text);
                var end = this._insert(position,text);

                return end;
            };

            this._insert = function(pos,text){
                if(text.length == 0){
                    return pos;
                }
                var currentText = pos.ele.textContent;
                currentText = currentText.substring(0,pos.charIndex) + text + currentText.substring(pos.charIndex);

                var end = {
                    ele: pos.ele,
                    charInfo:pos.charInfo,
                    charIndex:pos.charIndex + text.length
                };

                pos.ele.textContent = currentText;

                return end;
            };


        }).call(Document.prototype);


        return Document;

    }
);
