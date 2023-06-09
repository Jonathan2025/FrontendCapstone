import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import { Tile as TileLayer} from 'ol/layer'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'
import { useEffect } from 'react'

import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'

import Icon from 'ol/style/Icon'
import Style from 'ol/style/Style'


const OpenLayerMap = (props) => {
  
    const geocodeAddress = async(address, city, state, zip) =>{
        const query = `${address}, ${city}, ${state}, ${zip}`
        console.log("Query", query)
        // OpenLayer API by itself cannot directly the 4 parameters above and give a location, we need to use Openstreetmap to take the 4 parameters and 
        // then return us a latitude and longitude, that initializeMap can then use
        const url = `https://nominatim.openstreetmap.org/search/${encodeURIComponent(query)}?format=json&addressdetails=1&limit=1`
        const response = await fetch(url)
        const json = await response.json()
        // If a response is returned, return the Lat and Long Values
        if (json && json.length > 0) {
            const result = json[0]
            return [parseFloat(result.lon), parseFloat(result.lat)]
        } else {
            // if a latitude and longitude could not be generated, then an error message will be sent
            throw new Error('The address, city, state, or zip that was inputted into the form was invalid and therefore a map location could not be shown')
        }
        // otherwise return null
        return null
    }

    const initializeMap = async () => {
        try {
          const coordinates = await geocodeAddress(
            props.address,
            props.city,
            props.state,
            props.zip
          );
      
          const map = new Map({
            target: "map", // target will be the map div we created below
            layers: [ //using openStreetMaps we create a single tile later
              new TileLayer({
                source: new OSM(),
              }),
            ],
            view: new View({ // from the coordinates we create the view
              center: fromLonLat(coordinates),
              zoom: 18,
            }),
          })


          // Here we will add a deafault marker of the location,
          // 1) we apply a style to the marker with the following attributes like src and size
          const markerStyle = new Style({
            image: new Icon({
              src: 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png', // We found the default icon to use
              imgSize: [25, 41],
              anchor: [0.5, 1],
            }),
          })

          // 2) We add a geographical feature on the map using the cordinates
          const marker = new Feature({
            geometry: new Point(fromLonLat(coordinates)),
          })

          // 3) We set the style of the marker to be markerstyle
          marker.setStyle(markerStyle)

          // 4) in openLayers, vector features are points, lines etc that can be displayed on a map, 
          // vectorSource is a class responsible for storing and managing vector features
          const vectorSource = new VectorSource({
            features: [marker],
          })
          
          // 5) the vector features can be styled and displayed on a map using a VectorLayer
          const vectorLayer = new VectorLayer({
            source: vectorSource,
          })
          
          // 6) Now we add this to the map we have built earlier
          map.addLayer(vectorLayer)

        } catch (error) {
            document.getElementById('map').innerHTML = `<p>${error.message}</p>`
          }
        }

    useEffect(()=> { 
        initializeMap()
    }, [])
        



  return (
   
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div id="map" style={{ height: '300px', width: '500px' }}></div>
    </div>
   
  )
}

export default OpenLayerMap