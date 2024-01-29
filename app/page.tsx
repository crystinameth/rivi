import Navbar from "@/components/ui/mycomp/navbar";
import MyCaousel from "@/components/ui/mycomp/carousel";
import Prop from "@/components/ui/mycomp/prop";

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
      <Prop />
      
    </main>
  );
}
