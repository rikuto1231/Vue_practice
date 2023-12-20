const app = new Vue({
    el: '#app',
    data() {
        return {
            number : '1234567',
            name : 'name'
        };
    },
    computed: {
        num_chek(){
            const number = this.number;
            return number.length < 6 || isNaN(Number(number));
        },
        name_chek(){
            return this.name.length < 4;
        }
    }
});