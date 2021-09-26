const toolbarInput = {
    view: "text",
    id: "usersInput",
    name: "users",
    gravity: 4,

    on: {
        onTimedKeyPress: function () {
            const value = this.getValue().toLowerCase();

            $$("usersList").filter(function (obj) {
                let filter = [obj.name, obj.country].join("|");
                filter = filter.toString().toLowerCase();
                return filter.indexOf(value) != -1;
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

const userToolbar = {
    view: "toolbar",
    id: "userToolbar",
    cols: [toolbarInput, ascBtn, descBtn],
};

const list = {
    view: "list",
    id: "usersList",
    template: function ({ name, country }) {
        return `
                <div class='user-list__item'>
                    ${name} from ${country}
                    <span class='webix_icon wxi-close'></span>
                </div>
            `;
    },
    css: "user-list",
    select: true,
    url: "../../webix/data/users.js",

    onClick: {
        "wxi-close": function (e, id) {
            this.remove(id);
            return false;
        },
    },
};

const usersList = {
    rows: [userToolbar, list],
};

export default usersList;
