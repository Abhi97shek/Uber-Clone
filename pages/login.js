import React,{useEffect} from 'react';
import {useRouter} from 'next/router'; 
import {provider,app,auth} from '../firebase';
import { signInWithPopup,onAuthStateChanged } from '@firebase/auth';
import tw from "tailwind-styled-components";
const Login = () => {

    const router =useRouter();

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                router.push('/');
                console.log(user);
            }
        })
        
    },[]);
    return (
        <Wrapper>
                <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
                <Title>Login in to access your account </Title>
                <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
                <SignInButton onClick={()=>signInWithPopup(auth,provider)}>Sign in with Google</SignInButton>
        </Wrapper>
    )
}

export default Login


const Wrapper = tw.div`
    flex
    h-screen
    flex-col
    bg-gray-200
    w-screen
    p-4
`;


const SignInButton = tw.button`
bg-black
text-white
text-center
py-4
mt-8
self-center
w-full
`;

const UberLogo = tw.img`
w-auto
h-10
object-contain
self-start
`;

const Title = tw.div`
    text-3xl
    pt-4
    text-gray-500
`;

const HeadImage = tw.img`

`;