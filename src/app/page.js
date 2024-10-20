

import Batfooter from "./Components/Batfooter"
import Deuxièmesect from "./Components/Deuxièmesect"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Premieresect from "./Components/Premieresect"


export default function(){
    return(
        <>
          <Header/>
          <main className="bg-cover bg-center">
    <div className="flex flex-col items-center py-52 px-4 md:px-28">
        <h1 className="text-4xl md:text-5xl text-white text-center mt-4">
            L’application Web de la <br/> 
            <strong className="font-bold">GESTION DE PARC AUTOMOBILE</strong>
        </h1>
    </div>
</main>

          <section>
            <Premieresect/>
          </section>
          <section>
             <Deuxièmesect/>
          </section>
          <Footer/>
          <Batfooter/>
   
        </>
    )
}
























































































































































































































