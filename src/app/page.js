import Image from "next/image";
import Accueil from "./Components/Accueil";

export default function page() {
  return (
    <div>
<<<<<<< HEAD
      <header
        className="h-screen w-full flex justify-around bg-cover"
        style={{ backgroundImage: `url(/flotte-automobile.jpg)` }}
      >
        <nav className="h-20 w-full bg-gray-50 flex justify-around items-center">
          <div>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </div>
          <button className="h-12 w-44 bg-green-500 text-xl font-bold text-white rounded-xl">
            Mon espace
          </button>
        </nav>
        <div className="h-80 w-96 bg-slate-500">
          <h1 className="text-5xl font-bold text-white">Nos voitures</h1>
          <p className="text-lg text-gray-500">
            Découvrez nos meilleures voitures
          </p>
        </div>
        <Accueil />
      </header>
=======
      <h1 className="text-center bg-red-500 font-bold text-3xl">
        Welcome to the App
        <Image src="" alt="" width={100} height={100} />
      </h1>
      
>>>>>>> 90590ca656ac2f3ace71a3e32c13d686e04658df
    </div>
  );
}
