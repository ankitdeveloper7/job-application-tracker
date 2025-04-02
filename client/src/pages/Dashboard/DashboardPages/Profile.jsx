import React, { useEffect } from 'react';
import Documentbox from '../../../components/Documentbox';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../store/atom';
import Contactbox from '../../../components/Contactbox';

export default function Profile() {


 const user = useRecoilValue(userAtom);
  
  return (
    <>
    {/* <Contactbox name="google" jobtitle="software engineer" companies="microsoft" />
    <Contactbox name="google" jobtitle="software engineer" companies="microsoft" />
    <Contactbox name="google" jobtitle="software engineer" companies="microsoft" />
    <Contactbox name="google" jobtitle="software engineer" companies="microsoft" />
    <Contactbox name="google" jobtitle="software engineer" companies="microsoft" /> */}
    </>
    
  )
}
