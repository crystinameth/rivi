import Image from "next/image";

export default function Info() {
  return (
    <div className="flex flex-col pb-20 pt-20">
      <div className="flex flex-row justify-between pb-10">
        <Image
          src="/icons/remote.svg"
          alt="img"
          width={500}
          height={500}
          className="pl-20 "
        />
        <h3 className="scroll-m-20 text-xl tracking-wide pl-20 pr-20 font-mono ">
          <p className="text-3xl font-sans font-extrabold tracking-wide">
            A tech first company
          </p>
          <br />
          <p className="text-justify">
            3 Internal Web Apps, 20+ Machine Learning models and 100s of other
            backend APIs power Rivi&apos;s mobile application.
          </p>
          <br />
          <br />
          Our <span className="text-blue-600">Tech Stack</span> includes:
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-justify">
            <li>
              <b>Programming languages:</b> Elixir, Python,
              Javascript (MERN), Rust, Kotlin and Swift
            </li>
            <li>
              <b>ML Frameworks:</b> Pytorch and Tensorflow
            </li>
            <li>
              <b>Databases:</b> PostgreSQL, Redis and MongoDB
            </li>
            <li>
              <b>Infrastructure platforms/tools:</b> GCP, AWS,
              Docker, Kubernetes, Istio, Drone CI, Prometheus,
              Grafana and Vercel
            </li>
            <li>
              <b>Utilities:</b> Slack, Gitlab, Jira, Zoom, GSuite, Figma,
              LogDNA, Sentry, Firebase, AWS Cognito,
              Phoenix, FastAPI, Celery, Postman, Clevertap,
              Storyblok and Avocode
            </li>
          </ul>
        </h3>
      </div>

      <div className="flex flex-row justify-between pb-10">
        <h3 className="scroll-m-20 text-xl tracking-wide pl-10 pr-20 font-mono ">
          <p className="text-3xl font-sans font-extrabold tracking-wide  pl-3 pb-4">
            Data curated carefully for every
            <br /> niche in travel
          </p>
          <p className="p-4 text-justify ">
            There is no better way to shatter boundaries than with travel. But
            to make travel plans magical, the burden of researching is not one
            that&apos;s easy to bear.
          </p>
          <p className="p-4 text-justify ">
            We dive deep into the ocean of data to make every experience the
            ultimate one for our users. Our destination experts are ‘practical
            dreamers’ who ensure that every piece of information is handpicked
            with great care for the most perfect travel experiences.
          </p>
        </h3>
        <Image
          src="/icons/proud.svg"
          alt="img"
          width={500}
          height={500}
          className="pr-20"
        />
      </div>

      <div className="flex flex-row justify-between pb-10">
        <Image
          src="/icons/park.svg"
          alt="img"
          width={500}
          height={500}
          className="pl-20"
        />
        <h3 className="scroll-m-20 text-xl tracking-wide pr-20 pl-20 font-mono ">
          <p className="text-3xl font-sans font-extrabold tracking-wide">
            Values that define who we are
          </p>
          <br/>
          <p className="text-justify">
          People make or break any company. We are no
          different. We put in equal parts &quot;love&quot; and
          &quot;logics&quot;
          to make &quot;Rivi&quot; come to life.
          </p>
          <br />
          Here’s the essence of what’s woven into the culture
          <br /> at Rivi.
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 font-bold">
            <li>Cognitive diversity</li>
            <li>Sense of ownership</li>
            <li>Free-flowing communication</li>
            <li>Embracing collaboration</li>
            <li>Intuitions driven by data</li>
          </ul>
        </h3>
      </div>

      <div className="flex flex-row justify-between">
        <h3 className="scroll-m-20 text-xl tracking-wide pl-10 pr-20 font-mono ">
          <p className="text-3xl font-sans font-extrabold tracking-wide pl-3">
            We :heart: travel that&apos;s modern <br />
            and sustainable
          </p>
          <br />
          <blockquote className="mt-6 border-l-2 pl-6 pb-4 italic">
            &quot;In a world where you can be anything, be kind.&quot;
          </blockquote>
          <p className="p-4 text-justify">
            To us, travelling sustainably is not a niche or a trend, it is the
            only real way to travel. Whether you are looking to volunteer at an
            animal sanctuary or just chill at the beach, we would like to make
            every trip of yours much more worthwhile - for the planet, for the
            local communities, and of course, for the travellers.
          </p>
        </h3>
        <Image
          src="/icons/adventure.svg"
          alt="img"
          width={500}
          height={500}
          className="pr-20"
        />
      </div>
    </div>
  );
}
