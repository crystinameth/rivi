import Services from "./cards"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Labs(){
    return(
        <div className="flex flex-col items-left justify-between min-h">
            <p className="text-2xl text-gray-400 pt-60 pl-40 font-mono">
                Rivi Labs
            </p>
            <h1 className="scroll-m-20 pt-16 pb-20 pl-40 font-extrabold tracking-wide text-6xl text-blue-500">
                A complete Product Team.<br/>
                At your service.
            </h1>

            <div className="min-h-screen bg-slate-200">
                <h1 className="scroll-m-20 font-bold tracking-wide text-5xl font-sans text-center pt-20 pb-5">
                    What we do for Rivi, we’ll do for you.</h1>
                <p className="tracking-wide text-2xl font-sans text-center pb-10">
                    Work streams we specialize in:</p>
                <Services/>    
            </div>

            <div className=" flex flex-col items-center pb-10">
            <h1 className="scroll-m-20 font-bold tracking-wide text-5xl font-sans text-center pt-20 pb-5">
                Let’s build something magical.
            </h1>
            <p className="tracking-wide text-2xl font-sans text-center pb-10">
                Get in touch with us to make your ideas come to life.</p>
            <Button variant="outline" className="bg-slate-300">Start a project -&gt;</Button>
            </div>
            <div className="flex flex-row justify-around pb-20">
                <div>
                    <p className="text-lg font-semibold">
                    Wish to work together?</p>
                    <Link href="business@rivi.co" className="text-blue-500">business@rivi.co</Link>
                </div>
                <div>
                    <p className="text-lg font-semibold">
                    Want to say hello?</p>
                    <Link href="hello@rivi.co" className="text-blue-500">hello@rivi.co</Link>
                </div>
                <div>
                    <p className="text-lg font-semibold">
                    Want to get on Zoom?</p>
                    <Link href="business@rivi.co" className="text-blue-500">Fix up a slot</Link>
                </div>
            </div>
        </div>
    )
}