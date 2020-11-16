$(document).ready(function () {
    

    // the three maps 
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

  // About the city section - 
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
        // 
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3645, lng: 18.0333 },
  });
        // 
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3398, lng: 18.0734 },
  });
        // Fotografiska 
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3178, lng: 18.0859 },
  });
      $(".culture").fadeIn("2000").css("display", "block");
      $(".parks").css("display", "none");
      $(".leisure").css("display", "none");
  });

    $("#parks").click(function(){
        // Humlegården
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3263, lng: 18.1132},
  });
        // Djurgården
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3263, lng: 18.1132 },
  });
        // Hagaparken
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3645, lng: 18.0333 },
  });
      $(".culture").css("display", "none");
      $(".parks").fadeIn(2000).css("display", "block");
      $(".leisure").css("display", "none");
  });
    $("#leisure").click(function(){
        // Drottningatan
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3326, lng: 18.0626 },
  });
        // Sturegallerian
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3361, lng: 18.0734 },
  });
        // Mall of Scandinavia
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3692, lng: 18.0054 },
  });
      $(".culture").css("display", "none");
      $(".parks").css("display", "none");
      $(".leisure").fadeIn(2000).css("display", "block");
  });

    // Where to eat section - 
     $("#breakfast").click(function(){
        // Sthlm Brunch Club
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.339307, lng: 18.048357 },
  });
        // The Greasy Spoon
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.344323, lng: 18.052785 },
  });
        //  
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3270, lng: 18.1037 },
  });
      $(".breakfast").fadeIn(2000).css("display", "block");
      $(".lunch").css("display", "none");
      $(".cafes").css("display", "none");
      $(".dinner").css("display", "none");
  });
      $("#lunch").click(function(){
        // Wärdshuset Ulla Winbladh
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat:59.328081, lng: 18.099776 },
  });
        // Bastard Burger
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.318625, lng: 18.069937 },
  });
        // Supper 
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3270, lng: 18.1037 },
  });
      $(".breakfast").css("display", "none");
      $(".lunch").fadeIn(2000).css("display", "block");
      $(".cafes").css("display", "none");
      $(".dinner").css("display", "none");
  });
      $("#cafes").click(function(){
        // 
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3645, lng: 18.0333 },
  });
        //
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3398, lng: 18.0734 },
  });
        // Bröd & Salt
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3270, lng: 18.1037 },
  });
      $(".breakfast").css("display", "none");
      $(".lunch").css("display", "none");
      $(".cafes").fadeIn(2000).css("display", "block");
      $(".dinner").css("display", "none");
  });
      $("#dinner").click(function(){
        //  Boquerian 
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3347, lng: 18.0686 },
  });
        // 
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3398, lng: 18.0734 },
  });
        // Bistroteket
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3135, lng: 18.0846 },
  });
      $(".breakfast").css("display", "none");
      $(".lunch").css("display", "none");
      $(".cafes").css("display", "none");
      $(".dinner").fadeIn(2000).css("display", "block");
  });
});