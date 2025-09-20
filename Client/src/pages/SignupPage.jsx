import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignupPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		phone: "",
		agreeToTerms: false,
		newsletter: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle signup logic here
		console.log('Signup attempt:', formData);
	};

	return (
		<div className="bg-white text-gray-900 min-h-screen">
			<Navbar />

			{/* Main Content */}
			<section className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-6 md:px-12 lg:px-24 mt-16">
				<div className="max-w-lg mx-auto">
					{/* Header */}
					<div className="text-center mb-8">
						<h1 className="text-3xl font-bold text-gray-900 mb-2">
							Create Your Account
						</h1>
						<p className="text-gray-600">
							Join Xtin Capital and start your investment journey
						</p>
					</div>

					{/* Signup Form */}
					<div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Name Fields */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
										First Name
									</label>
									<input
										type="text"
										id="firstName"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
										placeholder="First name"
									/>
								</div>
								<div>
									<label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
										Last Name
									</label>
									<input
										type="text"
										id="lastName"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
										placeholder="Last name"
									/>
								</div>
							</div>

							{/* Email Field */}
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
									placeholder="Enter your email"
								/>
							</div>

							{/* Phone Field */}
							<div>
								<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
									placeholder="Enter your phone number"
								/>
							</div>

							{/* Password Fields */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
										Password
									</label>
									<input
										type="password"
										id="password"
										name="password"
										value={formData.password}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
										placeholder="Create a password"
									/>
								</div>
								<div>
									<label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
										Confirm Password
									</label>
									<input
										type="password"
										id="confirmPassword"
										name="confirmPassword"
										value={formData.confirmPassword}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
										placeholder="Confirm your password"
									/>
								</div>
							</div>

							{/* Checkboxes */}
							<div className="space-y-4">
								<label className="flex items-start">
									<input
										type="checkbox"
										name="agreeToTerms"
										checked={formData.agreeToTerms}
										onChange={handleChange}
										required
										className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
									/>
									<span className="ml-2 text-sm text-gray-600">
										I agree to the{" "}
										<Link to="/terms" className="text-green-600 hover:text-green-700 font-medium">
											Terms of Service
										</Link>{" "}
										and{" "}
										<Link to="/privacy" className="text-green-600 hover:text-green-700 font-medium">
											Privacy Policy
										</Link>
									</span>
								</label>
								<label className="flex items-start">
									<input
										type="checkbox"
										name="newsletter"
										checked={formData.newsletter}
										onChange={handleChange}
										className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded mt-1"
									/>
									<span className="ml-2 text-sm text-gray-600">
										I want to receive updates about new features and investment opportunities
									</span>
								</label>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
							>
								Create Account
							</button>
						</form>

						{/* Divider */}
						<div className="my-6 flex items-center">
							<div className="flex-1 border-t border-gray-300"></div>
							<span className="px-4 text-sm text-gray-500">or</span>
							<div className="flex-1 border-t border-gray-300"></div>
						</div>

						{/* Social Signup */}
						<div className="space-y-3">
							<button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition duration-200">
								<svg className="w-5 h-5" viewBox="0 0 24 24">
									<path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
									<path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
									<path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
									<path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
								</svg>
								Sign up with Google
							</button>
						</div>

						{/* Login Link */}
						<div className="mt-6 text-center">
							<p className="text-gray-600">
								Already have an account?{" "}
								<Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
									Sign in
								</Link>
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default SignupPage; 