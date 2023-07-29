"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Dialog } from "../components/Dialog";

const inter = Inter({ subsets: ["latin"] });

const DelayedSection = ({
  delay,
  children,
}: {
  delay: number;
  children: any;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSeen, setIsSeen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    const isAlreadySeen = localStorage.getItem("isSeen");
    if (isAlreadySeen !== "true") {
      localStorage.setItem("isSeen", "true");
    } else {
      setIsSeen(true);
    }
  }, []);

  return isVisible || isSeen ? children : null;
};

export default function Home() {
  const delay = 9 * 60 * 1000 + 35 * 1000;

  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-8 justify-center py-24 md:p-24 bg-black ${inter.className}`}
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
          <h1 className="text-[#A60505] text-3xl font-semibold mx-auto w-full md:w-1/2">
            Do you wanna know how to make your partner reach climax?
          </h1>
          <p className="text-gray-300 pb-4  ">
            Hot Milf Teaches Men Over 40 How To Make Any Woman Squirt!{" "}
          </p>
        </div>
        <div className="flex flex-col gap-8 mb-32 text-center lg:mb-0 justify-center items-center">
          <video
            id="bitmovinplayer-video-vidalytics_player_xBxSwhnZ"
            src="/video.mp4"
            /*    autoPlay */
            muted
          />

          <DelayedSection delay={delay}>
            <button className="bg-gradient-to-r from-red-600 via-red-900 to-black font-semibold w-1/2 sm:w-1/3 py-4 px-2 text-white">
              Learn More
            </button>
          </DelayedSection>
        </div>
      </section>

      <DelayedSection delay={delay}>
        <section className="flex flex-col min-h-screen justify-center gap-8 border-b border-b-red-800">
          <div>
            <h3 className="text-[#A60505] text-center text-3xl font-semibold">
              Any of this sound familiar?
            </h3>
            <div>
              <div className="bg-red-200/10 p-8 text-gray-300 rounded-sm lg:w-[80ch]">
                <ul className="list-disc">
                  <li>You feel like you were not doing enough?</li>
                  <li>You ever felt like you doing something wrong?</li>
                  <li>Felt like things aren’t going well with your partner?</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-center pb-4">
            If so, just know I’ve been there and you’re not alone...
          </p>
        </section>

        <section className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 border-b border-b-red-800 lg:w-10/12 py-16">
          <Image src="/image.png" height={320} width={320} alt="Image" />
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-[#A60505] text-left font-semibold">
              WHY THIS WILL WORK FOR YOU
            </p>
            <h3 className="text-white text-left text-3xl font-semibold w-2/3">
              You are someone that wants a happy partner
            </h3>
            <div>
              <div className="p-8 text-gray-300 rounded-sm">
                <ul className="list-disc">
                  <li>Wants a great sexual life</li>
                  <li>Better sexual connection with your partner</li>
                  <li>Make them all happy ;)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-4 w-full text-center">
            <h1 className="text-white text-3xl font-semibold mx-auto w-full md:w-full pb-8">
              Get this promotion now!
            </h1>
          </div>
          <div className="flex flex-col gap-8 mb-32 text-center lg:mb-0 justify-center items-center">
            <Image src="/order.png" height={320} width={320} alt="Image" />

            <button className="bg-gradient-to-r from-red-600 via-red-900 to-black font-semibold w-1/2 sm:w-full py-4 px-2 text-white">
              Get promotion!
            </button>
          </div>
        </section>
      </DelayedSection>

      <Dialog delay={40 * 1000} />
    </main>
  );
}
