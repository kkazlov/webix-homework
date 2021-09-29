const addBtn = {
    view: "button",
    value: "Add new",
    css: "webix_primary",
    click: function () {
        const input = $$("adminInput");

        if (input.validate()) {
            $$("categoriesDB").add({
                value: input.getValue(),
            });
            input.setValue("");
        }
    },
};

const input = {
    view: "text",
    id: "adminInput",
    name: "category",
    validate: webix.rules.isNotEmpty,
    invalidMessage: "Enter a some value!",
};

const adminToolbar = {
    view: "toolbar",
    id: "adminToolbar",
    cols: [input, addBtn],
};

const adminDatatable = {
    view: "datatable",
    id: "adminTable",
    editable: true,
    rules: {
        value: webix.rules.isNotEmpty,
    },

    columns: [
        { id: "id", header: "id", fillspace: 1 },
        { id: "value", header: "Film category", fillspace: 4, editor: "text" },
        {
            id: "del",
            header: "",
            template: "{common.trashIcon()}",
            fillspace: 1,
        },
    ],
    onClick: {
        "wxi-trash": function (e, id) {
            webix
                .confirm({
                    title: "Delete",
                    text: "Do you want delete this record?",
                })
                .then(() => {
                    $$("categoriesDB").remove(id);
                    return false;
                });
        },
    },
};

const admin = {
    id: "Admin",
    rows: [adminToolbar, adminDatatable],
};

export default admin;
