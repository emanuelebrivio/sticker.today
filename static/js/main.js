/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection, qwest, console */

(function () {

  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };

  request.get('http://www.kimonolabs.com/api/6mcj643s?apikey=9e9e30f3542ec789be4de05d5c9f16e9', function(response){
    // Runned when the request is successful
    console.log(response);

    var container = document.querySelector('#results');
    
    response.results.collection1.forEach(function (el) {
      var item = document.createElement('div')
        , thumb = document.createElement('img')
        , name = document.createElement('h4')
        ;
      
      name.textContent = el.name.text;
      thumb.setAttribute('src', el.thumb.src);

      item.appendChild(thumb);
      item.appendChild(name);
      item.classList.add('text-center');
      item.classList.add('pure-u-1-4');

      container.appendChild(item);
    });
  });

  qwest.get('http://www.kimonolabs.com/api/6mcj643s?apikey=9e9e30f3542ec789be4de05d5c9f16e9')
    .success(function(response){
      // Runned when the request is successful
      console.log(response);

      var container = document.querySelector('#results');
      
      response.results.collection1.forEach(function (el) {
        var item = document.createElement('div')
          , thumb = document.createElement('img')
          , name = document.createElement('h4')
          ;
        
        name.textContent = el.name.text;
        thumb.setAttribute('src', el.thumb.src);

        item.appendChild(thumb);
        item.appendChild(name);
        item.classList.add('text-center');
        item.classList.add('pure-u-1-4');

        container.appendChild(item);
      });
    })
    .error(function(message){
      // Process error message
      console.log(message);
    })
    .complete(function(){
      // Always runned
  });


})();
