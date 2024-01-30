import {settings} from './settings.js';
import Product from './components/products.js';

const app = {

  initData: function(){
    this.data = {};

    const url = settings.db.url + '/' + settings.db.products;
    
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        this.data.products = parsedResponse;
        this.initProducts();
      });
  },

  initProducts: function(){
    for(let productData in this.data.products){
      new Product(this.data.products[productData].id,
        this.data.products[productData]);
    }
  },


  init: function() {
    this.initData();
    this.initProducts();
  },
};

app.init();
