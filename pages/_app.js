import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return (
		<>
			<Head>
			<title>Octas</title>
				
			</Head>
			<Navbar />
			<Toaster position="top-center" />
			<Component {...pageProps} />
		
			
		</>
	);
}
