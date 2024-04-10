import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import Navbar from '../Navbar';

function Login() {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const responseGoogle = (response) => {
      console.log(response);
      // Here, you can send the `response` object to your server for further authentication and authorization
  };

    const handleGoogleSignIn = async () => {
      try {
          // Make a POST request to your server endpoint for Google authentication
          const response = await axios.post('http://localhost:3000/api/google-authentication');

          // Handle success response, e.g., redirect to Google authentication page
          console.log('Google authentication response:', response.data);
      } catch (error) {
          // Handle error
          console.error('Error during Google authentication:', error);
      }
  };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
       
          email,
          password,
        });
        
        // Handle success response
        console.log('Response:', response.data);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    };
  return (
    <div>
<Navbar />
<section class="py-4 md:py-8 dark:bg-gray-800">

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
 
  <div
    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>





      <form id="connect-google-button" onSubmit={handleGoogleSignIn} method="POST" action="">
                                <button className="w-full inline-flex items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="submit">
                               
      <GoogleLogin
                                clientId="850516566993-compute@developer.gserviceaccount.com"
                                buttonText="Sign in with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                                    
                                </button>
                            </form>


      <div class="flex items-center">
        <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
        <div class="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
        <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      </div>

      <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" method="POST" action="/auth/login/">

        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email"
           name="login" 
           id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800" />
            </div>
            <div class="ml-3 text-sm">
              <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
            </div>
          </div>
          <a href="" class="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500">Forgot password?</a>
        </div>

        <button type="submit" class="text-white bg-teal-600 py-1.5 px-4 rounded font-bold w-full">
  Sign in
</button>



        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a href="/SignUp"
            class="font-medium text-teal-600 hover:underline dark:text-teal-500">Sign up</a>
        </p>
      </form>


    </div>
  </div>
</div>

</section>
    </div>
  )
}

export default Login