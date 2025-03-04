export default  function Features(){
  return(
    <>
    <section className="mx-auto max-w-7xl p-3 lg:px-8 mt-[120px]">
      <center>
        <p className="text-customColor">Features</p>
        <h3 className=" text-3xl sm:text-4xl text-color2 font-semibold py-2">Effortless Job Application Management</h3>
        <p className="max-w-2xl text-lg font-medium">Trackify simplifies job tracking by letting you add, update, and monitor applications in one place—no more messy spreadsheets!</p>
      </center>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
      <div className="br-white rounded border-2 px-3 pt-4">
      <p className="font-semibold text-lg"> Job Tracking</p>
      <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Easily add and manage job applications with custom statuses.</p>
      </div>
      <div className="br-white rounded border-2 px-3 pt-4">
      <p className="font-semibold text-lg"> Document Storage</p>
      <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Save and access resumes, cover letters, and job-related documents.</p>
      </div>
      <div className="br-white rounded border-2 px-3 pt-4">
      <p className="font-semibold text-lg">Contact Management</p>
      <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Store recruiter details and track communication history.</p>
      </div>
      <div className=" md:col-span-2 br-white rounded border-2 px-3 pt-4">
      <p className="font-semibold text-lg">Reminders & Follow-ups</p>
      <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Set reminders to follow up on job applications and interviews.</p>
      </div>
      <div className="br-white rounded border-2 px-3 pt-4">
      <p className="font-semibold text-lg">Cloud Storage</p>
      <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Securely store documents and access them anytime, anywhere.</p>
      </div>
      <div className="br-white rounded border-2 px-3 pt-4">
      <p className="font-semibold text-lg">Advanced Filters & Custom Tags </p>
      <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Organize and track applications with custom job statuses and filters.</p>
      </div>
      <div className=" md:col-span-2 br-white rounded border-2 px-3 pt-4">
      <p className="font-semibold text-lg">Priority Support & Data Backup</p>
      <p className=" mt-2 max-w-lg  text-sm/6 max-lg:text-center">Get dedicated support and automatic data backups for a smooth experience.</p>
      </div>
      </div>
      </section>
    </>
  )
}