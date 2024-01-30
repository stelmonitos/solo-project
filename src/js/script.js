import {settings} from './settings.js';
import Product from './components/products.js';

const app = {

  initData: function(){
    
    const url = settings.db.url + '/' + settings.db.products;
    
    this.data = {};
    
    fetch(url)
      .then((rawResponse) =>{
        return rawResponse.json();
      })
      .then((parsedResponse) =>{
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
  },
};

app.init();
