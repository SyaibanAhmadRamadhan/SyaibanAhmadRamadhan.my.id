import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Experiences", href: "/experiences" },
    { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-1xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text ">
        Syaiban Ahmad Ramadhan
      </h1>

      <div className="hidden space-y-4 w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
            <h2 className="text-sm text-zinc-500 ">
                Hi, I&apos;m Rama! I studied System Information at the University Bina
                Sarana Informatika, and I&apos;m currently working at
                <Link href="https://www.kompit.com" target={"_blank"}>
                    Kompit
                </Link>
                as a
                <strong>Junior Backend Engineer</strong>.
            </h2>
            <h2 className="text-sm text-zinc-500 ">
                I am a <strong> Software Engineer</strong>
                with more than 1 year of experience. My main focus is to design,
                develop, and maintain servers, databases, and backend services for
                software applications. for software applications. My expertise includes
                Golang, Java, PHP, Python. However I emphasize the use of Golang as my
                go-to language for building efficient and reliable backend solutions.
                and reliable backend solutions. I am committed to learning and
                developing myself according to the the latest developments in the world
                of technology.
            </h2>
        </div>
    </div>
  );

}
