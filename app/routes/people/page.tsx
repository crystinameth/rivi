import Navbar from "@/components/ui/mycomp/navbar";
import Employee from "./people";
import Footer from "@/components/ui/mycomp/footer";

export default function People() {
  return (
    <div className="flex flex-col items-center justify-between min-h">
      <Navbar />
      <h1 className="scroll-m-20 pt-48 pb-12 font-extrabold text-center text-7xl text-blue-500">
        The human intelligence behind <br />
        our artificial intelligence.
      </h1>
      <p className="text-center text-2xl text-gray-400">
      At Rivi, we believe that people should be empowered to make better decisions that<br/>
       define the present and future of the company. With a clear vision and an eventful <br/>
       journey in front of us, we are excited to always keep hustling.
      </p>

      <Employee />
      <Footer />
    </div>
  );
}
