/*
assignment 5

Team_Red: Mascolo Miller, Travis Herndon
*/
function attractions(){
	document.write("<ol>")
	document.write("<li><a href='https://zoo.sandiegozoo.org/visit'>San Diego Zoo</a></li>");
	document.write("<li><a href='https://seaworld.com/san-diego/?&mkwid=s-dc_pcrid_520223137830_pkw_seaworld%20sandiego_pmt_e_slid_&pgrid=123245794794&ptaid=aud-1065092923912:kwd-33455830&gclid=Cj0KCQjw7MGJBhD-ARIsAMZ0eetHxZfn8by1IS1s1ER1yfTDggnpOrc8mhdiSFFXjqPPTY8E8nfBW-YaAmwpEALw_wcB&gclsrc=aw.ds'>SeaWorld San Diego</a></li>");
	document.write("<li><a href='https://www.balboapark.org/'>Balboa Park</a></li>");
	document.write("</ol>");
}


function reservations(){
	var inputs = document.getElementsByTagName("input");
	if (inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "" && inputs[3].value != "" && inputs[4].value != ""){
		alert("Thank You");
	}
	else {
		alert("Please fill in required feilds.")
		
	}
}

//creates alert for each image when double clicked
function rooms(){
	var alt = document.getElementsByTagName("img")[1].alt;
	alert(alt);
	
	}