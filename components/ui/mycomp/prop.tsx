import Image from "next/image";

export default function Prop() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-extrabold tracking-wide lg:text-5xl text-black p-20 text-center">
        The smartest way to <br />
        book your next flight.
      </h1>
      <div className="flex flex-row justify-around">
        <Image src="/flight.webp" alt="flight" width={300} height={300} />
        <h3 className="text-xl tracking-wide">
          <Image
            src="/icons/airIcon.svg"
            alt="icon"
            width={200}
            height={200}
          />
          <div className="flex flex-col pt-10">
            <p className="p-5 max-w-80">
            You search for multiple 
            dates on multiple platforms 
            opening multiple tabs. 
            Pheew! 🤯
            </p>
            <p className="p-5 max-w-80">
            Finding the cheapest flight 
            is wildly complicated.
            </p>
            <p className="p-5 max-w-80">
            Let Rivi do it all for you. 🚀 
            </p>
          </div>
        </h3>
      </div>

      <div className="bg-slate-200 pb-20 mt-10">
        <h1 className="text-4xl font-extrabold tracking-wide lg:text-5xl text-black p-20 text-center ">
          28 million hotels. Rivi <br />
          will find you the one.
        </h1>
        <div className="flex flex-row justify-around">
          <h3 className="text-xl tracking-wide ">
            <Image
              src="/icons/hotel.svg"
              alt="icon"
              width={100}
              height={200}
            />
            <div className="flex flex-col pt-10">
              <p className="p-5 max-w-80">
              You try out a combination of 
              filters on many websites
              while reading through the
              reviews and comparing prices.
              Yikes! 😥
              </p>
              <p className="p-5 max-w-80">
              Booking the best 
              accommodation is absurdly 
              tricky. 
              </p>
              <p className="p-5 max-w-80">
              Let Rivi do it all for you. 👯‍♀️
              </p>
           </div>
          </h3>
          <Image src="/goa.webp" alt="flight" width={300} height={300} />
        </div>
      </div>

      <h1 className="text-4xl font-extrabold tracking-wide lg:text-5xl text-black p-20 text-center">
        Activities, eat-outs, <br />
        nightlife and <br />
        everything travel.
      </h1>
      <div className="flex flex-row justify-around">
        <Image src="/paris.webp" alt="flight" width={300} height={300} />
        <h3 className="text-xl tracking-wide ">
          <Image
            src="/icons/activity.svg"
            alt="icon"
            width={200}
            height={200}            
          />
          <div className="flex flex-col pt-10">
            <p className="p-5 max-w-80">
            Holiday packages are a thing 
            of the past.
            </p>
            <p className="p-5 max-w-80">
            Your trips should only be 
            planned your way.
            </p>
            <p className="p-5 max-w-80">
            Ask for recommendations 
            for everything from activities 
            and local experiences to 
            restaurants and nightclubs.
            </p>
            <p className="p-5 max-w-80">
            All you have to do is let Rivi 
            know what you like and get 
            set go.
            </p>
           </div>
        </h3>
      </div>
    </div>
  );
}
