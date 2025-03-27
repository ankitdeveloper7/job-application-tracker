import feature from "../../../public/images/features.png";
import { MdCloudUpload } from "react-icons/md";
import { MdPushPin } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";

export default function Features() {
  return (
    <>
      <section id="feature" className="mx-auto max-w-7xl p-3 lg:pl-8 mt-[120px]">

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <div className="text-base/7 font-semibold text-indigo-600"> Features</div>
            <div className="mt-2 text-4xl font-semibold tracking-tight text-balance">A better job tracking experience</div>
            <div className="mx-auto mt-6 max-w-2xl text-[#190445CC] font-medium">Stay organized, track your progress, and never miss an opportunity with our smart job application management tools. Effortlessly manage your applications, prepare for interviews, and stay connected with recruiters—all in one place.</div>
            <div className="p-4">
              <div className="m-2">
                <p className="font-semibold inline-block"><MdCloudUpload className="inline-block text-indigo-600 pr-2" size={34} />Upload Resume to Cloud</p>
                <p className="">Securely store and manage multiple versions of your resume, making it easy to apply for different job roles.</p>
              </div>
              <div className="m-2">
                <p className="font-semibold"><MdPushPin className="inline-block text-indigo-600 pr-2" size={34} />  Track Your Job Applications</p>
                <p className="">Keep a detailed record of your job applications, including statuses, deadlines, and follow-up dates.

                </p>
              </div>
              <div className="m-2">
                <p className="font-semibold"> <IoNotifications className="inline-block text-indigo-600 pr-2" size={34} />  Get Notified Before Interviews</p>
                <p className="">Receive timely reminders before your scheduled interviews so you can prepare and never miss an opportunity.</p>
              </div>
              <div className="m-2">
                <p className="font-semibold"><FaUser  className="inline-block text-indigo-600 pr-2" size={34} /> Manage Your Profile</p>
                <p className="">Update your professional details, job preferences, and portfolio to attract the right opportunities.</p>
              </div>
              <div className="m-2">
                <p className="font-semibold"><IoMdSave className="inline-block text-indigo-600 pr-2" size={34} /> Save Recruiter Contact Details</p>
                <p className="">Store and organize recruiter contact information, making it easy to follow up and stay connected.

                </p>
              </div>
            </div>
          </div>
          <div><img src={feature} className="h-full w-full pl-4"/></div>
        </div>

      </section>
    </>
  )
}