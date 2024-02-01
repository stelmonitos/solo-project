export const select = {
  templateOf: {
    product: '#template-product',
  },
  containerOf: {
    pages: '#pages',
    productList: '.product-list',
  },
  nav:{
    links: 'a.nav-link',
  },
};

export const classNames = {
  nav:{
    active: 'active',
  },
  pages:{
    active: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  }
};

export const templates = { 
  product: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
  
};
