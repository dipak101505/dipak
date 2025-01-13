import Image from "next/image";

export default function Home() {
  const skills = {
    Frontend: {
      title: "Frontend Development",
      description: "HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS",
      icon: "🎨" // Optional: Add icons
    },
    Backend: {
      title: "Backend Development",
      description: "Node.js, Python, Java, RESTful APIs, GraphQL, MongoDB",
      icon: "⚙️"
    },
    Cloud: {
      title: "Cloud & DevOps",
      description: "AWS, Azure, Docker, Kubernetes, CI/CD, Linux",
      icon: "☁️"
    }
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">Dipak Agarwal</h1>
          <p className="text-xl md:text-2xl text-gray-300">Software Developer | Cloud Engineer</p>
          <a href="#contact" className="inline-block px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Hello! I'm Dipak, a passionate software developer and cloud engineer. I specialize in building scalable cloud solutions and creating efficient software applications. With a strong foundation in modern technologies and cloud platforms, I help businesses transform their digital presence.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, skill]) => (
            <div key={key} className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
              <span className="text-3xl mb-2" style={{marginRight:'10px'}}>{skill.icon}</span>
              <span className="text-xl font-bold mb-4">{skill.title}</span>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input 
              type="email" 
              placeholder="Your email"
              className="w-full p-3 border rounded-lg dark:bg-gray-800"
            />
            <textarea 
              placeholder="Your message"
              className="w-full p-3 border rounded-lg dark:bg-gray-800"
              rows="4"
            ></textarea>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}