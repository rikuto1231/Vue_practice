new Vue({
    el: '#app',
    data: {
        text:'今日は暖かいです'
    },
    methods: {
        ChangeText() {
            this.text = (this.text == '今日は暖かいです') ? '今日は寒いです' : '今日は暖かいです'
        },
        mini(){
            this.text = '今日は寒いです'
        }
    }
});

