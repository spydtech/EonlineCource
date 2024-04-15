
import React, { useState } from 'react';
import axios from 'axios';

import Navbar from '../Navbar';
import IMG from '../../assets/E- education logo .png'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make POST request to your backend endpoint for sign-up
      const response = await axios.post('http://localhost:3465/api/v1/user/login', {
        email,
        password,
      });
  
      // Handle successful sign-up
      console.log('Sign up successful:', response.data);
    } catch (error) {
      // Handle sign-up error
      console.error('Error signing up:', error);
    }
  };

  const handleSignUpWithGoogle = () => {
    // Redirect to your backend endpoint for Google OAuth
    window.location.href = 'www.googleapis.com';
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img src={IMG} className="w-32 mx-auto" alt="Logo" />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
               Welcome
              </h1>
              <form onSubmit={handleSubmit} className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  />
                  <h1 className='py-2 text-lg hover:underline  cursor-pointer'> Forgot Password ?<a href='/Signup' className='text-sm hover:underline text-blue-500 cursor-pointer'>Sign Up</a></h1>
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Login</span>
                  </button>
                </div>
              </form>
              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by templatana's{' '}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>{' '}
                and its{' '}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p>
              <button onClick={handleSignUpWithGoogle} className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                <div className="bg-white p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                    <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
                    <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                    <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
                  </svg>
                </div>
                <span className="ml-4">Login with Google</span>
              </button>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  export default Login
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios';
// // import { GoogleLogin } from 'react-google-login';
// import Navbar from '../Navbar';
// import { useNavigate } from 'react-router-dom'

// function Login() {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate

//   const responseGoogle = (response) => {
//     console.log(response);
//     // Here, you can send the `response` object to your server for further authentication and authorization
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       // Make a POST request to your server endpoint for Google authentication
//       const response = await axios.post(
//         "http://localhost:3000/api/google-authentication"
//       );

//       // Handle success response, e.g., redirect to Google authentication page
//       console.log("Google authentication response:", response.data);
//     } catch (error) {
//       // Handle error
//       console.error("Error during Google authentication:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3465/api/v1/employee/login', {
//         email: email,
//         password: password,
//       }).then((res) => {
//         console.log(res.data)

//         if (res.data.message === "Email not exits") {
//           alert("Email not exits");
//         } else if (res.data.message === "Login Success") {

//           navigate('/');
//         }
//         else {
//           alert("Incorrect Email or Password");
//         }
//       });

//       // Handle success response
//       console.log('Response:', response.data);
//     } catch (error) {
//       // Handle error
//       console.error('Error:', error);
//     }
//   };
//   return (
//     <div>
//       <Navbar />
//       <section class="py-4 md:py-8 dark:bg-gray-800">

//         <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

//           <div
//             class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                 Sign in to your account
//               </h1>

//               <form
//                 id="connect-google-button"
//                 onSubmit={handleGoogleSignIn}
//                 method="POST"
//                 action=""
//               >
//                 <button
//                   className="w-full inline-flex items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//                   type="submit"
//                 >
//                   <GoogleLogin
//                     clientId="850516566993-compute@developer.gserviceaccount.com"
//                     buttonText="Sign in with Google"
//                     onSuccess={responseGoogle}
//                     onFailure={responseGoogle}
//                     cookiePolicy={"single_host_origin"}
//                   />
//                 </button>
//               </form>

//               <div class="flex items-center">
//                 <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
//                 <div class="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
//                 <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
//               </div>

//               <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" method="POST" action="/auth/login/">

//                 <div>
//                   <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                   <input type="email"
//                     name="login"
//                     id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
//                 </div>
//                 <div>
//                   <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                   <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
//                 </div>
//                 <div class="flex items-center justify-between">
//                   <div class="flex items-start">
//                     <div class="flex items-center h-5">
//                       <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800" />
//                     </div>
//                     <div class="ml-3 text-sm">
//                       <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
//                     </div>
//                   </div>
//                   <a href="" class="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500"><Link to="/forgotPassword">Forgot password?</Link></a>
//                 </div>

//                 <button type="submit" class="text-white bg-teal-600 py-1.5 px-4 rounded font-bold w-full">
//                   Sign in
//                 </button>



//                 <p class="text-sm font-light text-gray-500 dark:text-gray-400">
//                   Don’t have an account yet? <a href="/SignUp"
//                     class="font-medium text-teal-600 hover:underline dark:text-teal-500">Sign up</a>
//                 </p>
//               </form>


//             </div>
//           </div>
//         </div>

//       </section>
//     </div>
//   );
// }



