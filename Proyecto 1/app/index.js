(function myBlog() {
  document.addEventListener("DOMContentLoaded", function(event) {
    var app = {
      DOMapi: domApiFunc(),
      DataApi: dataApiFunc(),
      addMenu: addMenuFunc,
      addSections: addSectionsFunc,
      sections: null,
      menu: null,
      init: init
    }

    app.init();


    function init () {
      this.addMenu();
      this.addSections();
    }

    function addMenuFunc() {
      function buildMenu(){
        var container = this.DOMapi.getContainer("main-nav");
        var newNav = document.createElement("nav");
        var newList = document.createElement("ul");
        newNav.appendChild(newList);
        container.appendChild(newNav);
        function addList(item, index) {
          var index = index + 1;
          newList.innerHTML += "<li>"+(item.title + " " + index)+"</li>";
        }
        this.DOMapi.addItems(this.menu, addList);
      }

      function addMenuToDOM(object) {
        this.sections = object.data.sections;
        this.menu = object.data.menu;
        buildMenu.call(this);
        //quiza en este punto pueda llamar addSections
      }
      this.DataApi.getData(addMenuToDOM.bind(this));
    }

    function addSectionsFunc() {
      var _self = this;
      var observer = setInterval(function() {
        if(_self.sections){
          clearInterval(observer);
          var container = _self.DOMapi.getContainer("main-sections-container");
          function addItems(item, index) {
            var index = index + 1;
            var section = document.createElement("section");
            var header = document.createElement("header");
            header.appendChild(document.createElement("h2"));
            header.children[0].textContent = item.title;
            var viewButton = document.createElement("div");
            viewButton.classList.add('full');
            var textButton = document.createElement("span");
            viewButton.appendChild(textButton); 
            viewButton.children[0].textContent = "more";      
            var article = document.createElement("article");
            var image = document.createElement("img");
            image.src = item.image;
            article.appendChild(image);
            var articleText = document.createElement("p");
            articleText.textContent = item.article;
            article.appendChild(articleText);
            section.appendChild(header);
            section.appendChild(viewButton);
            section.appendChild(article);
            container.appendChild(section);
          }
          _self.DOMapi.addItems(_self.sections, addItems);
        }
      },1)
    };

    function domApiFunc(){
      function getContainer (id) {
        return document.getElementById(id);
      }

      function addItems (items, callback) {
        for(var i = 0; i < items.length; i++) {
          callback(items[i], i);
        };
      }
      var publicAPI = {
        getContainer: getContainer,
        addItems: addItems
      }
      return publicAPI;
    };

    function dataApiFunc() {
      var URLs = {
        get: "app/sections.json",
        post: "nothing yet"
      }

      function getData(callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status ==200) {
            callback(JSON.parse(xmlhttp.responseText));
          }
        }
        xmlhttp.open("GET", URLs.get, true);
        xmlhttp.send();
      }

      var publicAPI = {
        getData: getData,
      }
      return publicAPI;
    };
  })
})();