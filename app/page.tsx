import Navbar from "@/components/ui/mycomp/navbar";
import Image from "next/image";
import MyCaousel from "@/components/ui/mycomp/carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-500 w-full">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
          Meet Rivi - A friend
          <br />
          who helps you travel
        </h1>
        <p className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 justify-center text-white text-center">
          Rivi is an AI that you can have a conversation with to plan a <br />
          fully personalized trip - Flights, Accommodation,
          <br />
          Things to do, Eatouts and Nightlife.
        </p>
      </div>
      <MyCaousel />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl text-black p-20">
      The smartest way to <br />book your next flight.
      </h1>
      <div className="flex flex-row justify-around">
        <Image 
          src="/flight.webp"
          alt="flight"
          width={300}
          height={400}
          />
        <h3 className="scroll-m-20 text-xl tracking-wide p-6 ">
          <Image src="/airIcon.svg" alt="icon" width={200} height={200} p-6/>
          <br/><br />
          You search for multiple <br/>
          dates on multiple platforms <br/>
          opening multiple tabs. <br/>
          Pheew! 🤯<br />
          <br />
          Finding the cheapest flight <br />
          is wildly complicated.<br />
          <br />
          Let Rivi do it all for you. 🚀
        </h3>
      </div>

    <div className="bg-slate-300 w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl text-black p-20 text-center ">
      28 million hotels. Rivi <br/>will find you the one.
      </h1>
      <div className="flex flex-row justify-around">
        <Image 
          src="/flight.webp"
          alt="flight"
          width={300}
          height={400}
          />
        <h3 className="scroll-m-20 text-xl tracking-wide p-6 ">
          <Image src="/airIcon.svg" alt="icon" width={200} height={200} p-6/>
          <br/><br />
          You try out a combination of <br/>
          filters on many websites <br/>
          while reading through the <br/>
          reviews and comparing prices. <br/>
          Yikes! 😥<br/>
          <br />
          Booking the best <br/>
          accommodation is absurdly <br/>
          tricky. <br/>
          <br />
          Let Rivi do it all for you. 👯‍♀️
        </h3>
      </div>
    </div>
    </main>
  );
}
