const small_film_set = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        votes: 678790,
        rating: 9.2,
        rank: 1,
        category: "Thriller",
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        votes: 511495,
        rating: 9.2,
        rank: 2,
        category: "Crime",
    },
    {
        id: 3,
        title: "The Godfather: Part II",
        year: 1974,
        votes: 319352,
        rating: 9.0,
        rank: 3,
        category: "Crime",
    },
    {
        id: 4,
        title: "The Good, the Bad and the Ugly",
        year: 1966,
        votes: 213030,
        rating: 8.9,
        rank: 4,
        category: "Western",
    },
    {
        id: 5,
        title: "Pulp fiction",
        year: 1994,
        votes: 533848,
        rating: 8.9,
        rank: 5,
        category: "Crime",
    },
    {
        id: 6,
        title: "12 Angry Men",
        year: 1957,
        votes: 164558,
        rating: 8.9,
        rank: 6,
        category: "Western",
    },
];

webix.ready(() => {
    webix.ui({
        
        rows: [
            //header
            {   
                
                paddingX: 10,

                cols: [
                    {
                        view: "label",
                        label: "My App",
                        gravity: 1,
                        autowidth: true,
                        css: "header__label",
                    },

                    { gravity: 2 },

                    {
                        view: "button",
                        type: "icon",
                        icon: "wxi-user",
                        label: "Profile",
                        align: "right",
                        maxWidth: 150,
                        gravity: 1,

                        css: "header__btn",
                    },
                ],
                css: "header",
            },

            //content
            {   
                
                cols: [
                    // list and status
                    {
                        type: "clear",
                        gravity: 1,
                        
                        rows: [
                            //content-list
                            {
                                view: "list",
                                template: "#title#",
                                scroll: false,
                                select: true,
                                data: [
                                    { id: 1, title: "Dashboard" },
                                    { id: 2, title: "Users" },
                                    { id: 3, title: "Products" },
                                    { id: 4, title: "Locations" },
                                ],
                            },

                            //content-status
                            {
                                view: "button",
                                type: "icon",
                                icon: "wxi-check",
                                label: "Connected",
                                align: "center",
                                
                            },
                        ],
                        
                        css: "content__list",
                    },

                    { 
                        view: "resizer",
                    },

                    // dataTable
                    {
                        gravity: 4,
                        view: "datatable",
                        autoConfig: true,

                        data: small_film_set,
                        
                    },

                    //form
                    {
                        autoheight: false,
                        gravity: 2,
                        view: "form",
                        
                        elements: [
                            {
                                rows: [
                                    {
                                        template: "Edit films",
                                        type: "section",
                                    },

                                    {
                                        view: "text",
                                        label: "Title",
                                        name: "title",
                                    },
                                    {
                                        view: "text",
                                        label: "Year",
                                        name: "year",
                                    },

                                    {
                                        view: "text",
                                        label: "Rating",
                                        name: "rating",
                                    },

                                    {
                                        view: "text",
                                        label: "Votes",
                                        name: "votes",
                                    },
                                ],
                            },

                            {
                                cols: [
                                    {
                                        view: "button",
                                        value: "Add new",
                                        css: "webix_primary",
                                    },
                                    {
                                        view: "button",
                                        value: "Clear",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },

            //footer
            {
                autoheight: true,
                
                view: "template",
                template: `
                    <footer>
                        The software is provided by
                        <a href="https://webix.com/">https://webix.com/</a>
                        All rights reserved ©
                    </footer>
                `,
            },
        ],
    });
});
