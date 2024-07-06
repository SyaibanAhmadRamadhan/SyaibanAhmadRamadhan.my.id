"use client";
import { ArrowLeft, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isMenuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container flex items-center justify-between p-6 mx-auto">
					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6" />
					</Link>
					<div className="md:hidden">
						<button
							onClick={() => setMenuOpen(!isMenuOpen)}
							className="text-zinc-300 hover:text-zinc-100"
						>
							<Menu className="w-6 h-6" />
						</button>
					</div>
					<nav
						className={`${
							isMenuOpen ? "block" : "hidden"
						} md:flex md:items-center md:gap-8 md:static absolute top-16 left-0 w-full md:w-auto bg-zinc-900 md:bg-transparent p-4 md:p-0`}
					>
						<Link
							href="/projects"
							className="block duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/experiences"
							className="block duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Experiences
						</Link>
						<Link
							href="/skills"
							className="block duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Skills
						</Link>
						<Link
							href="/contact"
							className="block duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};