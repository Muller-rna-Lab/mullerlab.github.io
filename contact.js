
/*-------------------------------------------------------------------------------------*/
/*contact page copy details to clipboard*/
/*CBCP: ClipBoard CoPy - copy invisible input box contents to clipboard*/ 
function CBCP() {
  var copyText = document.getElementById("placehold");
  copyText.select();
  document.execCommand("copy");
  
}

function changeText1() /*change placeholder to email*/
{
 document.getElementById('placehold').value = 'f.mueller@bham.ac.uk';
}

function changeText2() /*change placeholder to full details*/
{
 document.getElementById('placehold').value = 'f.mueller@bham.ac.uk, Institute of Cancer and Genomic Sciences, College of Medical and Dental Sciences, University of Birmingham, Edgbaston, Birmingham, B15 2TT, UK';
}

function changeText3() /*revert back to placeholder*/
{
 document.getElementById('placehold').value = 'placeholder';
}

/*contact page image switch*/
function changeImage1()
{
var img = document.getElementById("chimage");
img.src="images/ferenc_details/details_email_hi.svg";
return false;
}

function changeImage2()
{
var img = document.getElementById("chimage");
img.src="images/ferenc_details/details_all_hi.svg";
return false;
}


