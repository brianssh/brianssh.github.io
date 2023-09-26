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
          <div className = "bg-black relative mx-auto leading-6 px-4 py-2">
            <div className = "bg-black text-white relative leading-6 px-4 py-2"> ssh@brian.seo ~ % projects </div>
              <Image src = {Loading} alt = "LoadingBar" className = "leading-6 px-4 py-2 mx-auto justify-center items-center"></Image>
              <p className = "text-white text-center"> This section is currently a work in progress. Please come back later. </p>
          </div>
          <br/>

          </section>
    </main>
  )
}
