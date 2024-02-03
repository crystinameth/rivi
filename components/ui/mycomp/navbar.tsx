import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <nav className="w-full bg-blue-500 p-4 text-blue-300 fixed top-0">
        <div className="container mx-auto flex justify-between items-center space-x-24">
            <a href="#" className="text-lg font-semibold">RIVI</a>

            <div className="space-x-12">
            <a href="#" className="font-sans hover:font-serif hover:text-white">LABS</a>
            <a href="#" className="font-sans hover:font-serif hover:text-white">BLOG</a>
            <a href="./routes/people" className="font-sans hover:font-serif hover:text-white">PEOPLE</a>
            <a href="#" className="font-sans hover:font-serif hover:text-white">COMPANY</a>
            <Button variant="outline">Get the app</Button>
         </div>
        </div>
    </nav>
    )
}