// import React from 'react';

// function Login() {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             {/* Login button */}
//             <button onClick={() => document.getElementById('loginModal').style.display='block'} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mr-4">Login</button>
//             {/* Sign up button */}
//             <button onClick={() => document.getElementById('signupModal').style.display='block'} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Sign Up</button>

//             {/* Login Modal */}
//             <div id="loginModal" className="modal hidden fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
//                 {/* Login form content here */}
//                 <form className="modal-content bg-white w-96 rounded-lg shadow-md p-8">
//                     <div className="imgcontainer">
//                         <span onClick={() => document.getElementById('loginModal').style.display='none'} className="close">&times;</span>
//                         <img src="img_avatar2.png" alt="Avatar" className="avatar" />
//                     </div>

//                     <div className="container">
//                         <label htmlFor="uname" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
//                         <input type="text" placeholder="Enter Username" name="uname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />

//                         <label htmlFor="psw" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                         <input type="password" placeholder="Enter Password" name="psw" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />

//                         <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full">Login</button>
//                         <label>
//                             <input type="checkbox" checked="checked" name="remember" className="mr-1" /> Remember me
//                         </label>
//                     </div>

//                     <div className="container bg-gray-100 p-4 rounded-lg mt-4">
//                         <button type="button" onClick={() => document.getElementById('loginModal').style.display='none'} className="cancelbtn bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full">Cancel</button>
//                         <span className="psw text-sm ml-4">Forgot <a href="#" className="text-blue-500">password?</a></span>
//                     </div>
//                 </form>
//             </div>

//             {/* Sign Up Modal */}
//             <div id="signupModal" className="modal hidden fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
//                 {/* Sign up form content here */}
//                 <form className="modal-content bg-white w-96 rounded-lg shadow-md p-8">
//                     <div className="imgcontainer">
//                         <span onClick={() => document.getElementById('signupModal').style.display='none'} className="close">&times;</span>
//                         <img src="img_avatar2.png" alt="Avatar" className="avatar" />
//                     </div>

//                     <div className="container">
//                         <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//                         <input type="text" placeholder="Enter Name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />

//                         <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
//                         <input type="text" placeholder="Enter Phone Number" name="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />
//                         <button type="button" onClick={sendOTP} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Send OTP</button>

//                         <label htmlFor="aadhar" className="block text-gray-700 text-sm font-bold mb-2">Aadhar Number</label>
//                         <input type="text" placeholder="Enter Aadhar Number" name="aadhar" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />

//                         <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
//                         <input type="text" placeholder="Enter Address" name="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />

//                         <label htmlFor="uname" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
//                         <input type="text" placeholder="Enter Username" name="uname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />

//                         <label htmlFor="psw" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
//                         <input type="password" placeholder="Enter Password" name="psw" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />

//                         <label htmlFor="psw-repeat" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
//                         <input type="password" placeholder="Confirm Password" name="psw-repeat" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb -4" required />

// <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">OTP</label>
// <input type="text" placeholder="Enter OTP" name="otp" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />

// <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full">Sign Up</button>
// </div>
// </form>
// </div>
// </div>
// );
// }

// export default Login;
