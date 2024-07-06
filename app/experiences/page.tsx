"use client";
import { useState } from "react";
import Link from "next/link";
import { Navigation } from "../components/nav";

const experiences: any = [
	{
		company: "Kompit",
		href: "https://kompit.com",
		position: "Junior Backend Engineer",
		duration: "Jan 2024 – Present",
		description: [
			"Success in achieving development speed in the backend division.",
			"Clean Code Practices: We write clean, maintainable code, perform unit testing, conduct thorough code reviews, and engage in continuous refactoring to ensure the highest quality.",
			"Management and development of Academy Features: Efficiently handle and manage features for educational platforms.",
			"Management and development of Core Competition Features: Manage competition-related features, including support for various sports.",
			"Management and development of Fintech Features: Develop and manage financial technology functionalities.",
			"ETL Processes: Utilize Go and AWS (SNS, SQS) for efficient ETL (Extract, Transform, Load) operations.",
			"Push Notifications: Implement push notifications using Go, AWS (SNS, SQS), and Expo Push Notifications for real-time updates.",
			"API Migration: Transition existing APIs from legacy code to a modern, scalable codebase.",
		],
	},
	{
		company: "Jasanya tech",
		href: "https://jasanya.tech",
		position: "Software Engineer",
		duration: "Aug 2022 - Jan 2024",
		description: [
			"As a freelance developer and co-founder of Jasanya.tech, a software house established with other colleagues.",
			"Building applications from scratch and maintaining existing ones.",
			"Clean Code Development: We write clean, maintainable code to ensure the longevity and scalability of your applications.",
			"Multilingual Database Design: We design databases that support multiple languages to cater to a global audience.",
			"GraphQL API Creation: We create efficient GraphQL APIs for your service pages, enhancing data retrieval and interaction.",
			"Application Deployment: We deploy applications on VPS or hosting services using technologies like Nginx and Docker for optimal performance and reliability.",
		],
	},
];

export default function Experiences() {
	const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

	const handleExperienceClick = (experience: any) => {
		setSelectedExperience(experience);
	};

	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="container flex flex-col items-center justify-center px-4 mx-auto py-16 mt-16">
				<div className="hidden md:flex w-full h-full space-x-8">
					<div className="w-1/4 space-y-4">
						{experiences.map((experience: any) => (
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
							{selectedExperience.description.map((desc: any, index: any) => (
								<li key={index}>{desc}</li>
							))}
						</ul>
					</div>
				</div>
				<div className="md:hidden w-full space-y-8">
					{experiences.map((experience: any) => (
						<div key={experience.company} className="p-8 bg-zinc-800 rounded-lg text-zinc-200 overflow-auto">
							<h2 className="text-2xl font-bold mb-4">
								{experience.position} @
								<Link href={experience.href} target="_blank" className="text-blue-500">
									{" "}{experience.company}
								</Link>
							</h2>
							<p className="text-sm mb-2">{experience.duration}</p>
							<ul className="list-disc ml-5 space-y-2 text-sm">
								{experience.description.map((desc: any, index: any) => (
									<li key={index}>{desc}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
