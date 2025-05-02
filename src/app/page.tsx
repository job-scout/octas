import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Octas - Your Trusted Service Partner</title>
        <meta
          name="description"
          content="Octas provides top-notch services tailored to your business needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center bg-blue-600 text-white h-screen">
          <Image
            src="/hero-bg.jpg"
            alt="Octas Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
          <div className="relative text-center px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Welcome to Octas
            </h1>
            <p className="text-lg sm:text-2xl mb-6 max-w-2xl mx-auto">
              We deliver exceptional service solutions for businesses of all sizes.
            </p>
            <a
              href="#services"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Our Services
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-100 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                <Image
                  src="/icons/consulting.svg"
                  alt="Consulting"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Business Consulting</h3>
                <p>
                  Expert advice to grow and optimize your business operations.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                <Image
                  src="/icons/development.svg"
                  alt="Development"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
                <p>
                  Tailored software solutions built to fit your unique needs.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                <Image
                  src="/icons/support.svg"
                  alt="Support"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                <p>
                  Reliable maintenance and support to keep your systems running.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <div className="space-y-8">
              <blockquote className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="italic mb-4">
                  "Octas transformed our digital presence and boosted sales by 40%!"
                </p>
                <footer className="font-semibold">— Sarah Johnson, CEO</footer>
              </blockquote>

              <blockquote className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="italic mb-4">
                  "Their team is professional, responsive, and highly skilled."
                </p>
                <footer className="font-semibold">— Michael Lee, CTO</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-50 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-8">
              Ready to start your project? Contact us today!
            </p>
            <a
              href="mailto:contact@octas.in"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Email Us
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-800 text-gray-400 text-center">
          <div className="max-w-4xl mx-auto">
            <p>&copy; {new Date().getFullYear()} Octas. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#">
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
