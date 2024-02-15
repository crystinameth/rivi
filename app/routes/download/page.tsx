import { Button } from "@/components/ui/button";

export default function Download() {
  return (
    <div className="flex flex-col items-center ">
      <span className="text-3xl pt-40 pb-5">🙏</span>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-wide pb-2">
        We thank our 25,000+ users for planning their trips with Rivi.
      </h1>
      <p className="text-center text-lg font-sans tracking-wide pb-10">
        We are working on something exciting to improve your experience with
        Rivi and have
        <br /> temporarily paused access for any new users.
      </p>
      <div className="pb-10 flex flex-col items-center">
      <p className="pt-3 pb-3 text-lg font-sans tracking-wide">
        Perfectly personalised trips with Rivi coming up soon.
      </p>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="w-1/2 px-3 py-2 mt-1 mb-4 border-solid-4 bg-slate-200 rounded-md focus:outline-none focus:border-blue-500"
      />
      <Button variant="outline" className="bg-blue-500 text-white p-4">
        JOIN THE WAITLIST
      </Button>
      </div>
    </div>
  );
}
