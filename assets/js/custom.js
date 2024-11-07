// main script
(function () {
  "use strict";

  var form = document.getElementById("cla-form");
  var honeypot = document.getElementById("honeypot");
  form.addEventListener("submit", function (event) {
    if (honeypot.value !== "") {
      event.preventDefault();
    }
  });
})();
