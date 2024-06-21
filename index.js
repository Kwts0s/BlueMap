mapboxgl.accessToken = 'pk.eyJ1Ijoia29zdGFzZ2FsbCIsImEiOiJjbHNsc2l4ODkwZGY4MmtxOWN6bHZlOXlyIn0.zhJmY7vfnaDLo-gf5X2P3g';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/kostasgall/clsn4k2s800mx01qx596u4sur',
  center: [20.155, 39.31], // starting position [lng, lat]
  zoom: 10 // starting zoom

});

map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
  })
);
///////////////////////////////////////////////////////////// BEACHES
const beaches = [
  {
    name: 'Kanoula Beach',
    img: 'img/Kanoula.jpg',
    lngLat: [20.075605,39.371323]
  },
  {
    name: 'Papanikolis Cave',
    img: 'img/papanikolis.jpg',
    lngLat: [20.217499,39.399461]
  },
  {
    name: 'Bella Vraka Beach',
    img: 'img/bella.jpg',
    lngLat: [20.235556,39.399386]
  },
  {
    name: 'Pisina Beach',
    img: 'img/pisina.jpg',
    lngLat: [20.219699,39.403726]
  },
  {
    name: 'Voutoumi Beach',
    img: 'img/voutoumi.jpg',
    lngLat: [20.227327,39.157765]
  },
  {
    name: 'Monodendri Beach',
    img: 'img/monodendri.jpg',
    lngLat: [20.151747,39.231144]
  },
  {
    name: 'Kipiadi Beach',
    img: 'img/kipiadi.jpg',
    lngLat: [20.168973,39.217528]
  },
  {
    name: 'Harami Beach',
    img: 'img/harami.jpg',
    lngLat: [20.131320,39.235916]
  },
  {
    name: 'Kavos Beach',
    img: 'img/kavos.jpg',
    lngLat: [20.118193,39.383651]
  },
  {
    name: 'Bouka Beach',
    img: 'img/mpouka.jpg',
    lngLat: [20.086849,39.433575]
  },
  {
    name: 'Notos Beach',
    img: 'img/notos.jpg',
    lngLat: [20.003840,39.448356]
  },
  {
    name: 'Arkoudilas Beach',
    img: 'img/arkoudilas.jpg',
    lngLat: [20.101000,39.366388]
  },
  {
    name: 'Marathias Beach',
    img: 'img/marathias.jpg',
    lngLat: [19.983986,39.414223]
  }
  ,

]

beaches.forEach(({ name, lngLat, img }) => {
  // create the popup
  const popup1 = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<div class='popup'><h4>${name}</h4><img src= ${img} ></div>`)
    ;

  // create DOM element for the marker
  const beach = document.createElement('div');
  beach.id = 'beach';

  // create the marker
  new mapboxgl.Marker(beach)
    .setLngLat(lngLat)
    .setPopup(popup1) // sets a popup on this marker
    .addTo(map);

})

///////////////////////////////////////////////////////////////// LANDMARKS


const landmarks = [
  {
    name: 'Lefkimmi Port',
    img: 'img/lefk.jpg',
    lngLat: [20.096971, 39.415188]
  },
  {
    name: 'Sivota',
    img: 'img/sivot.jpg',
    lngLat: [20.235937, 39.407915]
  },
  {
    name: 'Paxoi',
    img: 'img/paxos.jpg',
    lngLat: [20.188193, 39.199735]
  },
  {
    name: 'Corfu Port',
    img: 'img/corfu.jpeg',
    lngLat: [19.904866, 39.627672]
  }

]

landmarks.forEach(({ name, lngLat, img }) => {
  // create the popup
  const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML(`<div class='popup'><h4>${name}</h4><img src= ${img} ></div>`)
    ;

  // create DOM element for the marker
  const land = document.createElement('div');
  land.id = 'landmark';

  // create the marker
  new mapboxgl.Marker(land)
    .setLngLat(lngLat)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

})

///////////////////////////////////////////// WARNINGS
const warnings = [
  {
    lngLat: [20.225197,39.398572]
  },
  {
    lngLat: [20.235161,39.399938]
  },
  {
    lngLat:[20.235365,39.395879]
  },
  {
    lngLat:[20.241787,39.396721]
  },
  {
    lngLat:[20.213326,39.446123]
  },
  {
    lngLat:[20.070584,39.465040]
  }
  

]

warnings.forEach(({ lngLat }) => {

  // create DOM element for the marker
  const warn= document.createElement('div');
 warn.id = 'warning';

  // create the marker
  new mapboxgl.Marker(warn)
    .setLngLat(lngLat)
    .addTo(map);

})

///////////////////////////////////////// HQ
const hq = [
  {
    lngLat: [20.119202,39.382266]
  },
  
  

]

hq.forEach(({ lngLat }) => {

  // create DOM element for the marker
  const hQ= document.createElement('div');
 hQ.id = 'hq';

  // create the marker
  new mapboxgl.Marker(hQ)
    .setLngLat(lngLat)
    .addTo(map);

})


map.on('load', () => {
  // Add a data source containing GeoJSON data.
  map.addSource('area', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'geometry': {
        'type': 'Polygon',
        // These coordinates outline Play Area.
        'coordinates': [
          [
            [20.070584, 39.465040], //Lefkimmi Nose
            [20.124893, 39.380089], //Kavos
            [20.109444, 39.353680],
            [20.001040, 39.396607],
            [19.966192, 39.418810],
            [19.911389, 39.428536], //Agios Georgios edge
            [20.075111, 39.318628],
            [20.277801, 39.375943], //Perdika
            [20.263038, 39.390803],
            [20.240378, 39.396109],
            [20.232439, 39.410833], //Syvota Port
            [20.202141, 39.449185],
            [20.084896, 39.493841],
            [19.999065, 39.461776], //Kouspades
            [20.021038, 39.437386],
            [20.042410, 39.440634],
            [20.070584, 39.465040]   //Lefkimmi Nose
          ]
        ]
      }
    }
  });


  // Add a black outline around the polygon.
  map.addLayer({
    'id': 'PlayArea',
    'type': 'line',
    'source': 'area',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round',
      'visibility': 'none'
    },
    'paint': {

      'line-color': '#87888C',
      'line-width': 3
    }
  });
});

// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
  // If these two layers were not added to the map, abort
  if (!map.getLayer('PlayArea')) {
    return;
  }

  // Enumerate ids of the layers.
  const toggleableLayerIds = ['PlayArea'];

  // Set up the corresponding toggle button for each layer.
  for (const id of toggleableLayerIds) {
    // Skip layers that already have a button set up.
    if (document.getElementById(id)) {
      continue;
    }

    // Create a link.
    const link = document.createElement('a');
    link.id = id;
    link.href = '#';
    link.textContent = '';
    link.className = 'active';

    const navimg = document.createElement('img');
    navimg.className = 'nav-img';
    navimg.src = 'img/map.png';



    // Show or hide layer when the toggle is clicked.
    link.onclick = function (e) {
      const clickedLayer = this.id;
      e.preventDefault();
      e.stopPropagation();

      const visibility = map.getLayoutProperty(
        clickedLayer,
        'visibility'
      );

      // Toggle layer visibility by changing the layout object's visibility property.
      if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
      } else {
        this.className = 'active';
        map.setLayoutProperty(
          clickedLayer,
          'visibility',
          'visible'
        );
      }
    };

    const layers = document.getElementById('menu');
    layers.appendChild(link);
    const layer = document.getElementById(id);
    layer.appendChild(navimg);

  }
});




