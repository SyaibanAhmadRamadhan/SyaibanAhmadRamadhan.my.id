"use client";
import { useState } from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";

const experiences = [
	{
		company: "Kompit",
		href: "https://kompit.com",
		position: "Junior Backend Engineer",
		duration: "Jan 2024 – Present",
		description: [
			"Clean code implementation with proper coding standards, Unit testing to ensure code reliability, Code review processes for quality assurance, and Refactoring for code optimization and maintainability.",
			"Management and development of features for an academic platform, core competition features including multiple sports branches, and Handling various fintech features.",
			"ETL (Extract, Transform, Load) processes using Go and AWS SNS SQS.",
			"Push notifications implementation using Go, AWS SNS SQS, and Expo push notifications.",
			"Migration of existing API from legacy code to modern codebase.",
			"success in achieving development speed in the backed division",
		],
	},
	{
		company: "Jasanya tech",
		href: "https://jasanya.tech",
		position: "Software Engineer",
		duration: ["Aug 2022 - Jan 2024"],
		description: [
			"As a freelance developer and co-founder of Jasanya.tech, a software house established with other colleagues.",
			"Building applications from scratch and maintaining existing ones.",
			"Developing GraphQL APIs specifically designed to retrieve data from microservices, catering to the needs of frontend interactions with the microservices architecture.",
			"Writing clean code and performing comprehensive unit testing to ensure application quality.",
		],
	},
];

export default function Experiences() {
	const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

	const handleExperienceClick = (experience) => {
		setSelectedExperience(experience);
	};

	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="container flex flex-col items-center justify-center px-4 mx-auto py-16 mt-16">
				<div className="w-full md:hidden mb-8">
					<label htmlFor="experience-select" className="text-zinc-200">
						Select Experience:
					</label>
					<select
						id="experience-select"
						value={experiences.indexOf(selectedExperience)}
						onChange={(e) => handleExperienceClick(experiences[e.target.value])}
						className="bg-zinc-800 text-zinc-200 border border-zinc-500 rounded p-2 w-full"
					>
						{experiences.map((experience, index) => (
							<option key={experience.company} value={index}>
								{experience.company}
							</option>
						))}
					</select>
				</div>
				<div className="hidden md:flex w-full h-full space-x-8">
					<div className="w-1/4 space-y-4">
						{experiences.map((experience) => (
							<button
								key={experience.company}
								onClick={() => handleExperienceClick(experience)}
								className={`p-4 w-full text-lg cursor-pointer rounded-lg text-center border focus:outline-none ${
									experience === selectedExperience
										? "bg-zinc-800 border-zinc-700 text-white"
										: "bg-zinc-700 border-zinc-600 text-zinc-200"
								}`}
							>
								{experience.company}
							</button>
						))}
					</div>
					<div className="w-3/4 p-8 bg-zinc-800 rounded-lg text-zinc-200 overflow-auto">
						<h2 className="text-2xl font-bold mb-4">
							{selectedExperience.position} @
							<Link href={selectedExperience.href} target="_blank" className="text-blue-500">
								{" "}{selectedExperience.company}
							</Link>
						</h2>
						<p className="text-sm mb-2">{selectedExperience.duration}</p>
						<ul className="list-disc ml-5 space-y-2 text-sm">
							{selectedExperience.description.map((desc, index) => (
								<li key={index}>{desc}</li>
							))}
						</ul>
					</div>
				</div>
				<div className="md:hidden w-full p-8 bg-zinc-800 rounded-lg text-zinc-200 overflow-auto mt-4">
					<h2 className="text-2xl font-bold mb-4">
						{selectedExperience.position} @
						<Link href={selectedExperience.href} target="_blank" className="text-blue-500">
							{" "}{selectedExperience.company}
						</Link>
					</h2>
					<p className="text-sm mb-2">{selectedExperience.duration}</p>
					<ul className="list-disc ml-5 space-y-2 text-sm">
						{selectedExperience.description.map((desc, index) => (
							<li key={index}>{desc}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}