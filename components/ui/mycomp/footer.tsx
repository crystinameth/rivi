import Link from "next/link";

export default function Footer() {
  return (
    <div className="grid grid-cols-3 justify-around bg-slate-200 w-full h-max pt-10">
      <div className="mt-10 mb-10 ml-20">
        <ul>
          <Link href="/">
          <li className="hover:underline font-bold">Rivi</li>
          </Link>
          <Link href="/routes/labs">
          <li className="hover:underline">Labs</li>
          </Link>
          <li className="hover:underline">Features</li>
          <li className="hover:underline">Blog</li>
          <li className="hover:underline">Deals</li>
        </ul>
      </div>
      <div className="mt-10 mb-10 ml-20">
        <ul>
          <Link href="/routes/company">
          <li className="hover:underline font-bold">Company</li>
          </Link>
          <li className="hover:underline">About</li>
          <li className="hover:underline">Team</li>
          <li className="hover:underline">Careers</li>
          <li className="hover:underline">Contact</li>
        </ul>
      </div>
      <div className="mt-10 mb-10 ml-20">
        <ul>
          <li className="hover:underline font-bold">Terms of Service</li>
          <li className="hover:underline">Privacy Policy</li>
        </ul>
      </div>
      <div className="ml-20 border-t-[2px] border-slate-700 pb-20">
        © 2024 Rivi Ventures Pvt. Ltd.
      </div>
    </div>
  );
}
