import Image from "next/image";

export default function Prop() {
  return (
    <div className="w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl text-black p-20 text-center">
        The smartest way to <br />
        book your next flight.
      </h1>
      <div className="flex flex-row justify-around">
        <Image src="/flight.webp" alt="flight" width={300} height={400} />
        <h3 className="scroll-m-20 text-xl tracking-wide p-6 ">
          <Image src="/airIcon.svg" alt="icon" width={200} height={200} p-6 />
          <br />
          <br />
          You search for multiple <br />
          dates on multiple platforms <br />
          opening multiple tabs. <br />
          Pheew! 🤯
          <br />
          <br />
          Finding the cheapest flight <br />
          is wildly complicated.
          <br />
          <br />
          Let Rivi do it all for you. 🚀<br/>
        </h3>
      </div>

      <div className="bg-slate-300">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl text-black p-20 text-center ">
          28 million hotels. Rivi <br />
          will find you the one.
        </h1>
        <div className="flex flex-row justify-around">
          <h3 className="scroll-m-20 text-xl tracking-wide ">
            <Image src="/hotel.svg" alt="icon" width={100} height={200} p-6 />
            <br />
            <br />
            You try out a combination of <br />
            filters on many websites <br />
            while reading through the <br />
            reviews and comparing prices. <br />
            Yikes! 😥
            <br />
            <br />
            Booking the best <br />
            accommodation is absurdly <br />
            tricky. <br />
            <br />
            Let Rivi do it all for you. 👯‍♀️<br/>
          </h3>
          <Image src="/goa.webp" alt="flight" width={350} height={400} />
        </div>
      </div>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl text-black p-20 text-center">
      Activities, eat-outs, <br/>
      nightlife and <br/>
      everything travel. 
      </h1>
      <div className="flex flex-row justify-around">
        <Image src="/paris.webp" alt="flight" width={300} height={400} />
        <h3 className="scroll-m-20 text-xl tracking-wide p-6 ">
          <Image src="/activity.svg" alt="icon" width={200} height={200} p-6 />
          <br />
          <br />
          Holiday packages are a thing <br/>
          of the past.
          <br />
          <br />
          Your trips should only be <br/>
          planned your way.
          <br />
          <br />
          Ask for recommendations <br/>
          for everything from activities <br/>
          and local experiences to <br/>
          restaurants and nightclubs.<br/>
          <br/>
          All you have to do is let Rivi <br/>
          know what you like and get <br/>
          set go.<br/>
        </h3>
      </div>
    </div>
  );
}
