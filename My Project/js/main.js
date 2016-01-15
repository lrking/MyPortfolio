alert("hi")

$(document).ready(function() {


 // Define my arrary
var dog = ['fast', 'excellent nappers', 'weird', 'really photogenic'];

// Loop through the dog array
jQuery.each(dog, function( i, val ) {
 
// Define how attributes will apear in drop down box
 var seloption = '<option value="' + val + '">' + val +'</option>';

// Append drop down list to the select box
$( '#choosepicture' ).append(seloption);

  
});

// Upon clicking an attribute, do this function
$( '#choosepicture' ).change(function() {

// Get user input
var susiePic = $('#choosepicture').val();



 if ( susiePic  == 'fast') {
  $('#dropdownpictures').attr("id", "fast");

}


 else if ( susiePic  == 'excellent nappers') {
  $('#dropdownpictures').attr("id", "nap");

}


 else if ( susiePic  == 'weird') {
  $('#dropdownpictures').attr("id", "weird");

}

  else if ( susiePic  == 'really photogenic') {
  $('#dropdownpictures').attr("id", "final");

}

});


});