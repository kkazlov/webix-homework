import countriesDB from "../data/countries.js";

const toolbarInput = {
    view: "text",
    id: "usersInput",
    name: "users",
    gravity: 4,

    on: {
        onTimedKeyPress: function () {
            const value = this.getValue().toLowerCase();

            $$("usersList").filter(function ({ name, country }) {
                name = name.toString().toLowerCase();
                country = country.toString().toLowerCase();

                return (
                    name.indexOf(value) != -1 || country.indexOf(value) != -1
                );
            });
        },
    },
};

const ascBtn = {
    view: "button",
    value: "Sort asc",
    css: "webix_primary",
    click: function () {
        $$("usersList").sort("#name#", "asc");
    },
};

const descBtn = {
    view: "button",
    value: "Sort desc",
    css: "webix_primary",
    click: function () {
        $$("usersList").sort("#name#", "desc");
    },
};

const randomInteger = (max) => {
    let rand = Math.random() * max;
    return Math.floor(rand);
};

const addBtn = {
    view: "button",
    value: "Add new",
    css: "webix_primary",
    click: function () {
        const rndAge = randomInteger(100);
        const rndCountry = randomInteger(countriesDB.length);

        $$("usersList").add({
            name: "Anthony Soprano",
            country: countriesDB[rndCountry].value,
            age: rndAge,
        });
    },
};

const userToolbar = {
    view: "toolbar",
    id: "userToolbar",
    cols: [toolbarInput, ascBtn, descBtn, addBtn],
};

const list = {
    view: "editlist",
    id: "usersList",
    editable: true,
    editor: "text",
    editValue: "name",
    rules: { name: webix.rules.isNotEmpty },

    template: function ({ name, country }) {
        return `
                <div class='user-list__item'>
                    ${name} from ${country}
                    <span class='webix_icon wxi-close removeBtn'></span>
                </div>
            `;
    },

    css: "user-list",
    select: true,
    onClick: {
        removeBtn: function (e, id) {
            this.remove(id);
            return false;
        },
    },

    url: "../../webix/data/users.js",
    scheme: {
        $init: function (obj) {
            if (obj.age < 26) {
                obj.$css = "user-list__highlight";
            }
        },
    },
    on: {
        onAfterLoad: function () {
            $$("usersChart").sync($$("usersList"), function () {
                $$("usersChart").group({
                    by: "country",
                    map: {
                        count: ["country", "count"],
                    },
                });

                $$("usersChart").sort("country", "asc");
            });
        },
    },
};

const usersList = {
    rows: [userToolbar, list],
};

export default usersList;
