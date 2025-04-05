import React, { useEffect, useState } from 'react';
import Documentoption from '../../../components/Documentoption';
import { use } from 'react';
import axios from 'axios';
import Documentbox from '../../../components/Documentbox';
import { useRecoilValue } from 'recoil';
import { deletedocAtom } from '../../store/atom';

function useDocument(n) {
  const [documentdata, setDocumentdata] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {

    const response = setInterval(() => {
      axios.get(`${API_BASE_URL}/api/document/getdocument`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }).then(res => {
        setDocumentdata(res.data);
      })
    }, n * 1000)

    axios.get(`${API_BASE_URL}/api/document/getdocument`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      setDocumentdata(res.data);
      console.log("data set succesfully")
    })


    return () => {
      clearInterval(response);
    }
  }, [])

  return documentdata;
}
export default function Document() {
  const [isModalOpen, setModal] = useState(false);
  const docdata = useDocument(3);
  const[docdetails, setDocument] = useState(docdata);
  console.log("this is document data", docdata)

  function handleDeleteNote(id){
    
  }

  function onPressD() {
    setModal(true);
  }
  function handleclickd() {
    setModal(false);
  }

  return (
    <>
      <div className=''>
        <div className='text-color2 block p-1 font-semibold text-center'>Documents</div>
        <hr className='w-full' />
        <div className='flex flex-row justify-between m-8 p-2 border-b-2'>
          <button className='p-1 rounded text-customColor bg-lightbg'>
            Add
          </button>
          <div className='last-order'>
            <button className='p-1 rounded bg-customColor text-white' onClick={onPressD}>
              +new Documents
            </button>
          </div>
        </div>

        <div className='ml-8'>
       {docdetails.map( (item) =>(
      <Documentbox id={item._id} title={item.title} description={item.description} category={item.category} ondeonDelete={() => handleDeleteNote(note.id)}/>
       ))}

        </div>

      </div>



      <Documentoption isModalOpen={isModalOpen} onClose={handleclickd} />
    </>
  )
}
