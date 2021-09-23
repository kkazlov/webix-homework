import small_film_set from "./db.js";

const label = {
    view: "label",
    label: "My App",
    autowidth: true,
    css: "header__label",
};

const btnHeader = {
    view: "button",
    type: "icon",
    icon: "wxi-user",
    label: "Profile",
    align: "right",
    autowidth: true,

    css: "header__btn",
};

const contentList = {
    view: "list",
    template: "#title#",
    borderless: true,
    scroll: false,
    select: true,
    data: [
        { id: 1, title: "Dashboard" },
        { id: 2, title: "Users" },
        { id: 3, title: "Products" },
        { id: 4, title: "Locations" },
    ],
};

const contentStatus = {
    view: "template",
    borderless: true,
    autoheight: true,
    template: `
        <span class='webix_icon wxi-check'></span> 
        Connected
    `,
    css: 'content__status'
}

const formInputs = {
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
}

const formBtns = {
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
}

webix.ready(() => {
    webix.ui({
        rows: [
            {   //header
                view: "toolbar",
                id: "myToolbar",
                paddingX: 10,
                cols: [
                    label,
                    {},
                    btnHeader
                ],
                css:"webix_dark",
            },

            {   //content
                cols: [
                    {   //content-list
                        type: "clear",
                        rows: [
                            contentList,
                            contentStatus
                        ],
                        css: "content__list",
                    },

                    { view: "resizer" },

                    {   //content-dataTable
                        gravity: 4,
                        view: "datatable",
                        autoConfig: true,
                        scrollX: false,

                        data: small_film_set,
                    },
                    
                    {   //form
                        gravity: 2,
                        view: "form",

                        elements: [
                            formInputs,
                            formBtns,
                            {}
                        ],
                    },
                ],
            },

            
            {   //footer
                autoheight: true,
                view: "template",
                template: `
                    The software is provided by
                    <a href="https://webix.com/">https://webix.com/</a>
                    All rights reserved ©
                `,
                css: "footer"
            },
        ],
    });
});
