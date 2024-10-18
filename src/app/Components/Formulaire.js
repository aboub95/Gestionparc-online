import Image from "next/image";

export default function () {
  return (
    <>
    <div className="flex justify-center h-20 w-20 mt-12 m-auto hover:bg-stone-700  items-center   rounded-full bg-[#D5D5D5]">
        <Image className="w-10 h-10 " src="/camera-fill.svg" alt="" width="20" height="20"/>
    </div>
    <p className="flex justify-center text-[#4AD991]">Ajouter une photo</p>
      <form className="flex flex-col sm:flex-col sm:item-center justify-center ml-4 " type="module" id="">
        <div className="md:m-auto sm:flex-col justify-center   space-y-8 mt-10 ">
           
            <p className=" mt-2">Marque</p>
            <label>
              <input
                className="w-[360px] h-[52px] px-4 space-y-4 bg-[#D5D5D5] rounded"
                id=""
                placeholder="Ecrire ici "
              ></input>
            </label>
              
            <p className=" mt-2">Etat du la voiture</p>
            <label>
              <input
                className="w-[360px] h-[52px] px-4 space-y-4 bg-[#D5D5D5] rounded"
                id=""
                placeholder="Ecrire ici "
              ></input>
            </label>

            <p  className="mt-2">Modèle</p>
            <label>
              <input
                className="w-[360px] h-[52px] px-4 space-y-4  bg-[#D5D5D5] rounded"
                id=""
                placeholder="Ecrire ici "
              ></input>
            </label>
            </div>
       
        <div className="mt-12 m-auto flex justify-center" >
          <button
            className="w-[274px] h-[56px] bg-[#4AD991] text-white mb-10 rounded-xl"
            type="submit"
          >
            Ajoute la voiture
          </button>
        </div>
      </form>
    
    </>
  );
}
