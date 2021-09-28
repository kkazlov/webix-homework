import header from "./components/header.js";
import content from "./components/content.js";
import footer from "./components/footer.js";

webix.protoUI({
    name:"editlist"
}, webix.EditAbility, webix.ui.list);

webix.ready(() => {
    webix.ui({
        rows: [
            header,
            content,
            footer
        ],
    });
    
});
