import photo1 from "../../../public/images/1.png";
import josbsave from "../../../public/images/jobsave.png";
import cloud from "../../../public/images/cloud-storage.png";
import dashboard from "../../../public/images/dashboard.jpeg";
import monitorprogress from "../../../public/images/monitorProgress.png";

export default function TrackStep() {
    return (
        <>
            <section className=" mx-auto max-w-7xl p-3 mt-4 lg:px-8">
                <center>
                <h2 className="text-base/7 font-semibold text-indigo-600">job application tracker</h2>
                    <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-heading-600 sm:text-6xl">Everything You Need to Track Your Job Search</p>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-[#190445CC] sm:text-xl/8">Trackify keeps your job search organized by managing applications, storing documents, and tracking contacts—all in one place. Stay ahead effortlessly! 🚀</p>
                    </center>
                <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3  gap-4 pt-4">
                    <div className="bg-white rounded-xl border-3 md:row-span-2 px-3 pt-3">
                        <p className="font-semibold text-lg"> Save & Track Applications</p>
                        <p className=" mt-2 max-w-lg font-medium text-[#190445CC] text-sm/6 max-lg:text-center">Manually log and manage your job applications in one place. Keep track of job titles, company details, application status, deadlines, and follow-ups effortlessly.</p>
                       <center><img src={josbsave} className="pt-[40px]" /> </center> 
                    </div>
                    <div className="bg-white rounded border-3 px-3 pt-4">
                        <p className="font-semibold text-lg" > Store Important Documents</p>
                        <p className=" mt-2 max-w-lg font-medium text-[#190445CC] text-sm/6 max-lg:text-center">Securely upload and manage your resumes, cover letters, and other job-related documents, ensuring quick access whenever needed.</p>
                         <center>
                         <img src={cloud} className="max-w-40 items-center"/>
                            </center> 
                    </div>
                    <div className="bg-white rounded border-3 md:row-span-2 px-3 pt-4">
                        <p className="font-semibold text-lg">Keep Key Job Details Handy</p>
                        <p className=" mt-2 max-w-lg font-medium text-[#190445CC] text-sm/6 max-lg:text-center">Save essential job-related information, including recruiter contact details, company notes, interview schedules, and follow-up dates—all in a structured dashboard.</p>
                        <img src={dashboard} className="pt-6" />
                    </div>
                    <div className="bg-white rounded border-3 px-3 pt-4" >
                        <p className="font-semibold text-lg"> Monitor Progress & Stay on Track</p>
                        <p className=" mt-2 max-w-lg font-medium text-[#190445CC] text-sm/6 max-lg:text-center">Get a clear overview of your job search progress, track multiple applications, and set reminders for follow-ups to stay proactive and never miss an opportunity.</p>
                       <center>  <img src={monitorprogress} className="max-w-64" /> </center>
                    </div>
                </div>
               
               <center>
              
               </center>
               
                
            </section>
        </>
    )
}