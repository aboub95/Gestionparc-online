import Image from "next/image";


export default function page() {
  return (
    <div>
      <h1 className="text-center bg-red-500 font-bold text-3xl">
        Welcome to the App
        <Image src="" alt="" width={100} height={100} />
      </h1>  
    </div>
  );
}
