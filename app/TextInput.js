/**
 *
 * the main text input window. all the input come frome there
 *
 * Created by liuyixi on 1/5/15.
 */


define(
    [
        'jquery'
    ],
    function($){


        var TextInput = function($parentEl,host){
            var text = document.createElement("textarea");
            var style = text.style;
            style.position = "absolute";
            style.left = "-10000px";
            style.top = "-10000px";

            $parentEl.append(text);


            var PLACEHOLDER = String.fromCharCode(0);

            sendText();
            var inCompostion = false;


            function sendText(){
                var value = text.value;
                if(value && $.isFunction(host.onTextInput)){
                    if(value.charCodeAt(value.length -1) == PLACEHOLDER.charAt(0)){
                        value = value.slice(0,-1);
                        if(value){
                            host.onTextInput(value);
                        }
                    }else{
                        host.onTextInput(value);
                    }
                }

                text.value = PLACEHOLDER;
                text.select();
            }

            var onTextInput = function(e){
                setTimeout(function(){
                    if(!inCompostion){
                        sendText();
                    }
                },0);
            };


            $(text)
                .on('keypress textInput paste propertychange',onTextInput)
                .on('blur',function(){
                    if($.isFunction(host.onBlur)){
                        host.onBlur();
                    }
                })
                .on('focus',function(){
                    if($.isFunction(host.onFocus)){
                        host.onFoucs();
                    }
                    text.select();
                });





            this.focus = function(){
                if($.isFunction(host.onFocus)){
                    host.onFocus();
                }

                text.select();
                text.focus();
            };

            this.blur = function(){
                text.blur();
            };

        };



        return TextInput;

    }
);
