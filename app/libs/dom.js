/**
 * Created by liuyixi on 1/5/15.
 */
define(
    [
        'jquery'
    ],
    function ($) {
        var dom = {};

        dom.importCssString = function(cssText, doc){
            doc = doc || document;

            if (doc.createStyleSheet) {
                var sheet = doc.createStyleSheet();
                sheet.cssText = cssText;
            }
            else {
                var style = doc.createElement("style");
                style.appendChild(doc.createTextNode(cssText));
                doc.getElementsByTagName("head")[0].appendChild(style);
            }
        };

        return dom;
    }
);
