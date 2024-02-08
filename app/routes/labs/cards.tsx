import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Services() {
  return (
    <div className="grid grid-cols-3 gap-12 p-20">
      <Card className="bg-rose-200 text-rose-900">
        <CardHeader>
          <Image src="/icons/AI.svg" alt="icon" width={50} height={50}/>
          <CardTitle className="pt-3 font-serif">Product Management</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Product Strategy</li>
            <li>Product Roadmap</li>
            <li>Agile Project Management</li>
            <li>Feature, Release Management</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-indigo-200 text-indigo-900">
        <CardHeader>
          <Image src="/icons/AI.svg" alt="icon" width={50} height={50} />
          <CardTitle className="pt-3 font-serif">Machine Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Chat AI, NLP Engines</li>
            <li>Recommendation Systems</li>
            <li>Predictive Modelling</li>
            <li>Route Optimization</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-stone-300 text-stone-900">
        <CardHeader>
          <Image src="/icons/AI.svg" alt="icon" width={50} height={50} />
          <CardTitle className="pt-3 font-serif">Backend Engineering</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>API Development</li>
            <li>Database Development</li>
            <li>Infrastructure Setup, CI/CD</li>
            <li>Cloud Cost Optimization</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-stone-300 text-stone-900">
        <CardHeader>
          <Image src="/icons/AI.svg" alt="icon" width={50} height={50} />
          <CardTitle className="pt-3 font-serif">Product Design</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>User Research</li>
            <li>User Experience Design (UX)</li>
            <li>User Interface Design (UI)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-rose-200 text-rose-900">
        <CardHeader>
          <Image src="/icons/AI.svg" alt="icon" width={50} height={50} />
          <CardTitle className="pt-3 font-serif">Web Development</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Web Application Development</li>
            <li>Internal Web Tool Development</li>
            <li>Static Website Development</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-indigo-200 text-indigo-900">
        <CardHeader>
          <Image src="/icons/AI.svg" alt="icon" width={50} height={50} />
          <CardTitle className="pt-3 font-serif">App Development</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Android App Development (Native)</li>
            <li>iOS App Development (Native)</li>
            <li>Hybrid App Development</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-indigo-200 text-indigo-900">
        <CardHeader>
          <Image src="/icons/AI.svg" alt="icon" width={50} height={50} />
          <CardTitle className="pt-3 font-serif">Product Marketing</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Customer Engagement</li>
            <li>Behavioural Analytics</li>
            <li>Facebook/Google Ads Optimization</li>
            <li>Social Media Management</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-stone-300 text-stone-900">
        <CardHeader>
          <Image src="/icons/AI.svg" alt="icon" width={50} height={50} />
          <CardTitle className="pt-3 font-serif">Content Development</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>UX Writing, Brand Messaging</li>
            <li>Website, App Content</li>
            <li>Individualization</li>
            <li>Blog Management</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-rose-200 text-rose-900">
        <CardHeader>
          <Image src="/icons/AI.svg" alt="icon" width={50} height={50} />
          <CardTitle className="pt-3 font-serif">Design and Creatives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Campaign Design</li>
            <li>Logo and Branding</li>
            <li>Product Explainer Videos/Decks</li>
          </ul>
        </CardContent>
      </Card>
      
    </div>
  );
}
