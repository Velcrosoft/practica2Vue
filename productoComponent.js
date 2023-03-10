Vue.component(
    'item_producto',
    {
        //template: "",
        template: '<div class="row">\n\
        <h3>S6S Mini GPS Drones</h3>\n\
        <h3>S6S Mini GPS Drones</h3>\n\
        <div class="row">\n\
        <div class="col-12 col-sm-6 col-md-4 ">\n\
        <img src="https://cdn.shopify.com/s/files/1/0643/3210/3904/products/S0ffdbdf458fa4813906523b51fccb02bK.jpg?v=1670337974"\n\
        alt="" width="100%">\n\
        ',
        data: function(){
            return{
                producto:
                {
                    id:1,
                    imagen: "https://cdn.shopify.com/s/files/1/0643/3210/3904/products/S0ffdbdf458fa4813906523b51fccb02bK.jpg?v=1670337974",
                    nombre: "Dron LU3 MAX GPS 8K HD",
                    descripcion: "Dron LU3 MAX GPS 8K HD profesional con <b>cámara Dual</b>, cardán autoestabilizador, Motor sin escobillas para evitar obstáculos, cuadricóptero plegable",
                    precio:"620",
                    colores: ["red", "blue", "black", "yellow"]
                },
            }
        }
    }
);