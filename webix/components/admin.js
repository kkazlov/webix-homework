const addBtn = {
    view: "button",
    value: "Add new",
    css: "webix_primary",
    click: function () {
        /* const input = $$("adminInput");
        if (input.validate()) {
            $$("categoriesDB").add({
                value: input.getValue(),
            });
            input.setValue("");
        } */
        const form = $$("adminForm");

        if (form.validate()) {
            $$("categoriesDB").add({
                value: $$("adminInput").getValue(),
            });
            form.clear();
            $$('adminForm').clearValidation();
        }
    },
};

const input = {
    view: "text",
    id: "adminInput",
    name: "category",
    invalidMessage: "Enter the correct value!",
    on: {
        onFocus: function() {
            $$('adminForm').clearValidation();
        }
    }
};

const adminForm = {
    view: "form",
    id: "adminForm",
    rules: {
        category: function (value) {
            return webix.rules.isNotEmpty(value);
        },
    },
    

    elements: [input, addBtn],
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
    rows: [adminForm, adminDatatable],
};

export default admin;
