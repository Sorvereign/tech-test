"use client";
import Image from "next/image";
import { Permanent_Marker } from "next/font/google";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Dialog } from "../components/Dialog";

const inter = Permanent_Marker({ weight: ["400"], subsets: ["latin"] });

const delay = 9 * 60 * 1000 + 35 * 1000;
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSeen, setIsSeen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    const isAlreadySeen = localStorage.getItem("isSeen");
    if (isAlreadySeen !== "true") {
      localStorage.setItem("isSeen", "true");
    } else {
      setIsSeen(true);
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-8 justify-center py-24 md:p-24 md:pt-8 bg-white`}
    >
      <Head>
        <title>The Pussy Key</title>
        <meta
          name="description"
          content="Recursos y guías de educación sexual para una vida saludable e informada."
        />
        <meta
          name="keywords"
          content="educación sexual, salud sexual, bienestar sexual, relaciones íntimas"
        />
        <meta name="author" content="The Pussy Key" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.tusitioweb.com/" />
      </Head>
      <section className="min-h-screen border-b border-b-red-800">
        <div className="flex flex-col gap-4 w-full text-center">
          <h1 className=" text-5xl font-semibold mx-auto w-full md:w-1/2">
            "Hot Milf Teaches{" "}
            <span className={`text-[#911b4e] ${inter.className}`}>
              Men Over 40
            </span>{" "}
            How To Make Any{" "}
            <span className={`text-[#911b4e] ${inter.className}`}>
              Woman Squirt!"
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-8 mb-32 text-center lg:mb-0 justify-center items-center">
          <video
            id="bitmovinplayer-video-vidalytics_player_xBxSwhnZ"
            src="/video.mp4"
            className="py-4"
            width="720px"
            autoPlay
            muted
          />
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 21.2 12.6"
            className="fill-slate-600 w-5 animate-bounce"
          >
            <polygon points="21.2,2.1 19,0 10.6,8.4 2.2,0 0,2.1 10.6,12.6 "></polygon>
          </svg>

          {(isVisible || isSeen) && (
            <section>
              <button className="transition duration-300 font-semibold w-[15ch] sm:w-[35ch] h-[10vh] py-4 px-2 text-white bg-green-700 rounded-full hover:bg-green-900">
                CLICK HERE TO ORDER NOW
              </button>
            </section>
          )}
        </div>
      </section>

      {(isVisible || isSeen) && (
        <>
          <section>
            <div className="flex flex-col gap-8 mb-32 text-center lg:mb-0 justify-center items-center">
              <Image src="/order.png" height={320} width={320} alt="Image" />

              <div>
                <div className="font-semibold">
                  Normal Price:{" "}
                  <span className="line-through font-semibold text-red-700">
                    $97 USD
                  </span>
                </div>
                <div className="font-semibold">
                  Today:{" "}
                  <span className="font-semibold text-green-700">$17 USD</span>
                </div>
              </div>
            </div>
          </section>

          <footer className="flex flex-col text-center md:w-1/2 font-semibold text-xs">
            <p>
              <a
                href="https://www.gabriellemoore.com/2257-statement/"
                target="_blank"
              >
                {" "}
                U.S.C. 2257 [and/or 2257A] , as appropriate Record-Keeping
                Requirements Compliance Statement
              </a>
            </p>
            <p>
              <a
                href="http://www.gabriellemoore.com/privacy-policy/"
                target="_blank"
              >
                PRIVACY POLICY
              </a>{" "}
              |{" "}
              <a
                href="http://www.gabriellemoore.com/disclaimer/"
                target="_blank"
              >
                TERMS AND CONDITIONS
              </a>
            </p>
          </footer>
        </>
      )}

      <Dialog delay={1 * 1000} />
    </main>
  );
}
