 $(document).ready(function () {

map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 59.3293, lng: 18.0686},
  zoom: 11
});
  function newLocation(newLat, newLng) {
    map.setCenter
    ({lat: newLat,lng: newLng,})
  }


    $("#sthlm").on("click", function () {
      newLocation(59.3293, 18.0686),
      map.setZoom(11);
       $(".sthlm").css("display" , "block");
       $(".vasastan").css("display" , "none");
       $(".norrmalm").css("display" , "none");
       $(".djurgarden").css("display" , "none");
       $(".sodermalm").css("display" , "none");
       $(".ostermalm").css("display" , "none");
       $(".gamlastan").css("display" , "none");
    });
      $("#norrmalm").on("click", function () {
      newLocation(59.3346, 18.0605),
      map.setZoom(14);
       $(".sthlm").css("display" , "none");
       $(".vasastan").css("display" , "none");
       $(".norrmalm").css("display" , "block");
       $(".djurgarden").css("display" , "none");
       $(".sodermalm").css("display" , "none");
       $(".ostermalm").css("display" , "none");
       $(".gamlastan").css("display" , "none");
    });
});