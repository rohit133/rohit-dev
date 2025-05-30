import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Folder, ExternalLink, Github } from "lucide-react"

export default function ProjectCard({ 
  title, 
  description,
  tags,
  liveLink,
  devLink 
}: { title: string; description: string; tags: string[], liveLink: string, devLink: string}) {

  
  // const handleCardClick = () => {
  //   router.push(devLink);
  // }

  return (
    <Card className="p-6 bg-[#F1EFEC] dark:bg-gray-800  border-gray-800 hover:border-violet-400 transition-colors hover:color-violet-400">
      <div className="flex items-start gap-3 h-full">
        <Folder className="flex-none w-5 h-5 text-purple-blue" />
        <div className="flex flex-col justify-between h-full gap-1">
          <div>
            <h3 className="text-purple-blue font-semibold">{title}</h3>
            <p className="mt-2 text-sm">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-md bg-[#D4C9BE] dark:bg-gray-700">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-row-reverse gap-2">
            { liveLink && <Link href={liveLink} onClick={(e) => e.stopPropagation()}><ExternalLink className="w-6 h-6"/></Link>}
            { devLink && <Link href={devLink} onClick={(e) => e.stopPropagation()}><Github className="w-6 h-6"/></Link>}
          </div>
        </div>
      </div>
    </Card>
  )
}
