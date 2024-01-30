import {settings} from './settings.js';

const app = {

  initData: function(){
    this.data = {};

    const url = settings.db.url + '/' + settings.db.products;
    
    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  },


  init: function() {
    this.initData();
  },
};

app.init();
