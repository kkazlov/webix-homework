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
    columns: [
        { id: "id", header: "", fillspace: 1, css: "datatable__id" },
        {
            id: "title",
            header: ["Film title", { content: "textFilter" }],
            sort: "string",
            fillspace: 4,
        },
        {
            id: "year",
            header: [
                "Released",
                { content: "textFilter", compare: compareFirstChar },
            ],
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
    on: {
        onAfterSelect: function (id) {
            const values = this.getItem(id);
            $$("myForm").setValues(values);
        },
    },
    onClick: {
        "wxi-trash": function (e, id) {
            this.remove(id);
            return false;
        },
    },

    url: "../../webix/data/data.js",
};

export default dataTable;
