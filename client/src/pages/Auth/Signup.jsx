import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
// import { API_URL } from "../../API_URL";
import axios from "axios";


export default function Signup() {
  const[name,setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[user, getExit] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const onPress1 = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/register`, {
          name:name,
          email:email,
          password:password
        },{
          header:{
            "Content-Type": "application/json",
          }
        }
        
      )
      const data = response.data;
      getExit(data.token);
      localStorage.setItem("token", data.token);
    }catch(err){
      console.log("some error has occured!",err);
    }
  }

  if(user){
    return(
      <>
      {window.open("/dashboard")}
      </>
    )
  }
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create a new Account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
               <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={((e)=>{
                      setName(e.target.value)
                    })}
                  />
                </div>
              </div>
            
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={((e)=>{
                      setEmail(e.target.value)
                    })}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={((e)=>{
                      setPassword(e.target.value)
                    })}
                  />
                </div>
              </div>
  
              <div>
                <button
                 type="button"
                 onClick={onPress1}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
               
                   <center className="mt-4 mb-4">or</center>
                    <button
                  type="submit"
                  className=" mt-3 flex w-full justify-center rounded-md bg-white-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:border-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <FontAwesomeIcon icon={faGoogle} style={{color: "#34A853",}} size="xl"  /> &nbsp; Continue with Google
                </button>
                <button
                  type="submit"
                  className=" mt-3 flex w-full justify-center rounded-md bg-white-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:border-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <FontAwesomeIcon icon={faApple} size="xl" /> &nbsp; Continue with Apple
                </button>
                
                </div>
                </form>
          </div>
        </div>
      </>
    )
  }
  
