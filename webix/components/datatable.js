const dataTable = {
    gravity: 4,
    view: "datatable",
    id:"myTable",
    autoConfig: true,
    scrollX: false,
    on: {
        onAfterSelect: function(id) {
            const values = this.getItem(id);
            $$("myForm").setValues(values);
        }
    },

    url:"../../webix/data/data.js"
};

export default dataTable;