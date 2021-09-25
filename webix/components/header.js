const popupProfile = webix.ui({
    view: "popup",
    id: "popupProfile",
    width: 400,
    body: {
        view: "list",
        template: "#title#",
        scroll: false,
        select: true,
        autoheight: true,
        data: [
            { id: 1, title: "Settings" },
            { id: 2, title: "Log Out" },
        ],
    },
});

const label = {
    view: "label",
    label: "My App",
    autowidth: true,
    css: "header__label",
};

const btnHeader = {
    view: "button",
    id: "btn-profile",
    type: "icon",
    icon: "wxi-user",
    label: "Profile",
    autowidth: true,

    css: "webix_transparent",
    click: function () {
        popupProfile.show(this.$view);
    },
};

const header = {
    view: "toolbar",
    id: "myHeader",
    paddingX: 10,
    cols: [label, {}, btnHeader],
    css: "webix_dark",
};

export default header;
