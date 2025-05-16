import projects from "@/content/projects";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (<>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.tags}
          liveLink={project.liveLink}
          devLink={project.devLink}
        />
      ))}
    </div>
  </>

  )

}
