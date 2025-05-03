import React from "react";

function BookNowCTA() {
	return (
		<div className="px-4 pb-28 lg:px-40 container mx-auto 2xl:w-[80%] ">
			<div className="relative   text-center px-4 py-12 rounded-3xl hidden lg:flex items-center h-[280px] border-x border-teritary">
				<div className="w-[70%]">
					<h2 className="text-xl md:text-xl font-medium pb-8 px-8">
						Book a free consultation to explore how AI-powered solutions can elevate your business. We're here to help you grow smarter.
					</h2>
					<a
					href={"https://calendly.com/"}
					className=" text-xl py-2 px-7 lg:text-xl  text-center font-medium w-fit lg:px-7 lg:py-2 rounded-3xl cursor-pointer bg-maintext text-white bg-primary"
				>
					Book Now
				</a>
				</div>
				<div className="w-[50%] ">
					<img src="/ai-solution.png" className=" w-auto object-contain" />
				</div>
			</div>

			<div className="relative bg-gradient-to-r from-[#F3D3A8] to-[#AD7F3AE0]  text-center px-4 py-12 rounded-3xl lg:hidden flex flex-col items-center h-[250px]">
				<div className="flex flex-col items-center mb-2">
					<div className="">
						<h2 className="text-lg md:text-2xl font-medium pb-6">
							Book a free consultation to explore how AI-powered solutions can elevate your business. We're here to help you grow smarter.
						</h2>
                    </div>
                    <a
					href={"https://calendly.com/"}
					className=" text-xl py-2 px-7 lg:text-xl  text-center font-medium w-fit lg:px-7 lg:py-4 rounded-3xl cursor-pointer bg-maintext text-white"
				>
					Book Now
				</a>
					
				</div>
				
			</div>
		</div>
	);
}

export default BookNowCTA;
