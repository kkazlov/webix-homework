const categoriesDB = new webix.DataCollection({
    url: '../../webix/data/categories.js',
});

const usersDB = new webix.DataCollection({
    url: '../../webix/data/users.js'
});

export { categoriesDB, usersDB };