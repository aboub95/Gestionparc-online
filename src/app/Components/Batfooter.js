import Link from "next/link"

export default function(){
    return(
        <div className="">
        <div className="border-t bg-[#2c2b2b] text-white flex flex-col md:flex-row justify-center items-center h-48 gap-4 md:gap-8 py-20 ">
            <Link href="" className="hover:underline">On recrute !</Link>
            <Link href="" className="hover:underline">VE & borne de recharge</Link>
            <Link href="" className="hover:underline">FAQ</Link>
            <Link href="" className="hover:underline">Press kit</Link>
            <Link href="" className="hover:underline">Bloq</Link>
            <Link href="" className="hover:underline">Plan du site</Link> 
        </div>
    </div>
    
    )
}