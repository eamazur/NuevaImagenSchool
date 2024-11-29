function initMap() {
  var uluru = {lat: 39.724737049268725, lng: -104.8122987507314};
 
  let map = new google.maps.Map(document.getElementById('map'), {
   mapId: "5ee6d11d725f82cf",
   zoom: 17, 
   disableDefaultUI: true,
   center: uluru
  });
 
  let marker = new google.maps.Marker({
   position: uluru, map: map
  });
}

initMap();