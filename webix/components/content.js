import sidebar from "./sidebar.js";
import dataTable from "./datatable.js";
import form from "./form.js";
import usersList from "./users-list.js";
import usersChart from "./users-chart.js";
import treetable from "./treetable.js";
import datatableTabbar from "./datatable-tabbar.js";
import admin from "./admin.js";

const content = {
    cols: [
        sidebar,
        { view: "resizer" },
        {
            cells: [
                {
                    id: "Dashboard",
                    cols: [
                        {
                            rows: [datatableTabbar, dataTable],
                            gravity: 4,
                        },
                        form,
                    ],
                },
                { id: "Users", rows: [usersList, usersChart] },
                treetable,
                admin
            ],
        },
    ],
};

export default content;
