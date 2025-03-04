import photo1 from "../../../public/images/1.png"

export default function TrackStep() {
    return (
        <>
            <section className="mx-auto max-w-7xl p-3 lg:px-8">
                <center>
                    <p>job application tracker</p>
                    <h3 className=" text-5xl sm:text-6xl text-color2 font-semibold">Everything You Need to Track Your Job Search</h3>
                    <p>Easily manage applications, store important documents, and stay ahead in your job search—all in one place.</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-row-2 gap-4 pt-4">
                    <div className="lg:row-span-2">
                        <p className="font-semibold ">1. Save & Track Applications</p>
                        <p className="text-justify">Manually log and manage your job applications in one place. Keep track of job titles, company details, application status, deadlines, and follow-ups effortlessly.</p>
                        <img src={photo1} />
                    </div>
                    <div>
                        <p className="font-semibold" >2. Store Important Documents</p>
                        <p>Securely upload and manage your resumes, cover letters, and other job-related documents, ensuring quick access whenever needed.</p>
                    </div>
                    <div>
                        <p className="font-semibold">3. Keep Key Job Details Handy</p>
                        <p>Save essential job-related information, including recruiter contact details, company notes, interview schedules, and follow-up dates—all in a structured dashboard.</p>
                        <img src={photo1} />
                    </div>
                    <div className="lg:row-span-2" >
                        <p className="font-semibold">4. Monitor Progress & Stay on Track</p>
                        <p>Get a clear overview of your job search progress, track multiple applications, and set reminders for follow-ups to stay proactive and never miss an opportunity.</p>
                        
                    </div>
                </div>
               
               
                <button className="rounded-lg p-2 mt-2 bg-customColor text-white">
                    Sign Up-It's 100% Free!
                </button>
                </center>
            </section>
        </>
    )
}