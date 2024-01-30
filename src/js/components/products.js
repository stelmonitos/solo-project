import {templates } from '../settings.js';
// import { utils } from '../utils.js';
class Product {
  constructor(id, data){
    this.id = id;
    this.data = data;
        
    this.renderProduct();
  }

  renderProduct(){
    const generatedHTML = templates.product(this.data);

    this.element = utils.createDOMFromHTML(generatedHTML);
  }
}

export default Product;