/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// Elements with IDs are available as properties of `window`.
window.checklistitem.addEventListener('submit', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set('card', 'shared', 'checklistitem', window.checklistSelect.value)
  .then(function(){
    t.closePopup();
  });
});

t.render(function(){
  return t.get('card', 'shared', 'checklistitem')
  .then(function(checklistitem){
    window.checklistSelect.value = checklistitem;
  })
  .then(function(){
    t.sizeTo('#checklistitem').done();
  });
});
