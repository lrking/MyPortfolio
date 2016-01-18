
$(document).ready(function() {


 // Define my arrary
var dog = ['fast', 'excellent nappers', 'weird', 'really photogenic','bed movers'];

// Loop through the dog array
jQuery.each(dog, function( i, val ) {
 
// Define how attributes will apear in drop down box
 var seloption = '<option value="' + val + '">' + val +'</option>';

// Append drop down list to the select box
$( '#choosepicture' ).append(seloption);

 
});
 
var susiePic
// Upon clicking an attribute, do this function
$( '#choosepicture' ).change(function() {
susiePic = $('#choosepicture').val();
// Get user input

console.log(susiePic)


 if ( susiePic  == 'fast') {
  $('#dropdownpictures').css("background", "url(images/combo.png)");

  console.log(susiePic)

}


 else if ( susiePic  == 'excellent nappers') {
  $('#dropdownpictures').css("background", "url(images/nap2.jpg)");
  console.log(susiePic)

}


 else if ( susiePic  == 'weird') {
  $('#dropdownpictures').css("background", "url(images/tub3.png)");
  console.log(susiePic)

}

  else if ( susiePic  == 'really photogenic') {
  $('#dropdownpictures').css("background", "url(images/photogenic2.jpg)");

}
  else if ( susiePic  == 'bed movers') {
  $('#dropdownpictures').css("background", "url(images/beddoorway.jpg)");

  }
})


})