export default function Jobsection(){
    return(
        <>
       <section id="nabbar">
        <header>
            <nav className="m-0 list-none align-bottom">
               <li className="inline px-4 align-bottom" ><span className="material-symbols-outlined align-bottom">home</span>Job Tracker 2024</li>
              <div className="absolute right-5 inline"> <li className="inline pl-12 align-bottom"> <span className="material-symbols-outlined align-bottom">dashboard</span><a className="m-2" href="#">Board</a></li>
               <li className="inline px-2 align-bottom"><span className="material-symbols-outlined align-bottom">list</span><a href="#">Activities</a></li>
               <li className="inline  px-2 align-bottom"><span className="material-symbols-outlined align-bottom">contacts</span><a href="#">Contacts</a></li>
               <li className="inline  px-2 align-bottom"><span className="material-symbols-outlined align-bottom">description</span><a href="#">Documents</a></li>
               <li className="inline  px-2 align-bottom"> <span className="material-symbols-outlined align-bottom">monitoring</span><a href="#">Metrics</a></li>
               <button><span className="material-symbols-outlined align-bottom mx-2">share</span> share</button>
               <button className="rounded-lg p-1 bg-customColor text-white mx-2">Add job</button>
               </div>
            </nav>
            {/* < hr /> */}
            
        </header>
        </section>
        </>
    )
}