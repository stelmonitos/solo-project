import {select ,templates } from '../settings.js';
import { utils } from '../utils.js';

class Product {
  constructor(id, data){
    this.id = id;
    this.data = data;
        
    this.renderProduct();
  }

  renderProduct(){
    const generatedHTML = templates.product(this.data);

    this.elementHome = utils.createDOMFromHTML(generatedHTML);
    this.elementProducts = utils.createDOMFromHTML(generatedHTML);

    this.listProduct = document.querySelectorAll(select.containerOf.productList);
    console.log(this.listProduct);
    this.homePage = this.listProduct[0];
    this.productPage = this.listProduct[1];
    
    this.homePage.appendChild(this.elementHome);
    this.productPage.appendChild(this.elementProducts);
  }
}
export default Product;