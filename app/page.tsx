"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal, User, Code } from "lucide-react";

import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("home");
  const tabs = {
    home: {
      title: "home",
      content: <Portfolio />,
    },
    about: {
      title: "about",
      content: <About />,
    },
    projects: {
      title: "projects",
      content: <Projects />,
    },
    blog: {
      title: "blog",
      content: undefined,
    },
  };
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 font-mono">

      {/* Logo  */}
      <div className="flex flex-row flex-wrap sm:justify-start justify-center">
        <pre className="text-green text-base whitespace-pre overflow-x-auto">
          {`
██████╗  ██████╗ ██╗  ██╗██╗████████╗
██╔══██╗██╔═══██╗██║  ██║██║╚══██╔══╝
██████╔╝██║   ██║███████║██║   ██║
██╔══██╗██║   ██║██╔══██║██║   ██║
██║  ██║╚██████╔╝██║  ██║██║   ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝
  `}
        </pre>
        <pre className="text-green text-xs md:text-sm lg:text-base whitespace-pre overflow-x-auto">
          {`  
  ███████╗██╗  ██╗ █████╗ ██████╗ ███╗   ███╗ █████╗
  ██╔════╝██║  ██║██╔══██╗██╔══██╗████╗ ████║██╔══██╗
  ███████╗███████║███████║██████╔╝██╔████╔██║███████║
  ╚════██║██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║
  ███████║██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║
  ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝
`}
        </pre>
      </div>

      {/* Navigations */}
      <nav className="my-8 flex flex-wrap gap-4">
        {/* Home */}
        <Button
          variant={`${selectedSection== 'home' ? 'selected' : "ghost"}`}
          className={`gap-2 ${selectedSection === "home" ? "text-violet-400" : ""}`}
          onClick={() => setSelectedSection("home")}
        >
          <Terminal className="w-4 h-4" />
          ~/home
        </Button>

        {/* About */}
        <Button
          variant={`${selectedSection== 'about' ? 'selected' : "ghost"}`}
          className={`gap-2 ${selectedSection === "about" ? "text-violet-400" : ""}`}
          onClick={() => setSelectedSection("about")}
        >
          <User className="w-4 h-4" />
          ~/about
        </Button>

        {/* Project */}
        <Button
          variant={`${selectedSection== 'projects' ? 'selected' : "ghost"}`}
          className={`gap-2 ${selectedSection === "projects" ? "text-violet-400" : ""}`}
          onClick={() => setSelectedSection("projects")}
        >
          <Code className="w-4 h-4" />
          ~/projects
        </Button>
      </nav>

      {/* Content */}
      <motion.div key={selectedSection} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        {selectedSection === "home" && tabs.home.content}
        {selectedSection === "about" && tabs.about.content}
        {selectedSection === "projects" && (
          <div className="space-y-6">
            {tabs.projects.content}
          </div>
        )}
      </motion.div>
    </div>
  );
}
