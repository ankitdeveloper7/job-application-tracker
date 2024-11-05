import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../API_URL";


export default function Signin() {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[user, getExit] = useState("");

  const onPress = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post(`${API_URL}/signin`, {
          username:username,
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
      setUsername(" ");
      setPassword(" ");
      alert("you have successfully signin")
    }catch(err){
      console.log("some error has occured!",err);
      alert("failed to singin")
    }
  }

  if(user){
    return(
      <>
      {window.open("/tracker")}
      </>
    )
  }
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={((e)=>{
                      setUsername(e.target.value)
                    })}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="/tracker" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={((e)=>{
                      setPassword(e.target.value)
                    })}
                  />
                </div>
              </div>
  
              <div>
                <button
                type="button"
                onClick={onPress}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                 
                >
                  Sign in
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
            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have account?{' '}
              <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" >
               Sign up
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  