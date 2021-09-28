const datatableTabbar = {
    view: "tabbar",
    id: "myTabbar",
    value: "allFilms",
    optionWidth: 100,

    options: [
        { id: "allFilms", value: "All" },
        { id: "oldFilms", value: "Old" },
        { id: "modernFilms", value: "Modern" },
        { id: "newFilms", value: "New" },
    ],

    on: {
        onAfterTabClick: function () {
            $$("myTable").filterByAll();
        },
    },
};

export default datatableTabbar;
