 import Image from "next/image"
import Link from "next/link"
export default function(){
    return(
        <footer className="bg-[#2c2b2b] flex flex-col md:flex-row text-white justify-around py-12">
    <div className="w-full md:w-1/3 text-center px-4">
        <p>Suivi de flotte de véhicules et gestion de<br/>
           parc connectée avec ou sans<br/>
           géolocalisation pour les entreprises
        </p>
        <div className="flex gap-8 justify-center w-full py-8">
           <Link href=""><Image src="/Link → twitter_blanc-150x150.png.svg" alt="" width="30" height="30" /></Link> 
            <Link href=""><Image src="/Link → facebook_blanc-150x150.png.svg" alt="" width="30" height="30" /></Link>
            <Link href=""><Image src="/Link → youtube_blanc-150x150.png.svg" alt="" width="30" height="30" /></Link>
            <Link href=""><Image src="/Link → linkedin_blanc-150x150.png.svg" alt="" width="30" height="30" /></Link>
        </div>
    </div>
    <div className="bg-[#393939] py-12 px-4 md:px-20 md:w-1/3 bg-cover bg-center" style={{backgroundImage: `url(/b1d019e9c4352865d2963efac66d0c87.gif)`}}>
        <Image src="/web-automobile.com_.png.svg" alt="" width="150" height="150" />
        <p className="text-center">« SuiviDeFlotte surfe sur la <br/>
           croissance »
        </p>
    </div>
</footer>

    )
}