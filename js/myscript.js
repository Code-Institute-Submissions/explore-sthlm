  
  
  // the three maps 
  function initMap() {
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.3293, lng: 18.0686 },
    zoom: 11,
  });
    map2 = new google.maps.Map(document.getElementById("map2"), {
    center: { lat: 59.3293, lng: 18.0686 },
    zoom: 12,
  });
      map3 = new google.maps.Map(document.getElementById("map3"), {
    center: { lat: 59.3293, lng: 18.0686 },
    zoom: 12,
  });
  }

  $(document).ready(function () {

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
    map.setZoom(13);
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
    map.setZoom(13);
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
    map.setZoom(13);
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
    map.setZoom(13);
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
    map.setZoom(14);
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
          newLocation(59.3293, 18.0686),
        map.setZoom(12);
        // Sthlm Public Library
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3434, lng: 18.0548 },
        label: { fontWeight: 'bold', fontSize: '14px', text: 'Public Library' },
    
  });
        
        // City Hall
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3275, lng: 18.0543 },
        label: { fontSize: '14px', text: 'City Hall' },
  });
        // Fotografiska 
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3178, lng: 18.0859 }, 
        label: { fontWeight: 'bold', fontSize: '14px', text: 'Fotografiska' },
  });
      $(".culture").fadeIn("2000").css("display", "block");
      $(".parks").css("display", "none");
      $(".leisure").css("display", "none");
  });

    $("#parks").click(function(){
        newLocation(59.3293, 18.0686),
        map.setZoom(11);
        // Humlegården
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3398, lng: 18.1132},
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Humlegården' },
  });
        // Djurgården
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3263, lng: 18.1132 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Djurgården' },
  });
        // Kungsträdgården
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3311, lng: 18.0716 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Kungsträdgården' },
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
        position: { lat: 59.332277, lng: 18.062996 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Drottninggatan' },
  });
        // Sturegallerian
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3361, lng: 18.0734 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Sturegallerian' },
  });
        // Gröna Lund
        new google.maps.Marker({
        map: map2,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3234, lng: 18.0964 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Gröna Lund' },
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
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Sthlm Brunch Club' },
  });
        // The Greasy Spoon
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.344323, lng: 18.052785 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Greasy Spoon' },
  });
        // Miss Clara
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3376, lng: 18.0619 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Miss Clara' },
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
        position: { lat:59.328114, lng: 18.099840 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Ulla Winbladh' },
  });
        // Bastard Burger
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.318625, lng: 18.069937 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Bastard Burger' },
  });
        // Urban Deli Södermalm
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.312511, lng: 18.082511 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Urban Deli' },
  });
      $(".breakfast").css("display", "none");
      $(".lunch").fadeIn(2000).css("display", "block");
      $(".cafes").css("display", "none");
      $(".dinner").css("display", "none");
  });
      $("#cafes").click(function(){
        // Cafe Foam
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3391, lng: 18.0840 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Cafe Foam' },
  });
        // IlCaffe
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3299, lng: 18.0431 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'IlCaffe' },
  });
        // Bröd & Salt
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.322834, lng: 18.072870 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Bröd & Salt' },
  });
      $(".breakfast").css("display", "none");
      $(".lunch").css("display", "none");
      $(".cafes").fadeIn(2000).css("display", "block");
      $(".dinner").css("display", "none");
  });
      $("#dinner").click(function(){
        // Boquerian 
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3347, lng: 18.0686 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Boquerian' },
  });
        // Trattorian
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.3265, lng: 18.0435 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Trattorian' },
  });
        // Bistroteket
        new google.maps.Marker({
        map: map3,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.313452, lng: 18.084556 },
        label: { fontWeight: 'bold', fontSize: '12px', text: 'Bistroteket' },
  });
      $(".breakfast").css("display", "none");
      $(".lunch").css("display", "none");
      $(".cafes").css("display", "none");
      $(".dinner").fadeIn(2000).css("display", "block");
  });

 
      $(".burger-menu").click(function(){
      $(".navigation-list").slideToggle(1500);
});

       
      $(".navigation-list li a").click(function(){
           if ($(window).width() <=800 ) {
          $(".navigation-list").css("display", "none");
      }
      else {
          $(".navigation-list").show();
      }
    });
});
