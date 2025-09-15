function Projects() {
  const projects = [
    {
      title: "My Website",
      description: "This site. Built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "Discord Bots",
      description: "Different types of bots built for users on Discord using node.js.",
      tags: ["JavaScript", "Discord.js"],
    },
    {
      title: "Art Station API",
      description: "A RESTful API for accessing Art Station website artwork",
      tags: ["API", "JavaScript"],
    },
    {
      title: "Matrix Bullet Time Effect",
      description: "A recreation of the bullet time effect from The Matrix using many raspberry pis, computers and code.",
      tags: ["Node.js", "React", "Raspberry Pi"],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 transition hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-500">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
