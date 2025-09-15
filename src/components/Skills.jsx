function Skills() {
  const skills = [
    "JavaScript", "React", "Java", "Node.js", "MongoDB", "SQL", "Python",
    "HTML", "CSS", "Git", "GSC", "And more..."
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 transition hover:shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-500">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-center px-4 py-3 bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-gray-300 rounded-xl font-medium hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
