const contentList = {
    view: "list",
    template: "#title#",
    borderless: true,
    scroll: false,
    select: true,
    data: [
        { id: 1, title: "Dashboard" },
        { id: 2, title: "Users" },
        { id: 3, title: "Products" },
        { id: 4, title: "Locations" },
    ],
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
    type: "clear",
    rows: [contentList, contentStatus],
    css: "content__list",
};

export default sidebar;
