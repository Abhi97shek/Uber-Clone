import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl';
import {useEffect} from 'react';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaS1zaGVrMSIsImEiOiJja3ZtMXgxM3E5Y2E0Mm9zNzY3bzdoOGNoIn0.nJCTvpwYecEoTnqWvURKDQ';

function Map(props) {
  
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [75.632072, 32.259541],
        zoom: 3
        });
        
        if(props.pickUp)
        {
            const marker1 = new mapboxgl.Marker()
        .setLngLat([props.pickUp[0],props.pickUp[1]])
        .addTo(map);
        }
        if(props.dropOff)
        {
            const marker2 = new mapboxgl.Marker()
            .setLngLat([props.dropOff[0],props.dropOff[1]])
            .addTo(map);
        }

        if(props.pickUp && props.dropOff)
        {
            map.fitBounds([
                props.pickUp,
                props.dropOff
            ],{
                padding:60
            });
        }

      },[props.pickUp,props.dropOff]);

      const addToMap =(map)=>{
        
      };

    return (
        <Wrapper id="map">

        </Wrapper>
    )
}

export default Map



const Wrapper = tw.div`
flex-1
bg-red-400
h-1/2
`
;
