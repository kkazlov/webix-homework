import sidebar from "./sidebar.js";
import dataTable from "./datatable.js";
import form from "./form.js";

const content = {
    cols: [
        sidebar,
        { view: "resizer" },
        dataTable,
        form
    ],
};

export default content;