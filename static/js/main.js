/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection, reqwest, console */

(function () {

  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };

  
  reqwest({
    url: 'http://www.kimonolabs.com/api/6mcj643s?apikey=9e9e30f3542ec789be4de05d5c9f16e9'
  , type: 'jsonp'
  , method: 'get'
  , crossOrigin: true
  , withCredentials: true
  , error: function (error) { }
  , success: function (response) {

      console.log(response);

      var container = document.querySelector('#results');
      
      response.results.collection1.forEach(function (el) {
        var item = document.createElement('li')
          , thumb = document.createElement('img')
          , name = document.createElement('h4')
          , price = document.createElement('span')
          ;
        
        name.textContent = el.name.text;
        price.textContent = el.price;
        thumb.setAttribute('src', el.thumb.src);
        thumb.classList.add('thumbnail');

        item.appendChild(thumb);
        item.appendChild(name);
        item.appendChild(price);

        container.appendChild(item);
      });

    }
  });

})();
