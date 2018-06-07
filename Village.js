$( document ).ready( function(){
    $( "#menu-icon" ).on( "click", function(){
        $( "nav ul" ).toggleClass( "open" );
    } );
} );

var i = 0; // start point
var images = [];
var time = 4000;

// image list
images[0] = "url('image1.jpg')";
images[1] = "url('image2.jpg')";
images[2] = "url('image3.jpg')";
images[3] = "url('image4.jpg')";

// change image
function changeImg(){
    document.querySelector( ".sliderz" ).style.backgroundImage = images[i];

    if( i < images.length - 1 ){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout( "changeImg()", time );
}

window.onload = changeImg;


$( ".autoplay" ).slick( {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
} );
