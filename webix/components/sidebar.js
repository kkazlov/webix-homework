const contentList = {
    view: "list",
    id:"myList",
    template: "#title#",
    borderless: true,
    scroll: false,
    select: true,
    data: [
        { id: "Dashboard", title: "Dashboard" },
        { id: "Users", title: "Users" },
        { id: "Products", title: "Products" },
        { id: "Admin", title: "Admin" },
    ],
    
    ready: function() {
        this.select("Dashboard");
    },

    on: {
        onAfterSelect: function (id) {
            $$(id).show();
        },
        
    }, 
};

const contentStatus = {
    view: "template",
    borderless: true,
    autoheight: true,
    template: `
        <span class='webix_icon wxi-check'></span> 
        Connected
    `,
    css: "content__status",
};

const sidebar = {
    width: 200,
    type: "clear",
    rows: [contentList, contentStatus],
    css: "content__list",
};

export default sidebar;
