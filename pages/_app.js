import Navbar from "@/components/Navbar/Navbar";
import PhraseByPhraseAnimation from "@/components/PhraseByPhraseAnimation";
import "@/styles/globals.css";
import { Clock } from "lucide-react";

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleRouteChangeStart = () => {
			setLoading(true);
		};

		const handleRouteChangeComplete = () => {
			setLoading(false);
		};

		router.events.on("routeChangeStart", handleRouteChangeStart);
		router.events.on("routeChangeComplete", handleRouteChangeComplete);

		// Delay the initial loading state change for 500ms
		const loadingDelay = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => {
			router.events.off("routeChangeStart", handleRouteChangeStart);
			router.events.off("routeChangeComplete", handleRouteChangeComplete);
			clearTimeout(loadingDelay);
		};
	}, [router.events]);

	const [showAnimation, setShowAnimation] = useState(false);

	useEffect(() => {
		const isFirstVisit = !sessionStorage.getItem("visited");

		if (isFirstVisit && router.pathname === "/") {
			setShowAnimation(true);
			sessionStorage.setItem("visited", "true");
		}
	}, [router.pathname]);

	if (showAnimation) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<PhraseByPhraseAnimation
					onAnimationEnd={() => setShowAnimation(false)}
				/>
			</div>
		);
	}
	return (
		<>
			<Head>
				<title>Octas</title>
			</Head>

			{loading ? (
				<>
					<div className="h-[100vh] flex justify-center items-center">
						<div className="loader"></div>
					</div>
				</>
			) : (
				<>
					<Navbar />
					<Toaster position="top-center" />
					<Component {...pageProps} />
				</>
			)}
		</>
	);
}
