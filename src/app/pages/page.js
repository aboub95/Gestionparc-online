import Image from "next/image";
import Statistique from "../Components/statistique";
import Total from "../Components/total";
import Header from "../Components/header";               
import Liste from "../Components/liste";




export default function Page() {
  return (
    <>
      <div className="container mx-auto p-4 md:justify-center md:items-center">
        <div className=""> <Header /></div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 md:justify-center md:align-center md:items-center  gap-6"> 
          <Total />
          <Total />
          <Total />
        </div>
        <div className="mt-10"> {/* Ajout de marge au-dessus de la section statistiques */}
          <Statistique />
        </div>
        <div className="mt-10 border border-black-600 rounded-lg shadow-lg  " > 
          <Liste />
        </div>
      </div>
    </>
  );
}
