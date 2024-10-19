import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div
        className="bg-green-500 max-md:flex-col items-center px-4  flex justify-evenly   h-screen bg-cover bg-center  "
        style={{ backgroundImage: `url(rectangle.png)` }}
      >
        <div className="bg-blue-500  max-md:h-auto p-6 rounded-lg  h-auto lg:w-5/12 shadow-md max-md:w-full ">
          <div className="max-sm:flex-col max-md:mt-14">
            <h1 class="text-2xl text-white font-bold  text-center fade-in mb-6">
              BIENVENUE
            </h1>
          </div>
          <form id="nom">
            <input
              type="email"
              formMethod="post"
              placeholder="Email"
              required
              class="border border-gray-300 p-2 rounded w-full mb-4"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              required
              class="border border-gray-300 p-2 rounded w-full mb-4"
            />
            <button
              type="submit"
              class="bg-green-500 text-white w-1/2 p-2 rounded-3xl lg:ml- mb-2  hover:bg-green-600"
            >
              Connexion
            </button>
          </form>
          <Image src="/voiture.gif" alt="My image" width={500} height={300} />
        </div>
      </div>
    </div>
  );
}
