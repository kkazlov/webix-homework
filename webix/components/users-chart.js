const usersChart = {
    view: "chart",
    type: "bar",
    id: "usersChart",
    value:"#count#",
    xAxis: {
        template: "#country#",
        title: "country",
    },
    yAxis:{
        start: 0
    },

    barWidth: 35,
    radius: 0,
   
};

export default usersChart;
