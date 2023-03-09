Vue.component(
    'item_piepagina',
    {
        template: "<footer v-bind:style='footerColor'></footer>",
        data: function(){
            return{
                footerColor: "background-color: gray;",
            }
        }
    }
);