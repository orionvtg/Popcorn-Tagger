document.addEventListener('DOMContentLoaded', function() {
  var elemsModal = document.querySelectorAll(".modal");
  var options = {}
  M.Modal.init(elemsModal, options);
  var elemsSelect = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elemsSelect, options);
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

