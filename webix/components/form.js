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
                const formValidation = $$("myForm").validate();
                if (formValidation) {
                    const values = $$("myForm").getValues();
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
                        id: "myConfirm",
                        text: "Do you want clear the table?",
                    })
                    .then(
                        function () {
                            $$("myForm").clear();
                            $$("myTable").clearAll();
                        },
                        function () {
                            $$("myConfirm").close();
                        }
                    );
            },
        },
    ],
};

const formRules = {
    title: webix.rules.isNotEmpty,
    year: function (value) {
        return value >= 1970 && value <= 2021;
    },
    votes: function (value) {
        return value < 100000 && value !== "";
    },
    rating: function (value) {
        return value !== 0 && value !== "";
    },
};

const form = {
    gravity: 2,
    view: "form",
    id: "myForm",
    elements: [formInputs, formBtns, {}],
    rules: formRules,
    on: {
        onValidationError: function () {
            webix.message({ text: "Enter the correct value!", type: "error" });
        },
    },
};

export default form;