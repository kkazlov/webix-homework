import { categoriesDB } from "../data/collections.js";

const addBtn = {
    view: "button",
    value: "Add new",
    css: "webix_primary",
};

const input = {
    view: "text",
    id: "adminInput",
    name: "category",
};

const adminToolbar = {
    view: "toolbar",
    id: "adminToolbar",
    cols: [input, addBtn],
};

const adminDatatable = {
    view: "datatable",
    id: "adminTable",
    columns: [
        { id: "id", header: "id" },
        { id: "value",header: "Film category" },
    ],

    
};

const admin = {
    id: "Admin",
    rows: [adminToolbar, adminDatatable],
};

export default admin;
