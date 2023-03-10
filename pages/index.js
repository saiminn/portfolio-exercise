import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sai Minn Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-burtons">DEVELOPEDBYSAI</h1>
            <ul className="flex items-center text-lg">
              <li className=" cursor-pointer text-3xl">
                <img
                  className="star-moon"
                  src="/moon-stars-fill.svg"
                  alt="moon star photo"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="font-serif text-center">
            <h2 className="text-5xl py-2 text-teal-600 font-large md:6xl">
              Sai Minn Khant Kyaw
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and designer.
            </h3>
            <p className="py-5 leading-8 text-gray-800 max-w-xl mx-auto">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className=" mt-6">
            <ul className="flex justify-center gap-16">
              <li>
                <img className="social-icons" src="/telegram.svg" alt="" />
              </li>
              <li>
                <img className="social-icons" src="/facebook.svg" alt="" />
              </li>
              <li>
                <img className="social-icons" src="/youtube.svg" alt="" />
              </li>
            </ul>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full  h-80 mt-20 overflow-hidden md:h-96 ">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center mt-5 font-serif">
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center max-w-2xl mx-auto">
              Since the beginning of my journey as a freelancer designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies</span> consulted for{" "}
              <span className="text-teal-500">startups</span> and collaborated
              with talented people to create digital product for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 text-center max-w-2xl mx-auto">
              I offer from a wide range of services, including brand design,
              programming and teaching
            </p>
          </div>
          <div className="lg:flex gap-10 mx-auto">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-20 bg-gradient-to-t from-gray-500 to-white min-w-fit">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs study for your need following core
                design theory.
              </p>
              <h4 className="text-teal-600 py-4">Design tool I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">AdobeInDesign</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Canva</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-20 bg-gradient-to-t from-gray-500 to-white min-w-fit">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs study for your need following core
                design theory.
              </p>
              <h4 className="text-teal-600 py-4">Design tool I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">AdobeInDesign</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Canva</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-20 bg-gradient-to-t from-gray-500 to-white min-w-fit">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs study for your need following core
                design theory.
              </p>
              <h4 className="text-teal-600 py-4">Design tool I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">AdobeInDesign</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Canva</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center max-w-2xl mx-auto">
              Since the beginning of my journey as a freelancer designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies</span> consulted for{" "}
              <span className="text-teal-500">startups</span> and collaborated
              with talented people to create digital product for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 text-center max-w-2xl mx-auto">
              I offer from a wide range of services, including brand design,
              programming and teaching
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image src={web1} className="rounded-lg object-cover" width={"100%"}  />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image src={web2} className="rounded-lg object-cover" width={"100%"}  />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image src={web3} className="rounded-lg object-cover" width={"100%"} />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image src={web4} className="rounded-lg object-cover" width={"100%"} />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image src={web5} className="rounded-lg object-cover" width={"100%"}  />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image src={web6} className="rounded-lg object-cover" width={"100%"}  />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
