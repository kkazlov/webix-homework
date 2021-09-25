import header from "./components/header.js";
import content from "./components/content.js";
import footer from "./components/footer.js";

webix.ready(() => {
    webix.ui({
        rows: [
            header,
            content,
            footer
        ],
    });
});
