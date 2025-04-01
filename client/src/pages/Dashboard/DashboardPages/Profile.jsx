import React, { useEffect } from 'react';
import Documentbox from '../../../components/Documentbox';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../store/atom';

export default function Profile() {


 const user = useRecoilValue(userAtom);
  
  return (
    <>
    {/* {userdata.map((item)=>(
   <Documentbox id={item._id} title={item.title} description={item.description} />
    ))} */}

    <p>this is profile section</p>
    </>
    
  )
}
