type TagGroups = {
    [category: string]: string[];
};

const CATEGORY_LABELS: Record<string, string> = {
    language: "Language",
    framework: "Framework",
    tools: "Tools",
    db: "Database",
};

export default function Tags({ tags }: { tags: TagGroups }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-4">
            {Object.entries(tags).map(([category, tagList]) => (
            <div key={category} className="flex flex-col">
                <div className="font-semibold mb-2">{CATEGORY_LABELS[category] || category}</div>
                <div className="flex flex-col gap-2">
                {tagList.map((tag) => (
                    <div key={tag} className="flex items-center">
                        <span className="relative px-2 py-1 text-xs rounded-md bg-gray-700 cursor-pointer text-left w-auto max-w-full group">
                            {tag}
                            {/* Hover info only on border */}
                            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 pointer-events-none z-10">
                                <span className="relative flex items-center">
                                    <span className="bg-black text-violet-400 text-xs rounded px-2 py-1 whitespace-nowrap">
                                        Info about {tag}
                                        {/* Add Analytis for more intractivity */}

                                    
                                
                                    </span>
                                    {/* Arrow */}
                                    <span className="absolute top-1/2 right-full -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-black"></span>
                                </span>
                            </span>
                            {/* Transparent border overlay for hover */}
                            <span className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-violet-400 transition-colors duration-300 pointer-events-auto"></span>
                        </span>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
    );
}
