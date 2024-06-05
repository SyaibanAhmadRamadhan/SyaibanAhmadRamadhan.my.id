"use client";
import { useState } from "react";
import { Navigation } from "../components/nav";

const skillsData:any = [
	{
		name: "Hard Skill",
		category: [
			{
				name: "Programming Languages",
				skills: ["Golang", "PHP", "Python", "Java"],
			},
			{
				name: "Frameworks",
				skills: ["Gin", "Echo", "Fiber", "Laravel", "Codeigniter 4"],
			},
			{
				name: "Databases",
				skills: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch", "Redis"],
			},
			{
				name: "Artificial Intelligences",
				skills: ["Fine-tuning LLM models (GPT, Gemini)", "OpenCV"],
			},
			{
				name: "Message Brokers",
				skills: ["Kafka", "SQS", "SNS"],
			},
			{
				name: "Web Technologies",
				skills: ["WebRTC", "WebSocket"],
			},
			{
				name: "Monitoring and Observability",
				skills: ["OpenTelemetry", "Grafana", "Prometheus (including various exporters like Cadvisor and Node Exporter)"],
			},
			{
				name: "Containerization",
				skills: ["Docker"],
			},
			{
				name: "Version Control Systems",
				skills: ["Git", "GitHub", "GitLab"],
			},
			{
				name: "APIs",
				skills: ["RESTful API", "GraphQL"],
			},
			{
				name: "Push Notifications",
				skills: ["Firebase Cloud Messaging (FCM)", "Expo Push Notifications"],
			},
			{
				name: "Cloud Services",
				skills: ["Amazon Web Services (AWS)"],
			},
			{
				name: "Operating Systems",
				skills: ["Linux"],
			},
			{
				name: "Other Tools and Technologies",
				skills: ["ETL processes", "CI/CD Pipeline"],
			},
		],
	},
	{
		name: "Soft Skill",
		skills: [
			"Leadership",
			"Decision-making ability",
			"Responsibility",
			"Honesty",
			"Trustworthiness",
			"Good time management",
		],
	},
	{
		name: "Language Skills",
		skills: ["English: Beginner", "Indonesian: Fluent"],
	},
];
export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState(skillsData[0]);
	const [expandedCategories, setExpandedCategories] = useState(skillsData[0].category?.map(() => false) || []);

	const handleCategoryClick = (category:any) => {
		setSelectedCategory(category);
	};

	const toggleCategory = (index:number) => {
		setExpandedCategories((prev:any) => {
			const newExpandedCategories = [...prev];
			newExpandedCategories[index] = !newExpandedCategories[index];
			return newExpandedCategories;
		});
	};

	const expandAll = () => setExpandedCategories(expandedCategories.map(() => true));
	const collapseAll = () => setExpandedCategories(expandedCategories.map(() => false));

	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="container flex flex-col items-center justify-center px-4 mx-auto py-16 mt-16">
				<div className="w-full md:hidden mb-8">
					<label htmlFor="category-select" className="text-zinc-200">
						Select Skill Category:
					</label>
					<select
						id="category-select"
						value={skillsData.indexOf(selectedCategory)}
						onChange={(e) => handleCategoryClick(skillsData[e.target.value])}
						className="bg-zinc-800 text-zinc-200 border border-zinc-500 rounded p-2 w-full"
					>
						{skillsData.map((category:any, index:number) => (
							<option key={category.name} value={index}>
								{category.name}
							</option>
						))}
					</select>
				</div>

				<div className="hidden md:flex w-full h-full space-x-8">
					<div className="w-1/4 space-y-4">
						{skillsData.map((category:any) => (
							<button
								key={category.name}
								onClick={() => handleCategoryClick(category)}
								className={`p-4 w-full text-lg cursor-pointer rounded-lg text-center border focus:outline-none ${
									category === selectedCategory
										? "bg-zinc-800 border-zinc-700 text-white"
										: "bg-zinc-700 border-zinc-600 text-zinc-200"
								}`}
							>
								{category.name}
							</button>
						))}
					</div>
					<div className="w-3/4 p-8 bg-zinc-800 rounded-lg text-zinc-200 overflow-auto">
						{selectedCategory.name === "Hard Skill" ? (
							<>
								<div className="flex justify-between mb-4">
									<button onClick={expandAll} className="bg-zinc-700 text-zinc-200 px-4 py-2 rounded">
										Expand All
									</button>
									<button onClick={collapseAll} className="bg-zinc-700 text-zinc-200 px-4 py-2 rounded">
										Collapse All
									</button>
								</div>
								{selectedCategory.category.map((subCat:any, index:number) => (
									<div key={subCat.name}>
										<button
											onClick={() => toggleCategory(index)}
											className="w-full text-left p-2 bg-zinc-600 text-zinc-200 rounded mb-2"
										>
											{subCat.name}
										</button>
										{expandedCategories[index] && (
											<ul className="list-disc ml-5 space-y-2 text-sm mb-4">
												{subCat.skills.map((skill:any, skillIndex:number) => (
													<li key={skillIndex}>{skill}</li>
												))}
											</ul>
										)}
									</div>
								))}
							</>
						) : (
							<ul className="list-disc ml-5 space-y-2 text-sm">
								{selectedCategory.skills.map((skill:any, index:number) => (
									<li key={index}>{skill}</li>
								))}
							</ul>
						)}
					</div>
				</div>

				{selectedCategory.name === "Hard Skill" && (
					<div className="md:hidden w-full p-8 bg-zinc-800 rounded-lg text-zinc-200 overflow-auto mt-4">
						<div className="flex justify-between mb-4">
							<button onClick={expandAll} className="bg-zinc-700 text-zinc-200 px-4 py-2 rounded">
								Expand All
							</button>
							<button onClick={collapseAll} className="bg-zinc-700 text-zinc-200 px-4 py-2 rounded">
								Collapse All
							</button>
						</div>
						{selectedCategory.category.map((subCat:any, index:number) => (
							<div key={subCat.name}>
								<button
									onClick={() => toggleCategory(index)}
									className="w-full text-left p-2 bg-zinc-600 text-zinc-200 rounded mb-2"
								>
									{subCat.name}
								</button>
								{expandedCategories[index] && (
									<ul className="list-disc ml-5 space-y-2 text-sm mb-4">
										{subCat.skills.map((skill:any, skillIndex:number) => (
											<li key={skillIndex}>{skill}</li>
										))}
									</ul>
								)}
							</div>
						))}
					</div>
				)}

				{selectedCategory.name !== "Hard Skill" && (
					<div className="md:hidden w-full p-8 bg-zinc-800 rounded-lg text-zinc-200 overflow-auto mt-4">
						<h2 className="text-lg font-bold mb-4">{selectedCategory.name}</h2>
						<ul className="list-disc ml-5 space-y-2 text-sm">
							{selectedCategory.skills.map((skill:any, index:number) => (
								<li key={index}>{skill}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}