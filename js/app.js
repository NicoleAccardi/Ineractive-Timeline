$(document).foundation()

// when the page loads, hide all panels except for the one with the id 'one'
$('.page').hide();
// on click, hide the currently active panel and show the one selected
$('nav,.prev-next').on('click','a',function(e){
  // don't jump to the panel (the default action)
  e.preventDefault();
  // get the id of the selected panel
  var curr = $(this).attr('href');
  // hide all the panels
  $('.page').hide();
  // show the selected panel
  $(curr).show();
});

// create a new timeline
var tl = new TimelineMax();

// set values for each element to animate: 
// element, duration, property
tl.to( $('.Friday_Nav'), .5, { transform: 'translateY(-100%)'} )
  .to( $('.Saturday_Nav'), .5, { transform: 'translateY(-100%)'} )
  .to( $('.Sunday_Nav'), .5, { transform: 'translateY(-100%)'} );

// do not play animation right away - pause it
tl.pause();

// click on any link in the nav to play the timeline animation
$('nav a').click(function(){
  tl.play();
});

// click on the close link to reverse the timeline animation
$('.close').click(function(){
  tl.reverse();
});

