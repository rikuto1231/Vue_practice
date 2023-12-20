
const app = new Vue({
    el: '#app',
    data() {
        return {
            age:20,
            depart: [{
                name: '情報工学科',
            }, {
                name: '情報システム専攻科',
            }, {
                name: '情報システム科',
            }]
        };
    },methods: {
        increment() {
            this.age++;
        },
        decrement() {
            this.age--;
        }
    },
});
