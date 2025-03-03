import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <>
        
         <hr className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' />
         <div className="mx-auto flex max-w-7xl items-center justify-between pb-6 lg:px-8">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div>
                    <p className='text-[#190445] text-[16px] text-[600] mb-2.5'>JobQuest</p>
                    <p className='text-[#190445b3] text-[16px] text-[400] leading-6'>Manage your job search in one place—log applications, check their status, and get reminders for interviews. Simplify your career journey today!
                    </p>
                    <FontAwesomeIcon icon={faFacebookF} size="xl" />
                    <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                    <FontAwesomeIcon icon={faInstagram} size="xl" />
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                    <FontAwesomeIcon icon={faYoutube} size="xl" />
                </div>
                <div>
                    <h4 className='text-[#190445] text-[16px] text-[600] mb-2.5'>Quick Links</h4>
                    <ul className='text-[#190445b3] text-[16px] text-[400] leading-6'>
                        {/* <li> <Link className='no-underline' href="#home">home</Link></li> */}
                        <li><a className='no-underline' href="#home">Home</a> </li>
                        <li><a className='no-underline' href="#home">Profile</a></li>
                        <li> <a className='no-underline' href="#team">contact</a></li>
                        <li> <a className='no-underline' href="#achieve">Document</a></li>
                        <li> <a className='no-underline' href="#contact">Job tracker</a></li>
                    </ul>
                </div>
                <div >
                    <p className='text-[#190445] text-[16px] text-[600] mb-2.5'>Product</p>
                    <ul className='text-[#190445b3] text-[16px] text-[400] leading-6'>
                        <li> <a className='no-underline' href="#home">Skill tracker</a></li>
                        <li><a className='no-underline' href="#home">Task scheduler</a></li>
                        <li> <a className='no-underline'  href="#team">Profile</a></li>
                        <li> <a className='no-underline'  href="#achieve">Contacts</a></li>
                        <li> <a className='no-underline'href="#contact">FAQS</a></li>
                    </ul>
                </div>
                <div>  
                    <p className='text-[#190445] text-[16px] text-[600] mb-2.5'>Contact us</p>
                    <div className='text-[#190445b3] text-[16px] text-[400] leading-6'>
                        <p>DO you have any queries of suggestions?</p>
                        <p>jobquestinfo@gmail.com</p>
                   
                        <p>If you need support? Just give us</p>
                        <p>+55 111 222 333 44</p>
                    </div>
                </div>
            </div>

        </div>
        </>
       
    )
}
export default Footer;