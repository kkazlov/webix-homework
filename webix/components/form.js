const formInputs = {
    rows: [
        { template: "Edit films", type: "section" },
        { view: "text", label: "Title", name: "title" },
        { view: "text", label: "Year", name: "year" },
        { view: "text", label: "Rating", name: "rating" },
        { view: "text", label: "Votes", name: "votes" },
    ],
};

const formBtns = {
    cols: [
        {
            view: "button",
            value: "Add new",
            css: "webix_primary",
            click: function () {
                const form = this.getFormView();
                const formValidation = form.validate();

                if (formValidation) {
                    const values = form.getValues();
                    $$("myTable").add(values);
                    webix.message("New film was added");
                }
            },
        },

        {
            view: "button",
            value: "Clear",
            click: function () {
                webix
                    .confirm({
                        title: "Clear",
                        text: "Do you want clear the form?",
                    })
                    .then(function () {
                        const myForm = $$("myForm");
                        myForm.clear();
                        myForm.clearValidation();
                    });
            },
        },
    ],
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
