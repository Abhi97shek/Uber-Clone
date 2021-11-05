import Head from 'next/head'
import tw from "tailwind-styled-components";
import Map from '../components/Map';
import Link from 'next/link';
export default function Home() {
  return (
        <Wrapper>
          <Head>
          <title>Book an Uber ride using your web browser on your desktop or phone</title>
          <link href="https://d3i4yxtzktqr9n.cloudfront.net/hulk/17677bc2cadb48697a3d2da2efc65d8c.ico" rel="icon" />
          </Head>
          <Map />
          <ActionItems>
            <Header>
              <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
              <Profile>
                <Name>Abhishek</Name>
                <UserImage src="https://lh3.googleusercontent.com/a-/AOh14GjTwGo_KZBZ-zO9k4mkXjqeH8gxocmK9HO78BUYDQ=s288-p-rw-no" /> 
              </Profile> 
            </Header>
            <ActionButtons>
              <Link href="/search">
                 <ActionButton>
                    <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                      Ride
                 </ActionButton>
              </Link>   
                 <ActionButton >
                 <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
                    Wheel
                  </ActionButton>
                  <ActionButton>
                    <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
                   Reserve
                  </ActionButton> 

            </ActionButtons>
            <InputButton>
                  Where to?
            </InputButton>
          </ActionItems>
        </Wrapper>
      

  )
};
const Wrapper = tw.div`


  flex
  flex-col
  h-screen
`;
const ActionItems = tw.div`

flex-1
p-4

`;


const Header =tw.div`
flex
justify-between
items-center
`;

const UberLogo = tw.img`
  h-28
 
`;


const Profile =tw.div`
  flex items-center

`;

const Name = tw.div`
  mr-4 w-20 text-sm
`;

const UserImage =tw.img`
    w-12
    h-12
    rounded-full
    border-red-200
    p-px
`;

const ActionButtons = tw.div`
  flex
  
`;


const ActionButton = tw.div`
bg-gray-200
  flex-1
  m-1
  h-32
  flex
  items-center
  justify-center
  flex-col
  rounded-lg
  tranform hover:scale-105 transition text-xl
  cursor-pointer
 
`;

const ActionButtonImage  = tw.img`
h-3/5
`;


const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 rounded-lg flex items-center mt-6
`;