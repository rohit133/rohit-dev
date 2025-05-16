import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-2xl underline underline-offset-4 decoration-dashed">About Me</h2>
        <Card className="p-6 bg-card border-card-border">
          <p className="mb-4 text-violet-400 ">$ cat <span className="underline underline-offset-4 decoration-dashed cursor-pointer hover:text-violet-300">about.txt</span></p>
          <div className="text-green">
            <ul className="flex flex-col gap-2">
              <li>🐝   I&apos;m an undergraduate from <span className="text-blue-400">Lovely Professional University</span> Majors in Computer Science</li>
              <li>👾 I&apos;m pursuing concentrations in <span className="text-blue-400">full stack development</span> and <span className="text-blue-400">Systems & Architecture</span></li>
              <li>👩‍💻 Most of my experience is in <span className="text-blue-400">full stack development</span> and <span className="text-blue-400">systems programming</span></li>
            </ul>
          </div>
          <p className="mt-4 text-blue">Experience:</p>
          <ul className="list-disc list-inside mt-2 text-purple">
            <li>Building aimonk.io @ Aimonk.io <span className='text-violet-400'><Link className="hover:underline underline-offset-4 decoration-dashed hover:text-violet-300" href={"#"} target="_blank">(current)</Link></span></li>
            <li>Previously Backend Developer @ Bottle Technology <span className='text-gray-400 hover:text-gray-300'><Link className="hover:underline underline-offset-4 decoration-dashed " href={"https://bottle.com.np/"} target="_blank">(Previously)</Link></span></li>
            <li>Software engineer in Test-1 <span className="text-blue-400">Intern</span> @ Frugal Testing <span className='text-gray-400 hover:text-gray-300'><Link className="hover:underline underline-offset-4 decoration-dashed" href={"https://www.frugaltesting.com/"} target="_blank">(Previously)</Link></span></li>
          </ul>
        </Card>
      </div>
    </>
  )
}
