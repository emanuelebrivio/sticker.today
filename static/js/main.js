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
          , thumbDiv = document.createElement('div')
          , thumb = document.createElement('img')
          , textDiv = document.createElement('div')
          , name = document.createElement('h4')
          , price = document.createElement('span')
          ;
        
        name.textContent = el.name.text;
        price.innerHTML = el.price.replace('Free', '<small>FREE</small>');
        textDiv.appendChild(name);
        textDiv.appendChild(price);

        thumb.setAttribute('src', el.thumb.src);
        thumbDiv.classList.add('thumbnail');
        thumbDiv.appendChild(thumb);

        item.appendChild(thumbDiv);
        item.appendChild(textDiv);

        container.appendChild(item);
      });

    }
  });

})();
