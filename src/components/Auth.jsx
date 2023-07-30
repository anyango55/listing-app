import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import {FcGoogle} from "react-icons/fc";
import {toast} from "react-toastify"; 
import { doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase';
import { getDoc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router';


export default function Auth() {
  const navigate = useNavigate()
 async function onGoogleClick(){
    try{
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      
      const user = result.user

      // check if user is in the database
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)
      
      if(!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp:serverTimestamp(),
        });
      }

      navigate("/")
          

    } catch(error) {
      toast.error("could not authorize with Google")
      console.log(error);
    }
  
  }
  return (
    <button type='button' onClick={onGoogleClick} className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'>
        <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
        Continue with Google
    </button>
  )
}
