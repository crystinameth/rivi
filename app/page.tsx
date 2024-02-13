import Navbar from "@/components/ui/mycomp/navbar";
import Footer from "@/components/ui/mycomp/footer";
import MyCaousel from "@/components/ui/mycomp/carousel";
import Prop from "@/components/ui/mycomp/prop";
import ParallaxSection from "@/components/ui/mycomp/parallel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollDemo from "@/components/ui/mycomp/scroll";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-500 w-full">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
          Meet Rivi - A friend
          <br />
          who helps you travel
        </h1>
        <p className="border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 justify-center text-white text-center">
          Rivi is an AI that you can have a conversation with to plan a <br />
          fully personalized trip - Flights, Accommodation,
          <br />
          Things to do, Eatouts and Nightlife.
        </p>
      </div>
      <MyCaousel />
      <Prop />
      <ParallaxSection />

      <div className="flex flex-col items-center justify-between bg-blue-500 w-full h-min">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white p-2 pt-10">
          Download Rivi
        </h1>
        <h3 className="text-lg font-semibold tracking-tight text-white pb-3">
          Plan your next trip with Rivi.
        </h3>
        <Link href="/routes/download" className="pb-10">
        <Button variant="outline">Get the app</Button>
        </Link>
        <Footer />
      </div>
    </main>
  );
}
