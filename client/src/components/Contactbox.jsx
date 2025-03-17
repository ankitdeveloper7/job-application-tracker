import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

export default function Contactbox(props) {
    return (
        <>
            <div className='inline-block m-2 w-full max-w-80 border-2 rounded shadow-xl'>
                <div className='grid grid-cols-3 gap-2 p-2'>
                    <div>
                       <FaRegUserCircle size={80} />
                    </div>
                    <div>
                        <p className="text-[#180045] font-semibold leading-[21px]">{props.name}</p>
                        <p className="text-[#190445b3] text-sm text-400 leading-[21px]">{props.jobtitle}</p>
                        <p className="text-[#19044566] text-400 text-[13px] leading-[21px]">{props.companies}</p>
                    </div>
                    <button className='relative left-[30px]' >
                        <IoEllipsisVerticalOutline  />
                    </button>
                </div>

                <hr />
                <div className='p-2 '>
                    <p className="text-[#19044599] text-400 text-[13px] leading-[18px]"><IoLocationOutline className='inline-block' /> {props.location}</p>
                    <p className="text-[#19044599] text-400 text-[13px] leading-[18px]" ><CiMail className='inline-block' /> {props.email}</p>
                    <p className="text-[#19044599] text-400 text-[13px] leading-[18px]"><MdOutlineLocalPhone className='inline-block' /> {props.phoneno}</p>
                </div>
            </div>
        </>
    )
}
