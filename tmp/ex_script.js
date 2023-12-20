
const app = new Vue({
    el: '#app',
    data() {
        return {
            menus: [{
                label: 'TOP',
                path: 'ex_index.html',
            }, {
                label: 'PROGRAM',
                path: 'ex_program.html',
            }, {
                label: 'DATE',
                path: 'ex_date.html',
            }],
            programs: [
                { song: "カノン" },
                { song: "四季" },
                { song: "月光" }
            ],
            obj:{
                data:"11月3日",
                time:"15:00-16:00",
                place:"市民ホール"
            }
        };
    }
});


