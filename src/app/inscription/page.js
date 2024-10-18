import Image from "next/image";

export default function page() {
  return (
    <div>
       <div className="bg-green-500 max-md:flex-col items-center px-4  h-screen flex justify-evenly">
           <div className="max-sm:flex-col max-md:mt-14  ">
             <h1 class="text-2xl text-white font-bold  text-center mb-6">BIENVENUE</h1>
             <p class="text-xl text-white font-bold text-center mb-6">Sur votre dashboard</p>
            </div>
           <div className="bg-white h-100 p-6 rounded-lg shadow-md w-full max-w-md">
             <form>
               <input type="email" placeholder="Email" required class="border border-gray-300 p-2 rounded w-full mb-4"/>
                <input type="password" placeholder="Mot de passe" required class="border border-gray-300 p-2 rounded w-full mb-4"/>
               <button type="submit" class="bg-green-500 text-white w-1/2 p-2 rounded-3xl ml-20 hover:bg-green-600">Connexion</button>
               </ form>
         </div>
       </div>
    </div>
  );
}
