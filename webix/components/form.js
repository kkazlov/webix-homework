const formInputs = {
    rows: [
        { template: "Edit films", type: "section" },
        { view: "text", label: "Title", name: "title" },
        { view: "text", label: "Year", name: "year" },
        { view: "text", label: "Rating", name: "rating" },
        { view: "text", label: "Votes", name: "votes" },
    ],
};

const saveBtn = {
    view: "button",
    value: "Save",
    css: "webix_primary",
    click: function () {
        const myTable = $$("myTable");
        const myForm = $$("myForm");

        if (myForm.validate()) {
            const formData = myForm.getValues();
            const { id } = formData;

            if (id) {
                myForm.save();
            } else {
                myForm.save();
                myForm.clear();
                myTable.unselectAll();
            }
            webix.message(id ? "Film was updated" : "New film was added");
        }
    },
};

const clearBtn = {
    view: "button",
    value: "Clear",
    click: function () {
        webix
            .confirm({
                title: "Clear",
                text: "Do you want clear the form?",
            })
            .then(function () {
                const form = $$("myForm");
                form.clear();
                form.clearValidation();
            });
    },
};

const formBtns = {
    cols: [saveBtn, clearBtn],
};

const formRules = {
    title: webix.rules.isNotEmpty,
    year: function (value) {
        const currentYear = new Date().getFullYear();
        return value >= 1970 && value <= currentYear;
    },
    votes: function (value) {
        value = value.replace(/,/, ".");
        return value < 100000;
    },
    rating: function (value) {
        return value !== 0 && webix.rules.isNotEmpty(value);
    },
};

const form = {
    gravity: 2,
    view: "form",
    id: "myForm",
    elementsConfig: { invalidMessage: "Enter the correct value!" },
    elements: [formInputs, formBtns, {}],
    rules: formRules,
};

export default form;
