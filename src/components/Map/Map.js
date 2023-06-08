import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer } from 'ol/layer';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj'
import { useEffect } from 'react';

const OpenLayerMap = (props) => {
    
    console.log("Im printing this ", props)


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
            target: "map",
            layers: [
              new TileLayer({
                source: new OSM(),
              }),
            ],
            view: new View({
              center: fromLonLat(coordinates),
              zoom: 18,
            }),
          })

        } catch (error) {
            document.getElementById('map').innerHTML = `<p>${error.message}</p>`;
          }
        };

    useEffect(()=> { 
        initializeMap()
    }, [])
        



  return (
   
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div id="map" style={{ height: '210px', width: '400px' }}></div>
    </div>
   
  )
}

export default OpenLayerMap