/**
 * Created by liuyixi on 1/6/15.
 */


define(function () {

    var Loop = function(onLoop){
        this.onLoop = onLoop;
        this.pending = false;
        this.changes = 0;
    };


    (function(){


        this.schedule  = function(change){
            this.changes = this.changes || change;

            if(!this.pending){
                this.pending = true;
                var z = this;
                this.setTimeoutZero(function() {
                    z.pending = false;
                    z.onLoop(z.changes);
                    z.changes = 0;
                });
            }
        };


        if(window.postMessage){

            //use the postMessage for async queue

            this.messageName = "yEditor-zero-timeout-message";
            this.setTimeoutZero = function(callback) {
                if (!this.attached) {
                    var z = this;
                    window.addEventListener("message", function(e) {
                        if (e.source == window && z.callback && e.data == z.messageName) {
                            e.stopPropagation();
                            z.callback();
                        }
                    }, false);
                    this.attached = true;
                }
                this.callback = callback;
                window.postMessage(this.messageName, "*");
            }

        }else{
            this.setTimeoutZero = function(callback) {
                setTimeout(callback, 0);
            }
        }


    }).call(Loop.prototype);

    return Loop;

});
