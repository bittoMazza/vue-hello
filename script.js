const app = new Vue(
    {
        el:'#root',
        data: {
            textTitle : "",
            newImageLink : "",
            imageLink : "",

        },
        methods: {
            changeImage(){
                this.imageLink = this.newImageLink
            }
        }
    }
)