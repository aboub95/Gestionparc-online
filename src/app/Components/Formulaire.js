import Image from "next/image";

export default function () {
  return (
    <>
    <div className="flex flex-col items-center h-full bg-cover bg-center" style={{backgroundImage: `url(/7218a1302960c48611e068302450c2a6.gif)`}}>
    <div className="flex justify-center h-20 w-20 hover:bg-stone-500 py-10 items-center rounded-full bg-[#D5D5D5]">
        <Image className="w-10 h-10" src="/camera-fill.svg" alt="" width="20" height="20" />
    </div>
    <p className="text-[#4AD991] ">Ajouter une photo</p>
    
    <form className="flex flex-col items-center mt-10 bg-white px-10  rounded-xl my-20 " method="post" id="">
        <div className="space-y-6">
            <div className="w-full max-w-xs">
                <p>Marque</p>
                <input
                    className="w-full h-12 px-4 bg-[#D5D5D5] rounded"
                    placeholder="Ecrire ici"
                />
            </div>
            
            <div className="w-full max-w-xs">
                <p>État de la voiture</p>
                <input
                    className="w-full h-12 px-10 bg-[#D5D5D5] rounded"
                    placeholder="Ecrire ici"
                />
            </div>

            <div className="w-full max-w-xs">
                <p>Modèle</p>
                <input
                    className="w-full h-12 px-4 bg-[#D5D5D5] rounded"
                    placeholder="Ecrire ici"
                />
            </div>
        </div>
       
        <div className="py-4">
            <button
                className="w-68 h-14 bg-[#4AD991] text-white rounded-xl px-10 "
                type="submit"
            >
                Ajoute la voiture
            </button>
        </div>
    </form>
</div>

    </>
  );
}
