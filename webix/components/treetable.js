const treetable = {
    id: "Products",
    view: "treetable",
    select: "cell",
    columns: [
        { id: "id", header: "", width: 50 },
        {
            id: "value",
            header: "title",
            
            width: 250,
            template: "{common.treetable()} #title#",
        },
        { id: "price", header: "price", width: 200, },
    ],
    url: "../../webix/data/products.js",
    on: {
        onAfterLoad: function () {
            this.openAll();
        },
    },
};

export default treetable;
