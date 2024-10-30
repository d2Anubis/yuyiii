// // components/FooterSocials.js
// // import React from 'react';
// // import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

// // const FooterSocials = () => {
// //   return (
// //     <footer className="bg-white dark:bg-gray-900">
// //       <div className="mx-auto w-full max-w-screen-xl">
// //         <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          
// //           {/* Follow Us Section */}
// //           <div>
// //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
// //             <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
// //               <FaTwitter className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
// //               <FaInstagram className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
// //               <FaYoutube className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
// //               <FaLinkedin className="cursor-pointer hover:text-gray-900 dark:hover:text-white" />
// //             </div>
// //           </div>

// //           {/* Partnerships Section */}
// //           <div>
// //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Partnerships</h2>
// //             <ul className="text-gray-500 dark:text-gray-400 font-medium">
// //               <li className="mb-4">
// //                 <a href="#" className="hover:underline">Affiliate Program</a>
// //               </li>
// //               <li className="mb-4">
// //                 <a href="#" className="hover:underline">Partner with Us</a>
// //               </li>
// //               <li className="mb-4">
// //                 <a href="#" className="hover:underline">Corporate Stays</a>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Legal and Compliance Section */}
// //           <div>
// //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal and Compliance</h2>
// //             <ul className="text-gray-500 dark:text-gray-400 font-medium">
// //               <li className="mb-4">
// //                 <a href="#" className="hover:underline">Terms and Conditions</a>
// //               </li>
// //               <li className="mb-4">
// //                 <a href="#" className="hover:underline">Privacy Policy</a>
// //               </li>
// //               <li className="mb-4">
// //                 <a href="#" className="hover:underline">Cancellation Policy</a>
// //               </li>
// //               <li className="mb-4">
// //                 <a href="#" className="hover:underline">Refund Policy</a>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Resources Section */}
// //           <div>
// //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
// //             <ul className="text-gray-500 dark:text-gray-400 font-medium">
// //               <li className="mb-4">
// //                 <a href="#" className="hover:underline">Blog</a>
// //               </li>
// //               <li className="mb-4">
// //                 <a href="#" className="hover:underline">Seasonal Offers</a>
// //               </li>
// //               <li className="mb-4">
// //                 <a href="#" className="hover:underline">Experiences</a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Copyright and Social Media Icons */}
// //         <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
// //           <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
// //             © 2023 CompanyName. All Rights Reserved.
// //           </span>
// //           <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
// //             <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
// //               <FaTwitter />
// //               <span className="sr-only">Twitter page</span>
// //             </a>
// //             <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
// //               <FaInstagram />
// //               <span className="sr-only">Instagram page</span>
// //             </a>
// //             <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
// //               <FaYoutube />
// //               <span className="sr-only">YouTube channel</span>
// //             </a>
// //             <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
// //               <FaLinkedin />
// //               <span className="sr-only">LinkedIn profile</span>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default FooterSocials;

// // import React from 'react';

