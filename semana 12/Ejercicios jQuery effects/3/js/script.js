$( "a" ).click(function() {
  $( "div" ).fadeIn( 100, function() {
    $( "span" ).fadeIn( 100 );
  });
  return false;
});
