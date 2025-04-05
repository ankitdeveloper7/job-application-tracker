import React, { useEffect, useState } from 'react';
import Documentbox from '../../../components/Documentbox';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../store/atom';
import Contactbox from '../../../components/Contactbox';

export default function Profile() {
const[contactdec, setContactdec] = useState(
  [
    {
      id:1,
      name:"google",
      jobtitle:"software engineer",
    companies:"Google"   
   },
   {
    id:2,
    name:"google2",
    jobtitle:"software engineer",
  companies:"Google"   
 },
 {
  id:3,
  name:"google3",
  jobtitle:"software engineer",
companies:"Google"   
},
{
  id:4,
  name:"googl4",
  jobtitle:"software engineer",
companies:"Google"   
},
{
  id:5,
  name:"google5",
  jobtitle:"software engineer",
companies:"Google"   
},
{
  id:6,
  name:"google6",
  jobtitle:"software engineer",
companies:"Google"   
}
  ]
);


function handlecontactdel(id){
 setContactdec(prevNotes => prevNotes.filter(item => item.id !== id));
}
  
  return (
    <>
    {contactdec.map((item)=>(
<Contactbox id={item.id} name={item.name} jobtitle={item.jobtitle} companies={item.companies} ondeleteContact={() =>handlecontactdel(item.id)}
 />    ))}
    </>
    
  )
}
