import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full items-center justify-center ">
      <header className="flex flex-col sm:max-w-80 lg:max-w-xl h-full items-center justify-center text-center">
        <h1 className="text-2xl font-light ">Reliable, efficent delivery</h1>
        <h1 className="text-2xl font-bold">Powered by Technolgy</h1>
        <p className="">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </header>
      <div className="flex flex-col xl:flex-row w-full h-full bg-white gap-y-16 mt-20 xl:gap-12 justify-center items-center xl:mt-20 ">
        <div className="flex w-80 h-60 md:w-96 md:h-64 shadow-xl rounded-md border-t-4 border-t-cyanhsl shadow-gray-400 p-8 flex-col">
          <h1 className="flex text-xl font-bold text-[#4D4F62]">Supervisor</h1>
          <p className="text-[#4D4F62] pt-4">Monitors activity to identify project roadblocks</p>
          <Image src="/search.svg" width={56} height={56} alt="home" className="flex text-end object-cover self-end  " />
        </div>
        <div className="gap-y-4">
          <div className="flex w-80 h-60 md:w-96 md:h-64 shadow-xl rounded-md border-t-4 border-t-redhsl shadow-gray-400 p-8 flex-col">
            <h1 className="flex text-xl font-bold text-[#4D4F62]">Team builder</h1>
            <p className="text-[#4D4F62] pt-4">Scans our talent network to create the optimal team for your project</p>
            <Image src="/homepage.svg" width={56} height={56} alt="home" className="flex text-end object-cover self-end" />
          </div>
          <div className="flex w-80 h-60 md:w-96 md:h-64 shadow-xl rounded-md border-t-4 border-t-orangehsl mt-20 md:mt-10 shadow-gray-400 p-8 flex-col">
            <h1 className="flex text-xl font-bold text-[#4D4F62]">Karma</h1>
            <p className="text-[#4D4F62] pt-4">Regularly evaluates our talent to ensure quality</p>
            <Image src="/lamp.svg" width={56} height={56} alt="home" className="flex text-end object-cover self-end p" />
          </div>
        </div>
        <div className="flex w-80 h-60 md:w-96 md:h-64 shadow-2xl rounded-md border-t-4 border-t-bluehsl shadow-gray-400 p-8 flex-col">
          <h1 className="flex text-xl font-bold text-[#4D4F62] ">Calculator</h1>
          <p className="text-[#4D4F62] pt-4">Uses data from past projects to provide better delivery estimates</p>
          <Image src="/software.svg" width={56} height={56} alt="home" className="flex text-end object-cover self-end " />
        </div>
      </div>
    </main>
  )
}
