import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl';
import {useEffect} from 'react';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaS1zaGVrMSIsImEiOiJja3ZtMXgxM3E5Y2E0Mm9zNzY3bzdoOGNoIn0.nJCTvpwYecEoTnqWvURKDQ';

function Map() {
    
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [75.632072, 32.259541],
        zoom: 3
        });
        },[]);

    return (
        <Wrapper id="map">

        </Wrapper>
    )
}

export default Map



const Wrapper = tw.div`
flex-1
bg-red-400`

;
