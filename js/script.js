    var link = document.querySelector(".contact-button");
    var link_map = document.querySelector(".open-map");
    var write_us = document.querySelector(".write-us-popup");
    var map = document.querySelector(".map-popup");
    var close = write_us.querySelector(".close-modal");
    var close_map = document.querySelector(".map-popup .close-modal");



    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      write_us.classList.add("modal-show");
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      write_us.classList.remove("modal-show");
    });

    link_map.addEventListener("click", function (evt) {
      evt.preventDefault();
      map.classList.add("modal-show");
    });

    close_map.addEventListener("click", function (evt) {
      evt.preventDefault();
      map.classList.remove("modal-show");
    });
