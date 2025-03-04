import photo1 from "../../../public/images/1.png";
import josbsave from "../../../public/images/jobsave.png";

export default function TrackStep() {
    return (
        <>
            <section className=" mx-auto max-w-7xl p-3 lg:px-8">
                <center>
                    <p className="text-customColor">job application tracker</p>
                    <h3 className=" text-3xl sm:text-4xl text-color2 font-semibold py-2">Everything You Need to Track Your Job Search</h3>
                    <p className="max-w-2xl text-lg font-medium">Trackify keeps your job search organized by managing applications, storing documents, and tracking contacts—all in one place. Stay ahead effortlessly! 🚀</p>
                    </center>
                <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3  gap-4 pt-4">
                    <div className="bg-white rounded border-2 md:row-span-2 px-3 pt-3">
                        <p className="font-semibold text-lg"> Save & Track Applications</p>
                        <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Manually log and manage your job applications in one place. Keep track of job titles, company details, application status, deadlines, and follow-ups effortlessly.</p>
                        <img src={josbsave} className="pt-3" />
                    </div>
                    <div className="br-white rounded border-2 px-3 pt-4">
                        <p className="font-semibold text-lg" > Store Important Documents</p>
                        <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Securely upload and manage your resumes, cover letters, and other job-related documents, ensuring quick access whenever needed.</p>
                    </div>
                    <div className="bg-white rounded border-2 md:row-span-2 px-3 pt-4">
                        <p className="font-semibold text-lg">Keep Key Job Details Handy</p>
                        <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Save essential job-related information, including recruiter contact details, company notes, interview schedules, and follow-up dates—all in a structured dashboard.</p>
                        {/* <img src={photo1} /> */}
                    </div>
                    <div className="bg-white rounded border-2 px-3 pt-4" >
                        <p className="font-semibold text-lg"> Monitor Progress & Stay on Track</p>
                        <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Get a clear overview of your job search progress, track multiple applications, and set reminders for follow-ups to stay proactive and never miss an opportunity.</p>
                        
                    </div>
                </div>
               
               <center>
              
               </center>
               
                
            </section>
        </>
    )
}