// // function FooterSocials() {
// //     return (
// //         <div className="flex items-end w-full min-h-screen bg-white">
// //             <footer className="w-full text-gray-700 bg-gray-100 body-font">
// //                 <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
// //                     <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
// //                         <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
// //                             <svg className="w-auto h-5 text-gray-900 fill-current" viewBox="0 0 202 69" xmlns="http://www.w3.org/2000/svg">
// //                                 <path d="M57.44.672s6.656 1.872 6.656 5.72c0 0-1.56 2.6-3.744 6.552 8.424 1.248 16.744 1.248 23.816-1.976-1.352 7.904-12.688 8.008-26.208 6.136-7.696 13.624-19.656 36.192-19.656 42.848 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C56.608 53.088 42.152 69 36.432 69c-4.472 0-8.216-5.928-8.216-10.4 0-6.552 11.752-28.08 20.28-42.952-9.984-1.664-20.176-3.64-27.976-3.848-13.936 0-16.64 3.536-17.576 6.032-.104.312-.52.52-.832.312-3.744-7.072-1.456-14.56 14.144-14.56 9.36 0 22.048 4.576 34.944 7.592C54.736 5.04 57.44.672 57.44.672zm46.124 41.08c1.144-1.456 4.264.728 3.016 2.392C100.236 53.088 85.78 69 80.06 69c-4.576 0-8.32-5.928-8.32-10.4v-.208C67.58 64.32 63.524 69 61.34 69c-4.472 0-8.944-4.992-8.944-11.856 0-10.608 15.704-33.072 24.96-33.072 4.992 0 7.384 2.392 8.528 4.576l2.6-4.576s6.656 1.976 6.656 5.824c0 0-13.312 24.336-13.312 30.056 0 .208 0 .624.52.624 4.472 0 17.888-14.352 21.216-18.824zm-40.56 18.72c2.184 0 11.752-13.312 17.368-22.048l4.16-7.488c-8.008-7.904-27.248 29.536-21.528 29.536zm57.564-38.168c-2.184 0-4.992-2.808-4.992-4.784 0-2.912 5.824-14.872 7.28-14.872 2.6 0 6.136 2.808 6.136 6.344 0 2.08-7.176 12.064-8.424 13.312zm-17.68 46.592c-4.472 0-8.216-5.928-8.216-10.4 0-6.656 16.744-34.528 16.744-34.528s6.552 1.976 6.552 5.824c0 0-13.312 24.336-13.312 30.056 0 .208.104.624.624.624 4.472 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392-6.448 8.944-20.904 24.856-26.624 24.856zM147.244.672s6.656 1.872 6.656 5.72c0 0-25.792 43.784-25.792 53.56 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C146.412 53.088 131.956 69 126.236 69c-4.472 0-8.216-5.928-8.216-10.4 0-10.4 29.224-57.928 29.224-57.928zM169.7 60.16c3.848-2.392 7.904-6.864 10.816-10.92 6.656-9.464 11.544-20.696 10.504-27.352-.312-3.432-.104-4.056 3.12-2.704 5.2 2.392 11.336 8.632 2.184 22.88-5.2 8.008-12.48 15.288-19.344 19.76-2.704 1.768-6.344 3.328-9.984 4.16-.52.416-1.04.728-1.456.936-1.872 1.352-4.264 2.08-7.592 2.08-14.664 0-16.848-12.272-16.848-16.016 0-2.392 3.224-4.68 4.784-3.744.208.104.312.416.312.624 0 2.808 1.872 13.104 9.984 13.104 7.904 0 3.432-18.304 2.288-27.144-1.456 2.288-3.432 4.992-5.616 8.32-2.6 3.744-5.72 1.456-4.784 0 5.824-8.424 9.152-13.832 11.856-18.616 1.248-2.08 3.328-3.328 6.448-3.328 2.704 0 5.824 3.016 6.864 4.784.312.52 0 1.04-.52 1.144a5.44 5.44 0 00-4.368 5.408c0 6.968 2.6 17.16 1.664 24.856l-.312 1.768z" fillRule="nonzero" />
// //                             </svg>
// //                         </a>
// //                         <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p>
// //                         <div className="mt-4">
// //                             <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
// //                                 <a className="text-gray-500 cursor-pointer hover:text-gray-700" href="#">
// //                                     {/* Icon for Facebook */}
// //                                 </a>
// //                                 <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700" href="#">
// //                                     {/* Icon for Twitter */}
// //                                 </a>
// //                                 <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700" href="#">
// //                                     {/* Icon for Instagram */}
// //                                 </a>
// //                                 <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700" href="#">
// //                                     {/* Icon for LinkedIn */}
// //                                 </a>
// //                             </span>
// //                         </div>
// //                     </div>
// //                     <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
// //                         <div className="w-full px-4 lg:w-1/4 md:w-1/2">
// //                             <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About Us</h2>
// //                             <nav className="mb-10 list-none">
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Company</a></li>
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Careers</a></li>
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Contact</a></li>
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Investors</a></li>
// //                             </nav>
// //                         </div>
// //                         <div className="w-full px-4 lg:w-1/4 md:w-1/2">
// //                             <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
// //                             <nav className="mb-10 list-none">
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Help Center</a></li>
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Safety Center</a></li>
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Community Guidelines</a></li>
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Accessibility</a></li>
// //                             </nav>
// //                         </div>
// //                         <div className="w-full px-4 lg:w-1/4 md:w-1/2">
// //                             <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Legal</h2>
// //                             <nav className="mb-10 list-none">
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Terms of Service</a></li>
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
// //                                 <li><a className="text-gray-600 hover:text-gray-800">Cookie Policy</a></li>
// //                                 <li><a className="text-gray-600 hover:text-gray-800">GDPR Compliance</a></li>
// //                             </nav>
// //                         </div>
// //                         <div className="w-full px-4 lg:w-1/4 md:w-1/2">
// //                             <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Newsletter</h2>
// //                             <div className="flex flex-wrap items-end justify-center md:justify-start">
// //                                 <div className="w-40 sm:w-auto sm:mr-4">
// //                                     <input type="email" placeholder="Your Email" className="w-full px-4 py-2 text-base text-gray-700 bg-gray-100 border border-gray-400 rounded outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200" />
// //                                 </div>
// //                                 <button className="px-8 py-2 mt-4 text-lg text-white bg-purple-500 border-0 rounded focus:outline-none hover:bg-purple-600 sm:mt-0">Subscribe</button>
// //                             </div>
// //                             <p className="mt-2 text-sm text-gray-500">Stay updated with the latest news and updates.</p>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <div className="bg-gray-200">
// //                     <div className="container px-5 py-6 mx-auto">
// //                         <p className="text-sm text-gray-500 capitalize xl:text-center">© 2023 DesignCo — All Rights Reserved.</p>
// //                     </div>
// //                 </div>
// //             </footer>
// //         </div>
// //     );
// // }

