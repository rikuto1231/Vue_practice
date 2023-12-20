
const app = new Vue({
    el: '#app',
    data() {
        return {
            count:20,
            major:[{
                name: '情報工学科'
            },{
                name:'情報システム専攻科'
            },{
                name:'情報システム科'
            }
            ],
            sub:[{
                number:10,
                name: 'Java',
                com:45
            },{
                number:20,
                name:'PHP',
                com:45
            },{
                number:30,
                name:'Vue',
                com:30
            }
            ]
        };
    }, methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    },
});


