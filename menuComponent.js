Vue.component(
    'item_menu',
    {
        template: "<nav class='navbar navbar-expand-lg ' v-bind:style='configuracionPagina.menuColor'><div class='container-fluid'><a class='navbar-brand' href='#'>TituloPagina</a><button class='navbar-toggler' type='button' data-bs-toggle='collapse'      data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='navbarSupportedContent'><ul class='navbar-nav me-auto mb-2 mb-lg-0'><li v-for='value in configuracionPagina.menus'><a v-bind:href='value.url'>{{ value.etiqueta }}</a></li></ul></div></div></nav>",
        data: function(){
            return{
                configuracionPagina:
                {
                    marca: "MegaDron",
                    menuColor: "background-color: lightblue",
                    precioEstilos: "background: orangered; color: white; font-weight: bold",
                    menus: [
                        {
                            etiqueta: "Inicio",
                            url: "?"
                        },
                        {
                            etiqueta: "Tienda",
                            url: "?"
                        }
                    ]
                }

            }
        }
    }
);