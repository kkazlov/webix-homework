import categoriesDB from '../data/categories.js';

const compareFirstChar = (value, filter) => {
    value = value.toString().toLowerCase();
    filter = filter.toString().toLowerCase();

    return value.indexOf(filter) === 0;
};

const sortVotes = (a, b) => {
    a = +a.votes.replace(/\D/, ".");
    b = +b.votes.replace(/\D/, ".");

    return a > b ? 1 : a < b ? -1 : 0;
};

const dataTable = {
    gravity: 4,
    view: "datatable",
    id: "myTable",
    select: "row",
    hover: "datatable__hover",
    scheme:{
        $init:function(obj){
            const rnd =  Math.floor(1 + Math.random() * 4);
            obj.categoryId = rnd;
        },
    },

    columns: [
        { id: "id", header: "", fillspace: 1, css: "datatable__id" },
        {
            id: "title",
            header: ["Film title", { content: "textFilter" }],
            sort: "string",
            fillspace: 4,
        },
        {
            id: "categoryId",
            header: ["Category", { content: "selectFilter" }],
            sort: "string",
            fillspace: 2,
            collection: categoriesDB
        },
        {
            id: "year",
            header: ["Released", { content: "numberFilter" }],
            fillspace: 2,
            sort: "int",
        },
        {
            id: "votes",
            header: [
                "Votes",
                { content: "textFilter", compare: compareFirstChar },
            ],
            fillspace: 2,
            sort: sortVotes,
        },
        {
            id: "del",
            header: "",
            template: "{common.trashIcon()}",
            fillspace: 1,
        },
    ],
    scrollX: false,
    
    onClick: {
        "wxi-trash": function (e, id) {
            webix
            .confirm({
                title: "Delete",
                text: "Do you want delete this record?",
            })
            .then(() => {
                this.remove(id);
                $$('myForm').clear();
                return false;
            });
            
        },
    },

    ready: function() {
        $$("myForm").bind(this);
    },

    url: "../../webix/data/data.js",
};

export default dataTable;
