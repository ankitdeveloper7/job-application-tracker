import feature from "../../../public/images/1.png";
import contact from "../../../public/images/contact-checker.jpg";

export default  function Features(){
  return(
    <>
    <section className="mx-auto max-w-7xl p-3 lg:px-8 mt-[120px]">
      <center>
      <h2 className="text-base/7 font-semibold text-indigo-600">Features</h2>
      <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-heading-600 sm:text-6xl">Effortless Job Application Management</p>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-[#190445CC] sm:text-xl/8">Trackify simplifies job tracking by letting you add, update, and monitor applications in one place—no more messy spreadsheets!</p>
      </center>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
      <div className="br-white rounded border-2  p-3">
        <img src={feature} className=" w-full max-h-40" />
      <p className="font-semibold text-lg"> Job Tracking</p>
      <p className=" mt-1 max-w-lg font-medium text-[#190445CC] text-sm/6 ">Easily add and manage job applications with custom statuses.</p>
      </div>
      <div className="br-white rounded border-2 p-3">
      <img src={feature} p-2 className="p-2 w-full max-h-40" />
      <p className="font-semibold text-lg"> Document Storage</p>
      <p className=" mt-1 max-w-lg font-medium text-[#190445CC] text-sm/6 ">Save and access resumes, cover letters, and job-related documents.</p>
      </div>
      <div className="br-white rounded border-2  p-3">
      <img src={feature} p-2 className="p-2 w-full max-h-40"/>
      <p className="font-semibold text-lg">Contact Management</p>
      <p className=" mt-1 max-w-lg font-medium text-[#190445CC] text-sm/6 ">Store recruiter details and track communication history.</p>
      </div>
      <div className=" md:col-span-2 br-white rounded border-2 p-3">
      <img src={contact} p-2 className="p-2 w-full max-h-40" />
      <p className="font-semibold text-lg">Reminders & Follow-ups</p>
      <p className=" mt-1 max-w-lg font-medium text-[#190445CC] text-sm/6 ">Set reminders to follow up on job applications and interviews.</p>
      </div>
      <div className="br-white rounded border-2 p-3">
      <img src={feature} p-2 className="p-2 w-full max-h-40"/>
      <p className="font-semibold text-lg">Cloud Storage</p>
      <p className=" mt-1 max-w-lg font-medium text-[#190445CC] text-sm/6 ">Securely store documents and access them anytime, anywhere.</p>
      </div>
      <div className="br-white rounded border-2 p-3">
      <img src={feature} p-2 className="p-2 w-full max-h-40"/>
      <p className="font-semibold text-lg">Advanced Filters & Custom Tags </p>
      <p className=" mt-1 max-w-lg font-medium text-[#190445CC] text-sm/6 ">Organize and track applications with custom job statuses and filters.</p>
      </div>
      <div className=" md:col-span-2 br-white rounded border-2 p-3">
      <img src={contact} p-2 className="p-2 w-full max-h-40"/>
      <p className="font-semibold text-lg">Priority Support & Data Backup</p>
      <p className=" mt-1 max-w-lg font-medium text-[#190445CC] text-sm/6">Get dedicated support and automatic data backups for a smooth experience.</p>
      </div>
      </div>
      </section>
    </>
  )
}