// // export default FooterSocials;

// import React from 'react';

// function FooterSocials() {
//     return (
//         <div className="flex items-end w-full min-h-screen bg-white">
//             <footer className="w-full text-gray-700 bg-gray-100 body-font">
//                 <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
//                     {/* Logo and Social Icons Section */}
//                     <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
//                         <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
//                             {/* Company Logo */}
//                             <svg className="w-auto h-5 text-gray-900 fill-current" viewBox="0 0 202 69" xmlns="http://www.w3.org/2000/svg">
//                                 {/* Placeholder for Logo SVG path */}
//                                 <path d="M57.44.672s6.656 1.872..." fillRule="nonzero" />
//                             </svg>
//                         </a>
//                         <div className="mt-4">
//                             {/* Social Media Icons */}
//                             <div className="inline-flex justify-center mt-2 sm:justify-start space-x-4">
//                                 <a href="#" className="text-gray-500 hover:text-gray-700">
//                                     {/* Placeholder for Icon (Facebook) */}
//                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
//                                 </a>
//                                 <a href="#" className="text-gray-500 hover:text-gray-700">
//                                     {/* Placeholder for Icon (Twitter) */}
//                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
//                                 </a>
//                                 <a href="#" className="text-gray-500 hover:text-gray-700">
//                                     {/* Placeholder for Icon (Instagram) */}
//                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
//                                 </a>
//                                 <a href="#" className="text-gray-500 hover:text-gray-700">
//                                     {/* Placeholder for Icon (LinkedIn) */}
//                                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="..."/></svg>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Footer Links Section */}
//                     <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
//                         <div className="w-full px-4 lg:w-1/4 md:w-1/2">
//                             <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Company</h2>
//                             <nav className="mb-10 list-none">
//                                 <li><a className="text-gray-600 hover:text-gray-800">About Us</a></li>
//                                 <li><a className="text-gray-600 hover:text-gray-800">Our Services</a></li>
//                                 <li><a className="text-gray-600 hover:text-gray-800">Our Team</a></li>
//                             </nav>
//                         </div>
//                         <div className="w-full px-4 lg:w-1/4 md:w-1/2">
//                             <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Resources</h2>
//                             <nav className="mb-10 list-none">
//                                 <li><a className="text-gray-600 hover:text-gray-800">Blog</a></li>
//                                 <li><a className="text-gray-600 hover:text-gray-800">FAQs</a></li>
//                                 <li><a className="text-gray-600 hover:text-gray-800">Case Studies</a></li>
//                             </nav>
//                         </div>
//                         <div className="w-full px-4 lg:w-1/4 md:w-1/2">
//                             <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
//                             <nav className="mb-10 list-none">
//                                 <li><a className="text-gray-600 hover:text-gray-800">Help Center</a></li>
//                                 <li><a className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
//                                 <li><a className="text-gray-600 hover:text-gray-800">Community Guidelines</a></li>
//                             </nav>
//                         </div>
//                         <div className="w-full px-4 lg:w-1/4 md:w-1/2">
//                             <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Legal</h2>
//                             <nav className="mb-10 list-none">
//                                 <li><a className="text-gray-600 hover:text-gray-800">Terms of Service</a></li>
//                                 <li><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
//                                 <li><a className="text-gray-600 hover:text-gray-800">Cookie Policy</a></li>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Footer */}
//                 <div className="bg-gray-200">
//                     <div className="container flex justify-between px-5 py-6 mx-auto">
//                         <p className="text-sm text-gray-500 capitalize">© 2023 DesignCo — All rights reserved</p>
//                         <div className="text-sm text-gray-500">
//                             {/* Optional language or region-specific links if needed */}
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }

