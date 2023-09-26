import Resume from '../public/resume.pdf'
import Loading from '../public/loading.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=" bg-white px-10">
        <section className = "min-h-screen">
          <nav className = "py-8 flex justify-between">
            <h2 className = "px-4 py-2 border-none">Placeholder</h2>
            <ul className = "flex items-center">
              <li className = "px-4 py-2 border-none">Home</li>
              <li className = "px-4 py-2 border-none">Projects</li>
              <li>
                <Link href = {Resume} target = "_blank" className = "px-4 py-2 border-none">Resume</Link>
              </li>
            </ul>
          </nav>
        <div className = "text-center p-10">
            <h2 className = "text-5xl py-2 font-medium">Brian Seo</h2>
            <h3 className = "text-2xl py-2">Software Developer</h3>
            <p className = "text-md py-5 leading-8 text-gray-500">
              I&apos;m a software developer passionate about finding solutions to
              complex problems. I&apos;m excited to learn more about the endless
              possibilities coding and technology bring to our world today.</p>
          </div>

          <div className = "bg-black text-white relative leading-6 px-4 py-2"> ssh@brian.seo ~ % status </div>
          <div className = "bg-black text-white relative leading-6 px-4 py-2">
            <a href = "https://gratifypay.com/"> @gratifypay </a>
            <p> - Full Stack Developer at Gratify Pay</p>
            <p> - Worked on the back-end payments team</p>
            <br/>
            <p> BCIT CST Graduating Class of 2021 </p>
            <p> - Specialization: Data Communications and Internetworking</p>
            <br/>
          </div>
          <br/>
          {/* TODO: Add projects one by one */}
          <div className = "bg-black relative mx-auto leading-6 px-4 py-2">
            <div className = "bg-black text-white relative leading-6 px-4 py-2"> ssh@brian.seo ~ % projects </div>
              <Image src = {Loading} alt = "LoadingBar" className = "leading-6 px-4 py-2 mx-auto justify-center items-center"></Image>
              <p className = "text-white text-center"> This section is currently a work in progress. Please come back later. </p>
          </div>
          <br/>
          <footer className = "pb-2 flex justify-center gap-10">
            <a href = "https://www.linkedin.com/in/brianseo725/">
              <svg
                xmlnsXlink="https://www.linkedin.com/in/brianseo725/"
                className ="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href = "https://www.github.com/seoabunga/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </footer>
          </section>
    </main>
  )
}
