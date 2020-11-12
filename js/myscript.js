$(document).ready(function () {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.3293, lng: 18.0686 },
    zoom: 11,
  });
  function newLocation(newLat, newLng) {
    map.setCenter({ lat: newLat, lng: newLng });
  }

  $("#sthlm").on("click", function () {
    newLocation(59.3293, 18.0686), map.setZoom(11);
    $(".sthlm").css("display", "block");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "none");
  });
  $("#vasastan").on("click", function () {
    newLocation(59.3427, 18.0386), map.setZoom(14);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "block");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "none");
  });
  $("#norrmalm").on("click", function () {
    newLocation(59.3346, 18.0605), map.setZoom(14);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "block");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "none");
  });
  $("#ostermalm").on("click", function () {
    newLocation(59.3377, 18.09), map.setZoom(14);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "block");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "none");
  });
  $("#djurgarden").on("click", function () {
    newLocation(59.3263, 18.1132), map.setZoom(14);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "block");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "none");
  });
  $("#gamlastan").on("click", function () {
    newLocation(59.3257, 18.0719), map.setZoom(15);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "block");
    $(".sodermalm").css("display", "none");
  });
  $("#sodermalm").on("click", function () {
    newLocation(59.3118, 18.0663), map.setZoom(13);
    $(".sthlm").css("display", "none");
    $(".vasastan").css("display", "none");
    $(".norrmalm").css("display", "none");
    $(".ostermalm").css("display", "none");
    $(".djurgarden").css("display", "none");
    $(".gamlastan").css("display", "none");
    $(".sodermalm").css("display", "block");
  });
});
