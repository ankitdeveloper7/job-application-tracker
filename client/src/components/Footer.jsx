import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram,faFacebookF, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div >
                <div>
                <p>JobQuest</p>
                    <p>Manage your job search in one place—log applications, check their status, and get reminders for interviews. Simplify your career journey today!
                    </p>
                    <FontAwesomeIcon  icon={faFacebookF} size="xl"/>
                    <FontAwesomeIcon icon={faLinkedinIn}  size="xl"/>
                    <FontAwesomeIcon  icon={faInstagram}  size="xl"/>
                    <FontAwesomeIcon icon={faTwitter}  size="xl"/>
                    <FontAwesomeIcon  icon={faYoutube} size="xl"/>
                </div>
                <div>
                    <h4>QUICK LINKS</h4>
                    <ul>
                   <li> <Link  href="#home">HOME</Link></li>
                   <li><Link href="#home">RESUME BUILDER</Link></li>
                   <li> <Link  href="#team">JOB TRACKER</Link></li>
                   <li> <Link  href="#achieve">CHECK ATS SCORE</Link></li>
                   <li> <Link href="#contact">CONTACT</Link></li>
                    </ul>
                </div>
                <div >
                {/* <h4 >HELP & INFO HELP</h4> */}
                <ul>
                   <li> <Link href="#home">DASHBOARD</Link></li>
                   <li><Link href="#home">TRACKER</Link></li>
                   <li> <Link className='folink' href="#team">BROWSER EXTENSION</Link></li>
                   <li> <Link className='folink'  href="#achieve">CONTACTS US</Link></li>
                   <li> <Link  className='folink' href="#contact">FAQS</Link></li>
                    </ul>
                </div>
                <div >
                <h4 >CONTACT US</h4>
                <div>  
                <p >DO you have any queries of suggestions?</p>
                <p>jobquestinfo@gmail.com</p>
                </div>
               <div>
                <p>If you need support? Just give us</p>
                <p>+55 111 222 333 44</p>
               </div>
                </div>
            </div>
            <hr />
        {/* <div>
          <div>
                <div> We ship with: 
                <FontAwesomeIcon className='socialhandle' icon={faDhl} size="xl" />
                <FontAwesomeIcon className='socialhandle' icon={faFedex} size="xl"/>
                 </div>
             </div>
          <div>
           <div>Payment options: 
           <FontAwesomeIcon className='socialhandle' icon={faCcVisa} size="xl" />
           <FontAwesomeIcon className='socialhandle' icon={faCcPaypal}  size="xl" />
           <FontAwesomeIcon className='socialhandle' icon={faCcMastercard} size="xl" />
           </div>
          </div>
          <div> */}
            <div>&copy; Copyright 2024 JOBQUEST</div>
          {/* </div>
        </div> */}
        </div>
    )
}
export default Footer;