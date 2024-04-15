// coleta a localização atual
navigator.geolocation.getCurrentPosition(position => {
 
    // coleta latitude e longitude
    const { latitude, longitude } = position.coords;
 
    // imprimindo mapa
    var map = new ol.Map({
        target: 'mapa',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([latitude, longitude]),
            zoom: 6  
          })
    });
});