
const app = new Vue({
    el: '#app',
    data: {
        messeger: '今日は暖かいです。',
    },
    methods: {
        changeText: function () {
            this.messeger = '今日は寒いです。';
        }
    },
});
