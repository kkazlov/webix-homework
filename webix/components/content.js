import sidebar from "./sidebar.js";
import dataTable from "./datatable.js";
import form from "./form.js";
import usersList from "./users-list.js";
import usersChart from "./users-chart.js";

const content = {
    cols: [
        sidebar,
        { view: "resizer" },
        {
            cells: [
                { id: "Dashboard", cols: [dataTable, form] },
                { id: "Users", rows: [usersList, usersChart] },

                {
                    id: "Products",
                    view: "treetable",
                    columns: [
                        { id: "id", header: "", width: 50 },
                        {
                            id: "value",
                            header: "Film title",
                            width: 250,
                            template: "{common.treetable()} #value#",
                        },
                        { id: "chapter", header: "Mode", width: 200 },
                    ],
                    data: [
                        {
                            id: "1",
                            value: "The Shawshank Redemption",
                            open: true,
                            data: [
                                {
                                    id: "1.1",
                                    value: "Part 1",
                                    chapter: "alpha",
                                },
                                {
                                    id: "1.2",
                                    value: "Part 2",
                                    chapter: "beta",
                                    open: true,
                                    data: [
                                        {
                                            id: "1.2.1",
                                            value: "Part 1",
                                            chapter: "beta-twin",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default content;
