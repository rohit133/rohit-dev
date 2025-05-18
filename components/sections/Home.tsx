import { ArrowUpRight, FileDown, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Projects from "@/components/sections/Projects"
import { TypeAnimation } from "react-type-animation"
import Tags from "../Tags"
import Leetcode from "@/public/icons/Leetcode"

export default function Portfolio() {

  const socials = [
    {
      title: "GitHub",
      href: "https://github.com/rohit133",
      icon: <Github className="w-4 h-4" />
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/rohit-sharma-25aa1116b/",
      icon: <Linkedin className="w-4 h-4" />
    },
    {
      title: "Twitter",
      href: "https://x.com/rohityou000",
      icon: <Twitter className="w-4 h-4" />
    },
    {
      title: "Resume",
      href: "https://drive.google.com/file/d/1XsRNwJH9ZtPpC1tIwPuVhXWqHU3VsKjE/view?usp=sharing",
      icon: <FileDown className="w-4 h-4" />
    }, 
    {
      title: "Leetcode",
      href: "https://leetcode.com/u/rohityou000/",
      icon: <Leetcode className="w-4 h-4"/>
      

    }
  ]
  const tags = {
    "Languages": [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "c",
      "groovy"
    ],
    "Frameworks": [
      "React",
      "Node.js",
      "Express.js",
      "Next.js",
      "Springboot",
      "Selenium"
    ],
    "Databases": [
      "SQL",
      "PostgreSQL",
      "MongoDB",
    ],
    "Styling": [
      "Tailwind CSS",
      "CSS",
      "Bootstrap"
    ],
    "Tools": [
      "Git",
      "Jira",
      "Postman",
      "Figma",
      "Docker"
    ]
  }

  return (
    <div className="space-y-6">

      {/* Name Section */}
      <h1 className="text-[2rem]">
        <TypeAnimation
          sequence={[
            'Hello',
            1000,
            'Hola',
            1000,
            'Bonjour',
            1000,
            'こんにちわ (Konnichiwa)',
            1000,
            'Namaste',
            1000,
          ]}
          wrapper="span"
          speed={10}
          style={{ fontSize: '2rem', display: 'inline-block' }}
          repeat={1}
        />
      </h1>

      {/* Animations Section */}
      <p className="text-lg text-gray-white">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'I am a Software Engineer',
            1000, // wait 1s I am lacing "Mice" with "Hamsters"
            'I am a Backend Developer',
            1000,
            'I am a Frontend Developer',
            1000,
            'I am a Web and systems enthusiast',
            1000,
          ]}
          wrapper="span"
          speed={10}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={3}
        />
      </p>
      
      {/* socials Section */}
      <div className="flex gap-4 flex-wrap">
        {socials.map((social) => (
          <Link href={social.href} target="_blank" key={social.title}>
            <Button variant="outline" className="group gap-2 text-purple border-muted hover:border-gray-white">
              {social.icon}
              {social.title}
              <div className="transition-transform group-hover:rotate-45 ease-in-out duration-150">
                <ArrowUpRight />
              </div>
            </Button>
          </Link>
        ))}
      </div>

      {/* Skills Section */}
      <h1>Top Skills</h1>
      <Tags tags={tags} />

      {/* Top Projects Section */}
      <h1>Top Projects</h1>
      <Projects />
    </div>
  )
}
