function checkform () {
	var city = document.getElementById("city").value;
	 
	 
	if (/[\d.,:]/.test(city) == false && city != "" && 3 <= city.length  ) {
		
	$(".allboxes").remove();
	$(".warning").remove();
	
	/* var div = createElement("div");
	div.setAttribute('id', 'jsdiv');
	var p = createElement("p");
	p.setAttribute('id', 'jsp');
	p.innerHTML = "Добро пожаловать";
	div.appendChild(p);
	$("body").appendChild(div);
	}
	 */
	
	$(".jsdiv").css({"display":"block"});
	$(".linkcomments").css({"display":"block"});
	$(".mainpage").css({"display":"block"});
}
}