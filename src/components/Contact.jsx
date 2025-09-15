import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  const email = "mateuszturowski123@gmail.com";
  const subject = encodeURIComponent("Contacting regarding...");
  const body = encodeURIComponent("Hi Mateusz,\n\nI wanted to reach out regarding...");

  return (
    <div className="bg-gray-900 rounded-lg shadow p-8 text-center space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <p className="text-gray-300 max-w-md mx-auto">
        I'm always open to new opportunities, collaborations, or just a friendly chat.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <a
          href={`mailto:${email}?subject=${subject}&body=${body}`}
          className="flex items-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
        >
          <Mail size={20}/> Email Me
        </a>
        <a
          href="https://github.com/Matt-T-123"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
        >
          <Github size={20}/> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mateusz-turowski-2a1259250/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
        >
          <Linkedin size={20}/> LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
