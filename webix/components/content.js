import sidebar from "./sidebar.js";
import dataTable from "./datatable.js";
import form from "./form.js";
import usersList from "./users-list.js";
import usersChart from "./users-chart.js";
import treetable from "./treetable.js";

const content = {
    cols: [
        sidebar,
        { view: "resizer" },
        {
            cells: [
                { id: "Dashboard", cols: [dataTable, form] },
                { id: "Users", rows: [usersList, usersChart] },
                treetable
            ],
        },
    ],
};

export default content;
