/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import TextInput from "./InputFields/TextInput";
import axios from "axios";
import { toast } from "react-toastify";

const GetInTouch = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();

	const firstName = useWatch({ control, name: "firstName" });
	const lastName = useWatch({ control, name: "lastName" });
	
	const email = useWatch({ control, name: "email" });
	const phoneNumber = useWatch({ control, name: "phoneNumber" });

  const onSubmit = async (data) => {
     const finalData = {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      phoneNumber: data.phoneNumber || "",
      companyName: data.companyName || "",
      message: data.message || "",
    };

    console.log(finalData);
		setIsSubmitting(true);
		try {
			const url =
				"url";
			const response = await axios.post(url, finalData);
			if (response.status === 200) {
				toast.success(
					"We have received your request. We look forward to discussing our potential collaboration.",
				);
				setIsSubmitting(false);
				reset();
			} else {
				toast.error(
					"Failed to submit your interest. Please try again later.",
        );
        setIsSubmitting(false);
				reset();
			}
		} catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
				reset();
		}
	};
	return (
		<div className="bg-[#F8FAFC] w-full h-[1080px] md:h-[890px] mt-10 py-8">
			<div className="container mx-auto flex flex-col lg:flex-row justify-center items-start w-full h-full gap-10">
				<div className="w-full lg:w-[50%]">
					<div className="w-[95%] md:w-[80%] mx-auto space-y-3 mt-12">
						<h2 className="text-2xl sm:text-3xl text-center md:text-start md:text-5xl text-[#343651] font-semibold">
							Please Get In Touch Let’s Talk!
						</h2>
						<p className="text-[#667085] text-base text-center md:text-start">
							Schedule a free call to discover smarter AI-driven solutions.
						</p>
					</div>
				</div>
				<div className="w-[95%] lg:w-[567px] shadow-lg rounded-2xl">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-5 p-4 md:p-8 border bg-white border-[#E6E6E6] rounded-2xl"
					>
						<div>
							<p className="text-xl font-medium text-black">
								Send Message
							</p>
						</div>
						<div className="w-full space-y-3 md:space-y-0 gap-4  md:flex justify-between items-center">
							<div className="w-full lg:w-1/2">
								<Controller
									name="firstName"
									control={control}
									defaultValue=""
									rules={{
										required: "First name is required",
									}}
									render={({ field }) => (
										<TextInput
											label="First name"
											placeholder="First name"
											{...field}
											required
											className={
												"w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none  text-sm placeholder:text-sm" +
												(errors.firstName ? "" : "")
											}
										/>
									)}
								/>
								{errors.firstName && (
									<p className="text-red-500 text-sm">
										{errors.firstName.message}
									</p>
								)}
							</div>
							<div className="w-full lg:w-1/2">
								<Controller
									name="lastName"
									control={control}
									defaultValue=""
									rules={{
										required: "Last name is required",
									}}
									render={({ field }) => (
										<TextInput
											label="Last name"
											placeholder="Last name"
											{...field}
											required
											className={
												"w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-sm placeholder:text-sm" +
												(errors.lastName ? " " : "")
											}
										/>
									)}
								/>
								{errors.lastName && (
									<p className="text-red-500 text-sm">
										{errors.lastName.message}
									</p>
								)}
							</div>
						</div>

						<div className="w-full">
							<Controller
								name="email"
								control={control}
								defaultValue=""
								rules={{
									required: "Email is required",
									validate: (value) =>
										/\S+@\S+\.\S+/.test(value) ||
										"Invalid email address",
								}}
								render={({ field }) => (
									<TextInput
										label="Email"
										placeholder="you@company.com"
										required
										{...field}
										className={
											"w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-sm placeholder:text-sm" +
											(errors.email ? " " : "")
										}
									/>
								)}
							/>
							{errors.email && (
								<p className="text-red-500 text-sm">
									{errors.email.message}
								</p>
							)}
						</div>

						<div>
							<label className="block text-black text-sm font-medium mb-2">
								Phone Number{" "}
								<span className="text-red-500">*</span>
							</label>
							<Controller
								control={control}
								name="phoneNumber"
								render={({ field }) => (
									<PhoneInput
										{...field}
										placeholder="Enter your number"
										international
										countryCallingCodeEditable={false}
										defaultCountry="IN"
										className={`w-full rounded border border-[#E6E6E6] bg-white px-1 py-2 outline-none focus:bg-white text-sm placeholder:text-sm ${
											errors.phoneNumber ? "" : ""
										}`}
									/>
								)}
								rules={{
									required: "Mobile number is required",
									validate: (value) =>
										isValidPhoneNumber(value) ||
										"Please enter a valid mobile number",
								}}
							/>
							{errors.phoneNumber && (
								<p className="text-red-500 text-sm">
									{errors.phoneNumber.message}
								</p>
							)}
						</div>

						<div className="w-full">
							<Controller
								name="companyName"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<TextInput
										label="Company Name"
										placeholder="xyz"
										{...field}
										className={
											"w-full px-3 py-2 border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-sm placeholder:text-sm" +
											(errors.companyName ? " " : "")
										}
									/>
								)}
							/>
							{errors.companyName && (
								<p className="text-red-500 text-sm">
									{errors.companyName.message}
								</p>
							)}
						</div>
						<div className="w-full">
							<Controller
								name="message"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<TextInput
										label="Message"
										type={"textarea"}
										placeholder=""
										{...field}
										className={
											"w-full px-3 py-2 h-32 resize-none border border-[#E6E6E6] rounded-lg shadow-sm focus:outline-none text-sm placeholder:text-sm"
										}
									/>
								)}
							/>
							{errors.message && (
								<p className="text-red-500 text-sm">
									{errors.message.message}
								</p>
							)}
						</div>

						<div className="mt-2 text-center">
							<button
								type="submit"
								className={`flex w-full items-center justify-center rounded-md  py-2 gap-2 text-white ${
									!firstName ||
									!lastName ||
									!email ||
									!phoneNumber ||
									!isValidPhoneNumber(phoneNumber || "")
										? "bg-gray-500 cursor-not-allowed"
										: "bg-teritary cursor-pointer"
								}`}
								disabled={
									!firstName ||
									!lastName ||
									!email ||
									!phoneNumber ||
									!isValidPhoneNumber(phoneNumber || "")
								}
							>
								{!isSubmitting ? (
									"Submit"
								) : (
									<div className="flex justify-center items-center">
										<div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
									</div>
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
