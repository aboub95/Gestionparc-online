import Image from "next/image";


export default function page(){
    return (
        
        <>
        
        <div className="bg-red-50 flex justify-center items-center p-4  md:w-640px flex -col ">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-screen w-4xl w-full">
        <table className="w-full">
            <thead>
                <tr className="bg-blue-400 text-white">
                    <th className="py-3 px-4 text-left">Image</th>
                    <th className="py-3 px-4 text-left">Marque</th>
                    <th className="py-3 px-4 text-left">Modèle</th>
                    <th className="py-3 px-4 text-left">Date - Heure</th>
                    <th className="py-3 px-4 text-left">Année</th>
                    <th className="py-3 px-4 text-left">Statut</th>
                    <th className="py-3 px-4 text-left">Plus</th>
                </tr>
            </thead>
            
            <tbody>
                <tr className="border-b border-purple-100">
                    <td className="py-3 px-4">
                        <div className="w-100 h-100  rounded-md">
                        <Image src="/Audi.jpeg" alt="" width={100} height={100} className="w-18 h-12"/>
                        </div>
                    </td>
                    <td className="py-3 px-4">Toyota</td>
                    <td className="py-3 px-4">Hilux</td>
                    <td className="py-3 px-4">12.08.2024 - 12:43 PM</td>
                    <td className="py-3 px-4">2016</td>
                    <td className="py-3 px-4">
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Vendu</span>
                    </td>
                    <td class="py-3 px-4">
                        <button className="text-blue-500 mr-2">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d=" M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z " />
                            </svg>
                        </button>
                        <button className="text-red-500">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d=" M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z " clip-rule="evenodd" />
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr className="border-b border-purple-300">
                    <td className="py-3 px-4">
                        <div className="w-100 h-12  rounded-md">
                            <Image src="/huiday.jpeg" alt="" width={100} height={100} className="w-18 h-12"/>
                        </div>
                    </td>
                    <td class="py-3 px-4">HUNDAY</td>
                    <td class="py-3 px-4">sonata</td>
                    <td class="py-3 px-4">12.08.2024 - 12:43 PM</td>
                    <td class="py-3 px-4">2017</td>
                    <td class="py-3 px-4">
                        <span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs">Stock</span>
                    </td>
                    <td class="py-3 px-4">
                        <button class="text-blue-500 mr-2">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z " />
                            </svg>
                        </button>
                        <button class="text-red-500">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d=" M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z  " />
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr className="border-b border-purple-300" >
                    <td class="py-3 px-4  ">
                        <div class="w-24 h-12 bg-gray-200 rounded-md ">
                        <Image src="/BMW.jpeg" alt="" width={100} height={100} className="w-18 h-12" />
                        </div>
                    </td>
                    <td class="py-3 px-4">MITSUBISHI PAJERO</td>
                    <td class="py-3 px-4">  DID  </td>
                    <td class="py-3 px-4">12.08.2024 - 12:43 PM</td>
                    <td class="py-3 px-4">2016</td>
                    <td class="py-3 px-4">
                        <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Vendu</span>
                    </td>
                    <td class="py-3 px-4">
                        <button class="text-blue-500 mr-2">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d=" M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z " />
                            </svg>
                        </button>
                        <button class="text-red-500">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d=" M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z " />
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr className="border-b border-purple-300" >
                    <td class="py-3 px-4">
                        <div class="w-24 bg-gray-200 rounded-md">
                        <Image src="/Kia.jpeg" alt="" width={100} height={100} className="w-18 h-12"/>
                        </div>
                    </td>
                    <td class="py-3 px-4">RENAULT</td>
                    <td class="py-3 px-4">  CAPTUR  </td>
                    <td class="py-3 px-4">12.08.2024 - 12:43 PM</td>
                    <td class="py-3 px-4">2021</td>
                    <td class="py-3 px-4">
                        <span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs">stock</span>
                    </td>
                    <td class="py-3 px-4">
                        <button class="text-blue-500 mr-2">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d=" M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z " />
                            </svg>
                        </button>
                        <button class="text-red-500">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d=" M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z " />
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr className="border-b border-purple-300">
                    <td class="py-3 px-4">
                        <div class="w-24 h-12 bg-gray-200 rounded-md">
                        <Image src="/4d941c68-5c40-4307-a7b3-c9179d35fe2f-1024x768.jpeg.webp" alt="" width={100} height={100} className="w-18 h-12"/>
                        </div>
                    </td>
                    <td class="py-3 px-4">PORSHE</td>
                    <td class="py-3 px-4">  CAYENNE  </td>
                    <td class="py-3 px-4">12.08.2024 - 12:43 PM</td>
                    <td class="py-3 px-4">2020</td>
                    <td class="py-3 px-4">
                        <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Vendu</span>
                    </td>
                    <td class="py-3 px-4">
                        <button class="text-blue-500 mr-2">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d=" M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z " />
                            </svg>
                        </button>
                        <button class="text-red-500">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d=" M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z " />
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr className="border-b border-purple-300">
                    <td class="py-3 px-4">
                        <div class="w-24 h-12 bg-gray-200 rounded-md">
                        <Image src="/15ed9f53-62b4-4eb3-bcdf-9b661706bccf.jpeg" alt="" width={100} height={100} className="w-18 h-12"/>
                        </div>
                    </td>
                    <td class="py-3 px-4">HUMMER</td>
                    <td class="py-3 px-4">  EV SUV  </td>
                    <td class="py-3 px-4">12.08.2024 - 12:43 PM</td>
                    <td class="py-3 px-4">2021</td>
                    <td class="py-3 px-4">
                        <span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs">stock</span>
                    </td>
                    <td class="py-3 px-4">
                        <button class="text-blue-500 mr-2">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d=" M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z " />
                            </svg>
                        </button>
                        <button class="text-red-500">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d=" M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z " />
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr className="border-b border-purple-300">
                    <td class="py-3 px-4">
                        <div class="w-24 h-12 bg-gray-200 rounded-md">
                        <Image src="/a10f39fc-991c-4197-8af9-826df2469390-1024x784.jpeg.webp" alt="" width={100} height={100} className="w-18 h-12"/>
                        </div>
                    </td>
                    <td class="py-3 px-4">PEUGEO</td>
                    <td class="py-3 px-4"> HIBRIDE </td>
                    <td class="py-3 px-4">12.08.2024 - 12:43 PM</td>
                    <td class="py-3 px-4">2019</td>
                    <td class="py-3 px-4">
                        <span class="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Vendu</span>
                    </td>
                    <td class="py-3 px-4">
                        <button class="text-blue-500 mr-2">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d=" M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z " />
                            </svg>
                        </button>
                        <button class="text-red-500">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d=" M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z " />
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr className="border-b border-purple-300">
                    <td class="py-3 px-4">
                        <div class="w-24 h-12 bg-gray-200 rounded-md">
                        <Image src="/Mercedes.jpeg" alt="" width={100} height={100} className="w-18 h-12"/>
                        </div>
                    </td>
                    <td class="py-3 px-4">CITROYEN</td>
                    <td class="py-3 px-4">  C4</td>
                    <td class="py-3 px-4">12.08.2024 - 12:43 PM</td>
                    <td class="py-3 px-4">2021</td>
                    <td class="py-3 px-4">
                        <span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs">Stock</span>
                    </td>
                    <td class="py-3 px-4">
                        <button class="text-blue-500 mr-2">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d=" M7.24264 17.9967H3V13.754L14.435 2.319C14.8256 1.92848 15.4587 1.92848 15.8492 2.319L18.6777 5.14743C19.0682 5.53795 19.0682 6.17112 18.6777 6.56164L7.24264 17.9967ZM3 19.9967H21V21.9967H3V19.9967Z " />
                            </svg>
                        </button>
                        <button class="text-red-500">
                            <svg xmlns=" " class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d=" M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z " />
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
            
        </>
    );
}