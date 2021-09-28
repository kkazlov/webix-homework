const treetable = {
    id: "Products",
    view: "treetable",
    select: "cell",
    editable: true,
    columns: [
        { id: "id", header: "", width: 50 },
        {
            id: "title",
            header: "title",
            editor: "text",
            width: 250,
            template: "{common.treetable()} #title#",
        },
        { id: "price", header: "price", width: 200, editor: "text" },
    ],
    rules: {
        title: webix.rules.isNotEmpty,
        price: webix.rules.isNumber,
    },
    url: "../../webix/data/products.js",
    on: {
        onAfterLoad: function () {
            this.openAll();
        },
    },
};

export default treetable;
