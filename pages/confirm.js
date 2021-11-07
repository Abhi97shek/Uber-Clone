import React from 'react';
import { useEffect,useState } from 'react';
import tw from "tailwind-styled-components";
import { useRouter } from 'next/router';
import Map from '../components/Map';
import { RideSelector } from '../components/RideSelector';
import Link from 'next/link';
const confirm = () => {

    const router =useRouter();
    const {pickLocation,dropLocation} = router.query;



    const [pickupCoordinates,setpickupCoordinates] = useState();
    const [dropoffCoordinates,setdropoffCoordinates] = useState();

    const getPickupCoodinates =(pick)=>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pick}.json?limit=1&access_token=pk.eyJ1IjoiYWJoaS1zaGVrMSIsImEiOiJja3ZtMXgxM3E5Y2E0Mm9zNzY3bzdoOGNoIn0.nJCTvpwYecEoTnqWvURKDQ`)
        .then(response=>response.json()).
        then(data=>{
            setpickupCoordinates(data.features[0].center);    
        }   
        );
    };
    const getDropoffCoordinates = (drop)=>{

    
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${drop}.json?limit=1&access_token=pk.eyJ1IjoiYWJoaS1zaGVrMSIsImEiOiJja3ZtMXgxM3E5Y2E0Mm9zNzY3bzdoOGNoIn0.nJCTvpwYecEoTnqWvURKDQ`)
        .then(response=>response.json()).
        then(data=>{
            setdropoffCoordinates(data.features[0].center);
        }
        );

    };

    useEffect(() => {
       getPickupCoodinates(pickLocation);
       getDropoffCoordinates(dropLocation);
    }, [pickLocation,dropLocation]);
    return (
        <Wrapper>
            <ButtonContainer>
                    <Link href="/search">
                        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                    </Link>
            </ButtonContainer> 
            <Map pickUp={pickupCoordinates} dropOff={dropoffCoordinates}/>
            <RideContainer>
                <RideSelector />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                        
                </ConfirmButtonContainer>
                
            </RideContainer>
        </Wrapper>
    )
}

export default confirm;

const ButtonContainer = tw.div`
        rounded-full
        absolute
        top-4
        left-4
        z-10
        bg-white
        shadow-lg
        cursor-pointer
`;

const BackButton = tw.img`

`;

const Wrapper = tw.div`
  flex
  h-screen
  flex-col
`;

const RideContainer = tw.div`
    flex
    flex-col
    flex-1
    h-1/2
   

`;




const ConfirmButtonContainer = tw.div`
border-t-2
`;

const ConfirmButton = tw.div`
        bg-black
        text-white
        my-4 
        mx-4
        py-4
        text-center
        text-lg
        cursor-pointer
      
`;