new Vue({
    el: '#app',
    data: {
        number:'1234567',
        name:'name'
    },
    computed: {
        NumberCheck(){
            return this.number.length <= 6 || isNaN(Number(number));
        },
        NameCheck(){
            return this.name.length < 4;
        }
    }
});

