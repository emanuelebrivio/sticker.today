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

      var container = document.querySelector('#results')
        , modal = document.querySelector('#modal')
        , mask = document.querySelector('#mask')
        ;
      
      response.results.collection1.forEach(function (el) {
        var item = document.createElement('li')
          , thumbDiv = document.createElement('div')
          , thumb = document.createElement('img')
          , textDiv = document.createElement('div')
          , name = document.createElement('h4')
          , price = document.createElement('span')
          ;
        
        name.textContent = el.name.text;
        price.innerHTML = el.price.replace('Free', '<small>Free</small>').replace('Paid', '<small>Paid</small>');
        textDiv.appendChild(name);
        textDiv.appendChild(price);

        thumb.setAttribute('src', el.thumb.src);
        thumbDiv.classList.add('thumbnail');
        thumbDiv.appendChild(thumb);

        item.appendChild(thumbDiv);
        item.appendChild(textDiv);
        item.setAttribute('data-image-preview', el.thumb.href);

        item.addEventListener('click', function () {
          showModal(this);
          //window.location.href = this.getAttribute('data-image-preview');
        });

        container.appendChild(item);
      });

    }
  });

  var showModal = function (obj) {
    var preview = document.createElement('img');

    preview.setAttribute('src', obj.getAttribute('data-image-preview'));

    modal.querySelector('.preview').innerHTML = '';
    modal.querySelector('.preview').appendChild(preview);

    // Show modal and mask
    modal.style.display = 'block';
    mask.style.display = 'block';
    setTimeout(function () {
      modal.classList.add('open');
      mask.classList.add('open');
    }, 10);
  };

  document.querySelector('#close-modal').addEventListener('click', function () {
    modal.classList.remove('open');
    mask.classList.remove('open');
    setTimeout(function () {
      modal.style.display = 'none';
      mask.style.display = 'none';
    }, 500);
  });

})();
