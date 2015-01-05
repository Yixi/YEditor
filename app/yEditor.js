// to depend on a bower installed component:
// define(['bower_components/componentName/file'])

//define(["jquery"], function($) {
//  $('body').append('jQuery ' + $.fn.jquery + ' loaded!');
//  console.log(exports);
//});


define(
    [
        "Editor",
        "Renderer"

    ],function (Editor,Renderer) {

        var editor = new Editor(new Renderer("#yEditor"))

        console.log(editor);
});
