import {classNames, select, settings} from './settings.js';
import Product from './components/products.js';

const app = {

  initPages: function(){
    
    this.pages = document.querySelector(select.containerOf.pages).children;
    this.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = this.pages[0].id;

    for(let page of this.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    
    this.activePage(pageMatchingHash);

    for(let link of this.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        
        const id = clickedElement.getAttribute('href').replace('#', '');
        
        app.activePage(id);
        
        window.location.hash = '#/' + id;
      });
    }

  },

  activePage: function(pageId){

    for(let page of this.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    
    for(let link of this.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initData: function(){
    
    const url = settings.db.url + '/' + settings.db.products;
    
    this.data = {};
    
    fetch(url)
      .then((rawResponse) =>{
        return rawResponse.json();
      })
      .then((parsedResponse) =>{
        this.data.product = parsedResponse;
        this.initProducts();
      });
  },

  initProducts: function(){
    for(let productData in this.data.product){
      new Product(this.data.product[productData].id,
        this.data.product[productData]);
    }
  },


  init: function() {
    this.initData();
    // this.initPages();
  },
};

app.init();
