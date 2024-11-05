import { BrowserRouter, Routes,Router, Route, Link } from "react-router-dom";
import Profile from "./Tracker Components/Profile";
import Contacts from "./Tracker Components/Contacts";

export default function JobTracker() {
    return (
        
            <section>
                <div className="flex">
                    <nav className="w-56 bg-red list-none border-r-2">
                        <li className="m-3 text-t1">
                            <span className="material-symbols-outlined align-bottom">home</span>
                            <Link className="pl-1 align-bottom text-base font-[600]" to="/signin">Home</Link>
                        </li>
                        <li className="m-3 text-t1">
                            <span className="material-symbols-outlined align-bottom">description</span>
                            <Link className="pl-1 align-bottom text-base font-[600]" to="/signup">Resume Builder</Link>
                        </li>
                        <li className="m-3 text-t1">
                            <span className="material-symbols-outlined align-bottom">hotel_class</span>
                            <Link className="pl-1 align-bottom text-base font-[600]" to="/">AI Cover Letters</Link>
                        </li>
                        <li className="m-3 text-t1">
                            <span className="material-symbols-outlined align-bottom">apps</span>
                            <Link className="pl-1 align-bottom text-base font-[600]" to="/">Autofill Applications</Link>
                        </li>
                        <li className="m-3 text-t1">
                            <span className="material-symbols-outlined align-bottom">extension</span>
                            <Link className="pl-1 align-bottom text-base font-[600]" to="/">Chrome Extension</Link>
                        </li>
                        <hr />
                        <li className="m-3 text-t1">
                            <span className="material-symbols-outlined align-bottom">person</span>
                            <Link className="pl-1 align-bottom text-base font-[600]" to="/profile">Profile</Link>
                        </li>
                        <li className="m-3 text-t1">
                            <span className="material-symbols-outlined align-bottom">contacts</span>
                            <Link className="pl-1 align-bottom text-base font-[600]" to="/contacts">Contacts</Link>
                        </li>
                        <li className="m-3 text-t1">
                            <span className="material-symbols-outlined align-bottom">folder</span>
                            <Link className="pl-1 align-bottom text-base font-[600]" to="/">Documents</Link>
                        </li>
                        <hr />
                        <div className="flex justify-between m-3 text-t2 text-xs">
                            My Job Trackers? 
                            <button className="mr-4 border-2 p-0.5 align-center text-xs">+</button>
                        </div>
                    </nav>
                    <div className="flex-1">
                       
                    </div>
                </div>
            </section>
    );
}
