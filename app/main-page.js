var vmModule = require("./main-view-model");
var pickerModule = require("number-picker");

// function onNavigatingTo(args) {
//     var page = args.object;
//     page.bindingContext = vmModule.createViewModel;
// }
// exports.onNavigatingTo = onNavigatingTo;

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.createViewModel();

    var layout = page.content;
    var picker = new pickerModule.NumberPicker();
    layout.addChild(picker);
}
exports.pageLoaded = pageLoaded;