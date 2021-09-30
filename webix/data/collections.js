const categoriesDB = new webix.DataCollection({
    id:"categoriesDB",
    url: '../../webix/data/categories.js',
});

const usersDB = new webix.DataCollection({
    id:"usersDB",
    url: '../../webix/data/users.js',
    scheme: {
        $init: function (obj) {
            if (obj.age < 26) {
                obj.$css = "user-list__highlight";
            }
        },
    },
    
});

export { categoriesDB, usersDB };