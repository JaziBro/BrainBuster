import Image from "next/image";
import cricket from "../../public/cricket.jpg"
import hero from "../../public/hero-img.jpeg"

export default function Home() {
  return (
    <>
      {/* Header n Nav Bar */}
      <div className="min-h-screen bg-white flex flex-col items-center">
        <header className="w-full flex justify-between p-6">
          <div className="text-purple-600 font-bold text-xl">[Logo]</div>
          <nav className="space-x-8">           
            <a href="#" className="text-gray-600">Home</a>
            <a href="#" className="text-gray-600">Solutions</a>
            <a href="#" className="text-gray-600">Customers</a>
            <a href="#" className="text-gray-600">Developers</a>
            <a href="#" className="text-gray-600">Pricing</a>
            <a href="#" className="text-gray-600">Blog</a>
          </nav>
          <div className="space-x-4">
            <button className="text-purple-600">Log in</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded">Talk to an Expert</button>
          </div>
        </header>

        {/* hero section */}
        <main className="flex flex-col items-center justify-center flex-1 px-6 ">
          <div className="text-center md:text-left max-w-lg mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Take a quiz, or–<br/>Plan a quiz.</h1>
            <p className="text-gray-600 text-lg">Deliver instruction that's relevant for every student — now with a boost from AI.</p>
          </div>
          <div className="hidden md:block ml-10">
            <Image src={hero} alt="AI Quiz Illustration" className="max-w-xs" />
          </div>

          <section className="flex justify-center space-x-8 mt-10">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs ">
            <Image src={cricket} alt="Fundamentals Quiz" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-black">Fundamentals Quiz</h2>
              <p className="text-gray-600">
                Ideal for beginners, this quiz focuses on foundational knowledge. It’s designed to be approachable yet engaging, perfect for younger learners or those new to the topic.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs">
            <Image src={cricket} alt="Intermediate Challenge" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-black">Intermediate Challenge</h2>
              <p className="text-gray-600">
                This quiz offers a balanced mix of questions, suitable for those with some prior knowledge. It’s an excellent way to test and expand your understanding in a structured manner.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs">
            <Image src={cricket} alt="Mastery Test" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-black">Mastery Test</h2>
              <p className="text-gray-600">
                Designed for those who seek a rigorous challenge, this quiz features complex questions that require a deep understanding of the subject. Ideal for advanced learners and experts.
              </p>
            </div>
          </div>
        </section>
        </main>

        {/* footer */}
        <footer className="w-full bg-gray-50 py-10 mt-10 shadow-2xl border-purple-600 border-t-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-1/6 mb-6 sm:mb-0">
                <div className="text-gray-700 font-bold mb-4">Company</div>
                <ul>
                  <li><a href="#" className="text-gray-600">Blog</a></li>
                  <li><a href="#" className="text-gray-600">Careers</a></li>
                  <li><a href="#" className="text-gray-600">Pricing</a></li>
                  <li><a href="#" className="text-gray-600">Customers</a></li>
                  <li><a href="#" className="text-gray-600">Contact Us</a></li>
                </ul>
              </div>
              <div className="w-full sm:w-1/6 mb-6 sm:mb-0">
                <div className="text-gray-700 font-bold mb-4">Payments</div>
                <ul>
                  <li><a href="#" className="text-gray-600">PCI Compliance</a></li>
                  <li><a href="#" className="text-gray-600">Payments Optimization</a></li>
                  <li><a href="#" className="text-gray-600">Card Issuing</a></li>
                  <li><a href="#" className="text-gray-600">Network Tokens</a></li>
                  <li><a href="#" className="text-gray-600">Card Insights</a></li>
                  <li><a href="#" className="text-gray-600">Key Management</a></li>
                </ul>
              </div>
              <div className="w-full sm:w-1/6 mb-6 sm:mb-0">
                <div className="text-gray-700 font-bold mb-4">By Data Type</div>
                <ul>
                  <li><a href="#" className="text-gray-600">Card Data</a></li>
                  <li><a href="#" className="text-gray-600">Banking Data</a></li>
                  <li><a href="#" className="text-gray-600">PII</a></li>
                  <li><a href="#" className="text-gray-600">HIPAA & ePHI</a></li>
                  <li><a href="#" className="text-gray-600">API Credentials</a></li>
                  <li><a href="#" className="text-gray-600">File Encryption</a></li>
                </ul>
              </div>
              <div className="w-full sm:w-1/6 mb-6 sm:mb-0">
                <div className="text-gray-700 font-bold mb-4">Primitives</div>
                <ul>
                  <li><a href="#" className="text-gray-600">Relay</a></li>
                  <li><a href="#" className="text-gray-600">Functions</a></li>
                  <li><a href="#" className="text-gray-600">UI Components</a></li>
                  <li><a href="#" className="text-gray-600">Enclaves</a></li>
                </ul>
              </div>
              <div className="w-full sm:w-1/6 mb-6 sm:mb-0">
                <div className="text-gray-700 font-bold mb-4">Legal & Compliance</div>
                <ul>
                  <li><a href="#" className="text-gray-600">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-600">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600">Cookies Policy</a></li>
                  <li><a href="#" className="text-gray-600">Data Processing</a></li>
                </ul>
              </div>
            </div>
            <div className="text-center text-gray-600 mt-10">
              © 2024 Name Inc. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
