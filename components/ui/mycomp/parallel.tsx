import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"

const ParallaxSection = () => {
  return (
      <div className="bg-slate-400 w-full flex flex-col justify-center relative h-full">
        <h1 className="font-serif text-center scroll-m-20 text-5xl font-extrabold tracking-wide p-3">Ask Rivi</h1>
        <h1 className="font-serif text-center scroll-m-20 text-4xl font-extrabold p-3 text-blue-800">#AnythingTravel</h1>
        <Card className="bg-blue-400 relative w-1/2 sticky top-0 left-40 ">
            <CardContent className="flex flex-col items-center justify-center p-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold font-serif tracking-wide lg:text-5xl text-white p-20 text-center ">
                 "I have a meeting in Bandra at 2pm on Monday"
                </h1>
                <Image
                src="/goa.webp"
                alt="goatest"
                height={300}
                width={300}
                />
            </CardContent>
        </Card>
        <Card className="bg-blue-400 relative w-1/2 sticky top-0 left-40">
            <CardContent className="flex flex-col items-center justify-center p-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold font-serif tracking-wide lg:text-5xl text-white p-20 text-center ">
                 "Suggest hotels and homestays in Paris and Amsterdam"
                </h1>
                <Image
                src="/goa.webp"
                alt="goatest"
                height={300}
                width={300}
                />
            </CardContent>
        </Card>
        <Card className="bg-blue-400 relative w-1/2 sticky top-0 left-40">
            <CardContent className="flex flex-col items-center justify-center p-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold font-serif tracking-wide lg:text-5xl text-white p-20 text-center ">
                 "Suggest kids activities in London near my hotel"
                </h1>
                <Image
                src="/goa.webp"
                alt="goatest"
                height={300}
                width={300}
                />
            </CardContent>
        </Card>
        <Card className="bg-blue-400 relative w-1/2 sticky top-0 left-40">
            <CardContent className="flex flex-col items-center justify-center p-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold font-serif tracking-wide lg:text-5xl text-white p-20 text-center ">
                "Where will I get the best pizza in Naples?"
                </h1>
                <Image
                src="/goa.webp"
                alt="goatest"
                height={300}
                width={300}
                />
            </CardContent>
        </Card>
        <Card className="bg-blue-400 relative w-1/2 sticky top-0 left-40">
            <CardContent className="flex flex-col items-center justify-center p-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold font-serif tracking-wide lg:text-5xl text-white p-20 text-center ">
                "I'm thinking to go to Europe in May. Help me plan!"
                </h1>
                <Image
                src="/goa.webp"
                alt="goatest"
                height={300}
                width={300}
                />
            </CardContent>
        </Card>
      </div>
  );
};

export default ParallaxSection;