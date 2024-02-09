import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="w-full bg-blue-500 p-4 text-blue-300 fixed top-0">
        <div className="container mx-auto flex justify-between items-center space-x-24">
            <Link href="/" className="text-lg font-semibold font-sans hover:font-serif hover:text-white">RIVI</Link>

            <div className="space-x-12">
            <Link href="/routes/labs" className="font-sans hover:font-serif hover:text-white">LABS</Link>
            <a href="https://medium.com/rivi-blog" target="_blank" rel="noopener noreferrer" className="font-sans hover:font-serif hover:text-white">BLOG</a>
            <Link href="/routes/people" className="font-sans hover:font-serif hover:text-white">PEOPLE</Link>
            <Link href="/routes/company" className="font-sans hover:font-serif hover:text-white">COMPANY</Link>
            <Link href="/routes/download">
            <Button variant="outline">Get the app</Button>
            </Link>
            </div>
        </div>
    </nav>
    )
}