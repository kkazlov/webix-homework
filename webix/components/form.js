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
        const formData = myForm.getValues();
        const { id } = formData;

        if (id) {
            myTable.updateItem(id, formData);
            webix.message("Film was updated");
        } else {
            const formValidation = myForm.validate();

            if (formValidation) {
                myTable.add(formData);

                webix.message("New film was added");
                myForm.clear();
            }
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
