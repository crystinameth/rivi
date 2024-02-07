export default function Footer(){
    return(
        <div className="grid grid-cols-3 justify-around bg-slate-200 w-full h-max">
            <div className="mt-10 mb-10 ml-20">
            <b>Rivi</b><br/>Labs<br/>Features<br/>Blog<br/>Deals<br/>
            </div>
            <div className="mt-10 mb-10 ml-20">
            <b>Company</b><br/>About<br/>Team<br/>Careers<br/>Contact<br/>
            </div>
            <div className="mt-10 mb-10 ml-20">
            Terms of Service<br/>Privacy Policy<br/>
            </div>
            <div className="ml-20 border-t-[2px] border-slate-700">
            © 2024 Rivi Ventures Pvt. Ltd.
            </div>
        </div>
    )
}