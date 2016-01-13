alert("hi")

// Don't start running until the page fully loads
$(document).ready(function() {


 // Define my arrary
var dog = ['fast', 'nap', 'weird', 'final'];

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
 $('body').removeClass();
 $('body').addClass("fast");

}


 else if ( susiePic  == 'nap') {
 $('body').removeClass();
 $('body').addClass("nap");

}


 else if ( susiePic  == 'weird') {
 $('body').removeClass();
 $('body').addClass("weird");

}

  else if ( susiePic  == 'final') {
 $('body').removeClass();
 $('body').addClass("final");

};

});


});