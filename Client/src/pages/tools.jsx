import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
	{
		title: "Most Useful Calculators",
		description: "Popular calculators traders and investors use every day.",
		items: [
			{ path: "/tools/sip", label: "SIP Calculator", icon: "🔄" },
			{ path: "/tools/lumpsum", label: "Lumpsum Calculator", icon: "💵" },
			{ path: "/tools/swp", label: "SWP Calculator", icon: "↔️" },
			{ path: "/tools/step-up-sip", label: "Step-up SIP", icon: "📈" },
			{ path: "/tools/cagr", label: "CAGR Calculator", icon: "📈" },
			{ path: "/tools/elss", label: "ELSS Calculator", icon: "💹" },
		],
	},
	{
		title: "Deposit Calculators",
		description: "Bank and savings product calculators.",
		items: [
			{ path: "/tools/fd", label: "FD Calculator", icon: "💰" },
			{ path: "/tools/rd", label: "RD Calculator", icon: "📅" },
			{ path: "/tools/compound-interest", label: "Compound Interest", icon: "➗" },
			{ path: "/tools/simple-interest", label: "Simple Interest", icon: "➕" },
			{ path: "/tools/ssy-calculator", label: "SSY Calculator", icon: "🧮" },
		],
	},
	{
		title: "Retirement Calculators",
		description: "Plan long-term wealth and retirement goals.",
		items: [
			{ path: "/tools/retirement", label: "Retirement Calculator", icon: "🌅" },
			{ path: "/tools/ppf", label: "PPF Calculator", icon: "📜" },
			{ path: "/tools/nps", label: "NPS Calculator", icon: "🛡️" },
			{ path: "/tools/epf", label: "EPF Calculator", icon: "🏦" },
			{ path: "/tools/gratuity", label: "Gratuity Calculator", icon: "🎁" },
		],
	},
	{
		title: "Miscellaneous",
		description: "Other helpful personal finance tools.",
		items: [
			{ path: "/tools/income-tax", label: "Income Tax Calculator", icon: "🧾" },
			{ path: "/tools/inflation", label: "Inflation Calculator", icon: "📊" },
			{ path: "/tools/hra", label: "HRA Calculator", icon: "🏠" },
		],
	},
];

const ToolsPage = () => {
	return (
		<div className="bg-white text-gray-900">
			<Navbar />

			{/* Hero */}
			<section className="relative bg-white py-20 px-6 md:px-12 lg:px-24 mt-16">
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
						Financial <span className="text-green-600">Calculators</span>
					</h1>
					<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
						Explore our suite of calculators to plan, project, and optimize your finances.
					</p>
				</div>
			</section>

			{/* Sectioned Calculators */}
			<section className="py-6 pb-20 px-6 md:px-12 lg:px-24">
				<div className="max-w-7xl mx-auto space-y-14">
					{sections.map((section) => (
						<div key={section.title}>
							<div className="mb-6">
								<h2 className="text-2xl md:text-3xl font-bold text-gray-900">
									{section.title}
								</h2>
								<p className="text-gray-600 mt-1">{section.description}</p>
							</div>
							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
								{section.items.map((item) => (
									<div key={item.path} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
										<div className="flex items-start gap-4">
											<div className="text-3xl">{item.icon}</div>
											<div className="flex-1">
												<h3 className="text-xl font-semibold text-gray-900">{item.label}</h3>
												<p className="text-sm text-gray-600 mt-1">Quickly compute values and compare scenarios.</p>
											</div>
										</div>
										<div className="mt-5">
											<Link to={item.path} className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition">
												Open
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default ToolsPage; 