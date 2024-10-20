import Image from "next/image"

export default function(){
    return(
        <div className="flex flex-col md:flex-row py-12 mx-4 md:mx-44 justify-around md:gap-14">
        <div className="space-y-8 py-16 md:w-1/2">
            <h2 className="font-bold text-2xl">Votre application web pour assurer la <br/>
                gestion de votre parc automobile</h2>
            <p>GP auto est une application web destinée aux gestionnaires de parc automobile.<br/>
                Elle condense toutes les informations des concessionnaires.</p>
            <h4 className="font-bold">Le gestionnaire ou la Direction portent avec eux les <br/> données essentielles
                de leur parc automobile</h4>
        </div>
        <div className="flex justify-center md:w-1/2">
            <Image src="/liste-v-mobil.png" alt="photo" width={300} height={300} />
        </div>
    </div>
    
    )
}