// export default FooterSocials;

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function FooterSocials() {
    return (
        <div className="flex items-end w-full bg-white">
            <footer className="w-full text-gray-700 bg-white body-font">
                <div className="container flex flex-col flex-wrap px-5 py-6 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    {/* Logo and Social Icons Section */}
                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            {/* Company Logo */}
                            <svg className="w-auto h-5 text-gray-900 fill-current" viewBox="0 0 202 69" xmlns="http://www.w3.org/2000/svg">
                                {/* Placeholder for Logo SVG path */}
                                <path d="M57.44.672s6.656 1.872..." fillRule="nonzero" />
                            </svg>
                        </a>
                        <div className="mt-4">
                            {/* Social Media Icons */}
                            <div className="inline-flex justify-center mt-2 sm:justify-start space-x-4">
                                <a href="#" className="text-gray-500 hover:text-gray-700" aria-label="Facebook">
                                    <FaFacebookF className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-700" aria-label="Twitter">
                                    <FaTwitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-700" aria-label="Instagram">
                                    <FaInstagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-700" aria-label="LinkedIn">
                                    <FaLinkedinIn className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="flex flex-wrap flex-grow mt-2 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Partnerships</h2>
                            <nav className="mb-10 list-none">
                                <li><a className="text-gray-600 hover:text-gray-800">Affiliate Program</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Partner with Us</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Corporate Stays</a></li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Resources</h2>
                            <nav className="mb-10 list-none">
                                <li><a className="text-gray-600 hover:text-gray-800">Blog</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">FAQs</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Case Studies</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">About Us</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Our Services</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Our Team</a></li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
                            <nav className="mb-10 list-none">
                                <li><a className="text-gray-600 hover:text-gray-800">Help Center</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Community Guidelines</a></li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Legal</h2>
                            <nav className="mb-10 list-none">
                                <li><a className="text-gray-600 hover:text-gray-800">Terms of Service</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Cancellation Policy</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Refund Policy</a></li>
                                <li><a className="text-gray-600 hover:text-gray-800">Guest Code of Conduct</a></li>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="bg-white">
                    <div className="container flex justify-between px-5 py-6 mx-auto">
                        <p className="text-sm text-gray-500 capitalize">© 2024 Yuyiii — All rights reserved</p>
                        <div className="text-sm text-gray-500">
                            {/* Optional language or region-specific links if needed */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterSocials;
