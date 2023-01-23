var max = 100
var count = 1
function addTextInput() {
   limit = 0
     if (limit<max){
          var product = document.createElement("INPUT");
          var quantity = document.createElement("INPUT");
          var price = document.createElement("INPUT");
          var product = document.createElement("INPUT");
          var y = document.createElement("BR")
          var z = document.createElement("BR")
          var b = document.createElement("BR")
          var b2 = document.createElement("BR")
          var b3 = document.createElement("BR")
          var b4 = document.createElement("BR")
          var product_name = "product"+count.toLocaleString()
          var price_name = "price"+count.toLocaleString()
          var quantity_name = "quantity"+count.toLocaleString()
          product.setAttribute("type", "text");
          product.setAttribute("name", product_name);
          product.setAttribute("value", "Enter a Product name");

          price.setAttribute("type", "text");
          price.setAttribute("name", price_name);
          price.setAttribute("value", "Enter a  Product Price");

          quantity.setAttribute("type", "text");
          quantity.setAttribute("name", quantity_name);
          quantity.setAttribute("value", "Enter a Product Product Quantity");



          document.getElementById("addrow").append(y);
          document.getElementById("addrow").append(z);
          document.getElementById("addrow").append(product);
          document.getElementById("addrow").append(b);
          document.getElementById("addrow").append(b2);

          document.getElementById("addrow").append(b3);
          document.getElementById("addrow").append(b4);
          document.getElementById("addrow").append(price);
          document.getElementById("addrow").append(b);

          document.getElementById("addrow").append(y);
          document.getElementById("addrow").append(z);
          document.getElementById("addrow").append(quantity);
          document.getElementById("addrow").append(b);
    }

    count ++
    limit++
    console.log(limit)

}
    




