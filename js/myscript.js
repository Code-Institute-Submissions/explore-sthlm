$(document).ready(function () {
    
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.3293, lng: 18.0686 },
    zoom: 11,
  });
    map2 = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: 59.3293, lng: 18.0686 },
    zoom: 11,
  });
      map3 = new google.maps.Map(document.getElementById("map3"), {
    center: { lat: 59.3293, lng: 18.0686 },
    zoom: 11,
  });
  function newLocation(newLat, newLng) {
    map.setCenter({ lat: newLat, lng: newLng });
  }

  $("#sthlm").on("click", function () {
    newLocation(59.3293, 18.0686), 
    map.setZoom(11);
    $(".sthlm").fadeIn(2000).css("display", "block");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "none");
  });
  $("#vasastan").on("click", function () {
    newLocation(59.3427, 18.0386), 
    map.setZoom(14);
    $(".sthlm").css("display", "none");
    $(".vasastan").fadeIn(2000).css("display", "block");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "none");
  });
  $("#norrmalm").on("click", function () {
    newLocation(59.3346, 18.0605), 
    map.setZoom(14);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "none");
    $(".norrmalm").fadeIn(2000).css("display", "block");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "none");
  });
  $("#ostermalm").on("click", function () {
    newLocation(59.3377, 18.09), 
    map.setZoom(14);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").fadeIn(2000).css("display", "block");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "none");
  });
  $("#djurgarden").on("click", function () {
    newLocation(59.3263, 18.1132), 
    map.setZoom(14);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").fadeIn(2000).css("display", "block");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "none");
  });
  $("#gamlastan").on("click", function () {
    newLocation(59.3257, 18.0719), 
    map.setZoom(15);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").fadeIn(2000).css("display", "block");
    $(".sodermalm").css("display", "none");
  });
  $("#sodermalm").on("click", function () {
    newLocation(59.3118, 18.0663), 
    map.setZoom(13);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").fadeIn(2000).css("display", "block");
  });

  //Things To Do Section
  $("#culture").click(function(){
      $(".culture").fadeIn("2000").css("display", "block");
      $(".parks").css("display", "none");
      $(".shopping").css("display", "none");
  });
    $("#parks").click(function(){
      $(".culture").css("display", "none");
      $(".parks").fadeIn(2000).css("display", "block");
      $(".shopping").css("display", "none");
  });
    $("#shopping").click(function(){
      $(".culture").css("display", "none");
      $(".parks").css("display", "none");
      $(".shopping").fadeIn(2000).css("display", "block");
  });
     $("#breakfast").click(function(){
      $(".breakfast").fadeIn(2000).css("display", "block");
      $(".lunch").css("display", "none");
      $(".cafes").css("display", "none");
      $(".dinner").css("display", "none");
  });
      $("#lunch").click(function(){
      $(".breakfast").css("display", "none");
      $(".lunch").fadeIn(2000).css("display", "block");
      $(".cafes").css("display", "none");
      $(".dinner").css("display", "none");
  });
      $("#cafes").click(function(){
      $(".breakfast").css("display", "none");
      $(".lunch").css("display", "none");
      $(".cafes").fadeIn(2000).css("display", "block");
      $(".dinner").css("display", "none");
  });
      $("#dinner").click(function(){
      $(".breakfast").css("display", "none");
      $(".lunch").css("display", "none");
      $(".cafes").css("display", "none");
      $(".dinner").fadeIn(2000).css("display", "block");
  });
});
