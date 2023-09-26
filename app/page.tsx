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
                <a href= "#" className = "px-4 py-2 border-none">Resume</a>
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
          </section>
    </main>
  )
}
