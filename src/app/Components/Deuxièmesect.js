import Image from "next/image"

export default function(){
    return(
        <div className="flex flex-col md:flex-row py-12 mx-4 md:mx-44 justify-around md:gap-14 ">
    <div className="flex justify-center md:w-1/2">
        <Image className="w-52 h-full md:h-full" src="/stats-mobil.png" alt="" width={800} height={800} />
    </div>
    <div className="space-y-8 py-16 md:w-1/2">
        <h2 className="font-bold text-2xl">Data du parc & statistiques<br/>
            gestion de votre parc automobile</h2>
        <p>Tout d’abord, avoir l’application en poche, c’est avant tout
            détenir toutes les informations du parc partout avec soi
            (taille du parc, entrées et sorties du mois, désignation
            ANTAI, âge moyen du parc, répartition des contrats
            véhicules, répartition des marques…).</p>
        <p className="font-bold">En plus d’une masse importante de données, il est
            également possible d’accéder à la liste de tous les codes défaut
            des véhicules du parc.</p>
    </div>
</div>

    )
}