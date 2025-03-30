import React, { useEffect } from 'react';
import Documentbox from '../../../components/Documentbox';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../store/atom';

export default function Profile() {
  
 const userdata=[
  {
    _id:1,
    title:"offer letter of microsoft",
    description:"this is offer letter of microsoft"
  },
  {
    _id:2,
    title:"offer letter of google",
    description:"this is offer letter of google"
  },
  {
    _id:3,
    title:"offer letter of amazon",
    description:"this is offer letter of amazon"
  },
  {
    _id:4,
    title:"offer letter of apple",
    description:"this is offer letter of apple"
  }

 ];

 const user = useRecoilValue(userAtom);
  
  return (
    <>
    {/* {userdata.map((item)=>(
   <Documentbox id={item._id} title={item.title} description={item.description} />
    ))} */}

    <p>this is user detils :- {user}</p>
    </>
    
  )
}
