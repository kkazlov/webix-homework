const categoriesDB = new webix.DataCollection({
    id:"categoriesDB",
    url: '../../webix/data/categories.js',
});

const usersDB = new webix.DataCollection({
    id:"usersDB",
    url: '../../webix/data/users.js'
});

export { categoriesDB, usersDB };