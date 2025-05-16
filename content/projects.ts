interface Project {
  title: string
  description: string
  tags: string[]
  liveLink: string
  devLink: string
}

const projects: Project[] = [
  {
    title: "Crublibrary",
    description: "A node package manager with dashboard application to track the usage of api.",
    tags: ["Next.js", "MongoDB  ", "Express.js"],
    liveLink: "https://crublibrary-dashboard-crud.vercel.app/",
    devLink: "https://github.com/rohit133/crublibrary-dashboard",
  },
  {
    title: "Taskmaster api",
    description: "A backend only infrastructure for creating, assigning and updating task.",
    tags: ["Express.js", "Node.js", "MongoDB"],
    liveLink: "",
    devLink: "https://github.com/rohit133/taskmaster-api",
  },
  {
    title: "Open D",
    description: "A Web3 platform using Internet computer blockchain to mint and sell user NTF's.",
    tags: ["React", "JavaScript", "Motoko", "Web3"],
    liveLink: "",
    devLink: "https://github.com/rohit133/opneD"
  }
]

export default projects;
