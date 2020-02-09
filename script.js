window.onload = function(e) {
  let links = document.querySelectorAll('a[target = _blank]');
  for ( let i = 0; i < links.length; i++){
  links[i].onclick = confirmAway;
}
function confirmAway() {
  if(!confirm('Перейти или нет?')) {
    return false;
  }
}

}