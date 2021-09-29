import header from "./components/header.js";
import content from "./components/content.js";
import footer from "./components/footer.js";
import { usersDB } from "./data/collections.js";
import { groupChart } from "./components/users-chart.js";

webix.protoUI(
    {
        name: "editlist",
    },
    webix.EditAbility,
    webix.ui.list
);

webix.ready(() => {
    webix.ui({
        rows: [header, content, footer],
    });

    $$("usersList").sync(usersDB);
    $$("usersChart").sync($$("usersList"), groupChart);
});
