const toolbarInput = {
    view: "text",
    id: "usersInput",
    name: "users",
    gravity: 4,

    on: {
        onTimedKeyPress: function() {
            const value = this.getValue().toLowerCase();

            $$("usersList").filter(function(obj){
                let filter = [obj.name, obj.country].join("|");
                filter = filter.toString().toLowerCase();
                return (filter.indexOf(value) != -1);
            })
        }
    }
};

const ascBtn = {
    view: "button",
    value: "Sort asc",
    css: "webix_primary",
};

const descBtn = {
    view: "button",
    value: "Sort desc",
    css: "webix_primary",
};

const userToolbar = {
    view: "toolbar",
    id: "userToolbar",
    cols: [toolbarInput, ascBtn, descBtn],
};

const list = {
    view: "list",
    id: "usersList",
    template: `
        <div class='user-list__item'>
            #name# from #country# 
            <span class='webix_icon wxi-close'></span>
        </div>
    `,
    select: true,
    url: "../../webix/data/users.js",
};

const usersList = {
    rows: [userToolbar, list],
};

export default usersList;
