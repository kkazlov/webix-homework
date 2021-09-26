import sidebar from "./sidebar.js";
import dataTable from "./datatable.js";
import form from "./form.js";

const content = {
    cols: [
        sidebar,
        { view: "resizer" },
        {
            cells: [
                { id: "Dashboard", cols: [dataTable, form] },


                {
                    id: "Users",
                    rows: [
                        {
                            view: "list",
                            template: "#title#",
                            select: true,
                            data: [
                                { id: 1, title: "Item 1" },
                                { id: 2, title: "Item 2" },
                                { id: 3, title: "Item 3" },
                            ],
                        },
                        
                        {
                            view: "chart",
                            type: "bar",
                            value: "#sales#",
                            label: "#sales#",
                            barWidth: 35,
                            radius: 0,
                            gradient: "falling",
                            data: [
                                { id: 1, sales: 20, year: "02" },
                                { id: 2, sales: 55, year: "03" },
                                { id: 3, sales: 40, year: "04" },
                                { id: 4, sales: 78, year: "05" },
                            ],
                        },
                    ],
                },


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
