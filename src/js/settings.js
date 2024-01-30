export const select = {
  templateOf: {
    product: '#template-product',
  },
  containerOf: {
    pages: '#pages',
    productList: '.product-list',
  },
}

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  }
};

export const templates = { 
  product: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
}