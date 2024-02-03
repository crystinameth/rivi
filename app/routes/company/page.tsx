import Navbar from "@/components/ui/mycomp/navbar";

export default function Company() {
    return (
        <div className="flex flex-col items-left justify-between min-h">
            <Navbar/>
            <p className="text-2xl text-gray-400 pt-60 pl-40 font-mono">
            OUR MISSION
            </p>
            <h1 className="scroll-m-20 pt-16 pb-20 pl-40 font-extrabold tracking-wide text-6xl text-blue-500">
            Building the most intelligent <br/>
            travel product in the world.
            </h1>

            <div className="bg-slate-200 w-full min-h-screen">
                <h1 className="scroll-m-20 font-bold tracking-wide text-5xl font-sans pl-40 pt-20">
                Machine learning - at the core of everything <br/>we do.
                </h1>
            </div>
        </div>
    )
}