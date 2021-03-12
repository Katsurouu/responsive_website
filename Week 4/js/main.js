window.onload = () => {
	const cardHeaders = document.getElementsByClassName("js--cardHeader");
  const colors = ["#008000", "#FF4136"];
  const randomNumber = Math.floor(Math.random() * 2);
  const searchbar = document.getElementById("js--searchbar");
  const cardsList = document.getElementsByClassName("card");

  for(let i = 0; i < cardHeaders.length; i++){
    cardHeaders[i].style.backgroundColor = colors[randomNumber];
  }

  document.getElementById('pizza').checked = true;
  document.getElementById('pasta').checked = true;
  document.getElementById('drank').checked = true;

  function hide(classToHide) {
    [].forEach.call(document.getElementsByClassName(classToHide), function (el) {
    	el.hidden = true;
  	});
  }

  function show(classToShow) {
    [].forEach.call(document.getElementsByClassName(classToShow), function (el) {
    	el.hidden = false;
  	});
  }

  document.getElementById('pizza').onchange = function() {
  	if (this.checked) show('pizza'); else hide('pizza');
  }

  document.getElementById('pasta').onchange = function() {
  	if (this.checked) show('pasta'); else hide('pasta');
  }

  document.getElementById('drank').onchange = function() {
  	if (this.checked) show('drank'); else hide('drank');
  }
}
